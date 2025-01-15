class KanaGame {
    constructor(kanaData) {
        this.kanaData = kanaData;
        this.currentKana = null;
        this.correctReadings = new Set();
        this.selectedReadings = new Set();
        this.currentLanguage = 'vn'; // Default to Vietnamese translations
        
        // Update element IDs to match new kana-focused naming
        this.kanaElement = document.getElementById('currentKana');
        this.readingsElement = document.getElementById('readings');
        this.successIndicator = document.getElementById('success-indicator');
        this.themeToggle = document.getElementById('themeToggle');
        this.translationToggle = document.getElementById('toggleTranslation');
        this.infoButton = document.getElementById('infoButton');
        this.popup = document.getElementById('wordListPopup');
        this.closePopupButton = document.getElementById('closePopup');
        this.languageSelect = document.getElementById('languageSelect');

        // Footer copyright
        const currentYear = new Date().getFullYear();
        const copyrightYear = document.getElementById('copyright-year');
        copyrightYear.textContent = currentYear > 2025 ? `2025-${currentYear}` : '2025';
        
        // Initialize speech synthesis voices
        this.initializeVoices();
        this.initializeLanguageOptions();
        this.initializeEventListeners();
        this.initializeWordList();
        this.showNextKana();

        // Add ARIA attributes to kanji display
        this.kanaElement.setAttribute('role', 'region');
        this.kanaElement.setAttribute('aria-label', 'Current kana character');
        this.readingsElement.setAttribute('role', 'group');
        this.readingsElement.setAttribute('aria-label', 'Kana readings options');
    }

    initializeEventListeners() {
        this.themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            this.themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
        });

        this.translationToggle.addEventListener('click', () => {
            const translationElement = document.getElementById('translation');
            translationElement.classList.toggle('hidden');
            // Play the current kana when IPA is toggled
            if (!translationElement.classList.contains('hidden')) {
                this.playAudio(this.currentKana.word);
            }
        });

        // Add popup event listeners
        this.infoButton.addEventListener('click', () => {
            this.popup.classList.remove('hidden');
        });

        this.closePopupButton.addEventListener('click', () => {
            this.popup.classList.add('hidden');
        });

        // Close popup when clicking outside
        this.popup.addEventListener('click', (e) => {
            if (e.target === this.popup) {
                this.popup.classList.add('hidden');
            }
        });

        // Close popup with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.popup.classList.contains('hidden')) {
                this.popup.classList.add('hidden');
            }
        });

        // Add language change handler
        this.languageSelect.addEventListener('change', () => {
            this.currentLanguage = this.languageSelect.value;
            this.showNextKana(); // Refresh with new language
            
            // Show announcement for language change
            const announcement = document.createElement('div');
            const languageName = this.languageSelect.options[this.languageSelect.selectedIndex].text;
            announcement.className = 'announcement';
            announcement.textContent = `Switched to ${languageName} pronunciations`;
            document.body.appendChild(announcement);
            announcement.addEventListener('animationend', (e) => {
                if (e.animationName === 'fadeOut') {
                    announcement.remove();
                }
            });
        });
    }

    initializeVoices() {
        // Load voices if they're already available
        this.voices = window.speechSynthesis.getVoices();
        
        // If voices aren't loaded yet, wait for them
        if (this.voices.length === 0) {
            window.speechSynthesis.addEventListener('voiceschanged', () => {
                this.voices = window.speechSynthesis.getVoices();
            });
        }
    }

    initializeLanguageOptions() {
        const firstEntry = this.kanaData[0];
        const languages = {
            'vn': 'Tiếng Việt',
            'my': 'Bahasa Melayu',
            'zh': '中文',
            'ja': '日本語',
            'ar': 'العربية'
        };
        
        const languageSelect = this.languageSelect;
        languageSelect.innerHTML = '';
        
        Object.entries(languages).forEach(([code, label]) => {
            if (firstEntry.translations[code]) {
                const option = document.createElement('option');
                option.value = code;
                option.textContent = label;
                option.selected = code === this.currentLanguage;
                languageSelect.appendChild(option);
            }
        });
    }

    initializeWordList() {
        const wordListContainer = document.getElementById('wordList');
        const totalWords = this.kanaData.length;
        
        // Add word stats
        const statsDiv = document.createElement('div');
        statsDiv.className = 'word-stats';
        statsDiv.textContent = `Total Kana: ${totalWords}`;
        wordListContainer.appendChild(statsDiv);
        
        this.kanaData.forEach((kana, index) => {
            const wordItem = document.createElement('div');
            wordItem.className = 'word-item';
            
            const numberDiv = document.createElement('div');
            numberDiv.className = 'word-number';
            numberDiv.textContent = `${index + 1}.`;
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'word-content';
            
            const kanaChar = document.createElement('div');
            kanaChar.className = 'kana';
            kanaChar.textContent = kana.word;
            
            const pronunciation = document.createElement('div');
            pronunciation.className = 'pronunciation';
            pronunciation.textContent = kana.ipa_pronunciation.join(', ');
            
            contentDiv.appendChild(kanaChar);
            contentDiv.appendChild(pronunciation);
            
            wordItem.appendChild(numberDiv);
            wordItem.appendChild(contentDiv);
            wordListContainer.appendChild(wordItem);
        });
    }

    getRandomKana() {
        return this.kanaData[Math.floor(Math.random() * this.kanaData.length)];
    }

    getAllPossibleReadings() {
        return this.kanaData.reduce((acc, item) => {
            const translations = item.translations[this.currentLanguage] || [];
            translations.forEach(translation => acc.add(translation));
            return acc;
        }, new Set());
    }

    getWrongReadings(count) {
        const allReadings = Array.from(this.getAllPossibleReadings())
            .filter(reading => !this.correctReadings.has(reading));
        const shuffled = allReadings.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    async showNextKana() {
        const previousKana = this.currentKana;
        this.currentKana = this.getRandomKana();
        // Set correct readings from current language
        this.correctReadings = new Set(this.currentKana.translations[this.currentLanguage]);
        this.selectedReadings = new Set();
        
        // Animate out current kanji
        if (previousKana) {
            this.kanaElement.classList.add('kana-exit');
            await new Promise(r => setTimeout(r, 300));
        }

        // Update content
        this.kanaElement.textContent = this.currentKana.word;
        const translationElement = document.getElementById('translation');
        translationElement.textContent = this.currentKana.ipa_pronunciation.join(', ');
        this.kanaElement.setAttribute('aria-label', 
            `Current kana: ${this.currentKana.word}, IPA: ${this.currentKana.ipa_pronunciation.join(', ')}`);
        
        this.successIndicator.classList.add('hidden');
        
        this.displayReadingOptions();

        // Animate in new kanji
        this.kanaElement.classList.add('kana-enter');
        requestAnimationFrame(() => {
            this.kanaElement.classList.remove('kana-exit', 'kana-enter');
        });
    }

    displayReadingOptions() {
        const allReadings = [
            ...Array.from(this.correctReadings),
            ...this.getWrongReadings(4)
        ].sort(() => 0.5 - Math.random());
    
        this.readingsElement.innerHTML = '';
        
        allReadings.forEach((reading, index) => {
            const button = document.createElement('button');
            button.className = 'reading-option';
            
            const textSpan = document.createElement('span');
            textSpan.textContent = reading;
            textSpan.style.display = 'inline-block';
            textSpan.style.transition = 'transform 0.3s ease';
            button.appendChild(textSpan);
            
            button.setAttribute('role', 'button');
            button.setAttribute('aria-label', `Reading: ${reading}`);
            
            // Add keyboard handling
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleReadingSelection(button, reading);
                }
            });
            
            button.addEventListener('click', () => 
                this.handleReadingSelection(button, reading));
            
            this.readingsElement.appendChild(button);
        });
    }

    getBestVoice() {
        // Try to find a Microsoft voice first (generally higher quality)
        const microsoftVoice = this.voices.find(voice =>
            (voice.lang.includes('en-US') || voice.lang.includes('en-GB')) &&
            voice.name.includes('Microsoft')
        );

        if (microsoftVoice) return microsoftVoice;

        // Fall back to any English voice
        const anyEnglishVoice = this.voices.find(voice =>
            voice.lang.includes('en-US') || voice.lang.includes('en-GB')
        );

        return anyEnglishVoice;
    }

    async playAudio(text) {
        if (!window.speechSynthesis) {
            console.error('Speech synthesis not supported');
            return;
        }

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        const bestVoice = this.getBestVoice();
        if (bestVoice) {
            utterance.voice = bestVoice;
        }

        return new Promise((resolve) => {
            utterance.onend = () => resolve();
            utterance.onerror = () => resolve();
            window.speechSynthesis.speak(utterance);
        });
    }

    handleReadingSelection(button, reading) {
        if (button.classList.contains('disabled')) return;

        const showAnnouncement = (message, isCorrect) => {
            const announcement = document.createElement('div');
            announcement.className = `announcement ${isCorrect ? 'correct' : 'incorrect'}`;
            announcement.setAttribute('role', 'alert');
            announcement.textContent = message;
            document.body.appendChild(announcement);
            
            // Remove the announcement after animation
            announcement.addEventListener('animationend', (e) => {
                if (e.animationName === 'fadeOut') {
                    announcement.remove();
                }
            });
        };

        if (this.correctReadings.has(reading)) {
            button.classList.add('correct', 'disabled');
            button.setAttribute('aria-disabled', 'true');
            button.setAttribute('aria-pressed', 'true');
            this.selectedReadings.add(reading);
            
            // Play the kana character when correct
            this.playAudio(this.currentKana.word);
            showAnnouncement('Correct reading!', true);

            if (this.selectedReadings.size === this.correctReadings.size) {
                this.successIndicator.classList.remove('hidden');
                this.successIndicator.classList.add('visible');
                this.successIndicator.setAttribute('role', 'alert');
                this.successIndicator.setAttribute('aria-label', 'Correct! Moving to next kana');
                setTimeout(() => {
                    this.successIndicator.classList.remove('visible');
                    this.showNextKana();
                }, 1000);
            }
        } else {
            button.classList.add('incorrect');
            button.addEventListener('animationend', () => {
                button.classList.remove('incorrect');
            }, { once: true });
            
            showAnnouncement('Incorrect reading, try again', false);
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new KanaGame(data);
});