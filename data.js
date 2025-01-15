const data = [
    {
        word: "hello",
        ipa_pronunciation: ["həˈloʊ", "hɛˈloʊ"],
        translations: {
            vn: ["xin chào"],
            my: ["hai"], 
            zh: ["你好"],
            ja: ["こんにちは"],
            ar: ["مرحبا"]
        },
    },
    {
        word: "goodbye",
        ipa_pronunciation: ["ˌɡʊdˈbaɪ"],
        translations: {
            vn: ["tạm biệt"],
            my: ["selamat tinggal"], 
            zh: ["再见"],
            ja: ["さようなら"],
            ar: ["وداعا"]
        },
    },
    {
        word: "please",
        ipa_pronunciation: ["pliːz"],
        translations: {
            vn: ["làm ơn"],
            my: ["tolong"], 
            zh: ["请"],
            ja: ["どうぞ"],
            ar: ["من فضلك"]
        },
    },
    {
        word: "thank you",
        ipa_pronunciation: ["θæŋk juː"],
        translations: {
            vn: ["cảm ơn"],
            my: ["terima kasih"], 
            zh: ["谢谢你"],
            ja: ["ありがとう"],
            ar: ["شكرا"]
        },
    },
    {
        word: "yes",
        ipa_pronunciation: ["jɛs"],
        translations: {
            vn: ["có"],
            my: ["ya"], 
            zh: ["是的"],
            ja: ["はい"],
            ar: ["نعم"]
        },
    },
    {
        word: "no",
        ipa_pronunciation: ["noʊ"],
        translations: {
            vn: ["không"],
            my: ["tidak"], 
            zh: ["不"],
            ja: ["いいえ"],
            ar: ["لا"]
        },
    },
    {
        word: "sorry",
        ipa_pronunciation: ["ˈsɒri"],
        translations: {
            vn: ["xin lỗi"],
            my: ["maaf"], 
            zh: ["对不起"],
            ja: ["ごめんなさい"],
            ar: ["عذرًا"]
        },
    },
    {
        word: "excuse me",
        ipa_pronunciation: ["ɪkˈskjuːs miː"],
        translations: {
            vn: ["xin lỗi"],
            my: ["permisi"], 
            zh: ["打扰一下"],
            ja: ["すみません"],
            ar: ["عذرا"]
        },
    },
    {
        word: "good morning",
        ipa_pronunciation: ["ˌɡʊd ˈmɔrnɪŋ"],
        translations: {
            vn: ["chào buổi sáng"],
            my: ["selamat pagi"], 
            zh: ["早上好"],
            ja: ["おはようございます"],
            ar: ["صباح الخير"]
        },
    },
    {
        word: "good evening",
        ipa_pronunciation: ["ˌɡʊd ˈiːvənɪŋ"],
        translations: {
            vn: ["chào buổi tối"],
            my: ["selamat petang"], 
            zh: ["晚上好"],
            ja: ["こんばんは"],
            ar: ["مساء الخير"]
        },
    },
    {
        word: "good night",
        ipa_pronunciation: ["ˌɡʊd ˈnaɪt"],
        translations: {
            vn: ["chúc ngủ ngon"],
            my: ["selamat malam"], 
            zh: ["晚安"],
            ja: ["おやすみなさい"],
            ar: ["تصبح على خير"]
        },
    },
    {
        word: "how are you",
        ipa_pronunciation: ["haʊ ɑr juː"],
        translations: {
            vn: ["bạn có khỏe không?"],
            my: ["apa khabar?"], 
            zh: ["你好吗？"],
            ja: ["お元気ですか？"],
            ar: ["كيف حالك؟"]
        },
    },
    {
        word: "I am fine",
        ipa_pronunciation: ["aɪ æm faɪn"],
        translations: {
            vn: ["tôi ổn"],
            my: ["saya baik-baik saja"], 
            zh: ["我很好"],
            ja: ["私は元気です"],
            ar: ["أنا بخير"]
        },
    },
    {
        word: "what is your name",
        ipa_pronunciation: ["wʌt ɪz jɔːr neɪm"],
        translations: {
            vn: ["tên bạn là gì?"],
            my: ["siap nama anda?"], 
            zh: ["你叫什么名字？"],
            ja: ["あなたの名前は何ですか？"],
            ar: ["ما اسمك؟"]
        },
    },
    {
        word: "my name is",
        ipa_pronunciation: ["maɪ neɪm ɪz"],
        translations: {
            vn: ["tên tôi là"],
            my: ["nama saya"], 
            zh: ["我的名字是"],
            ja: ["私の名前は"],
            ar: ["اسمي"]
        },
    },
    {
        word: "where are you from",
        ipa_pronunciation: ["wɛr ɑr ju frəm"],
        translations: {
            vn: ["bạn đến từ đâu?"],
            my: ["anda berasal dari mana?"], 
            zh: ["你来自哪里？"],
            ja: ["あなたはどこから来ましたか？"],
            ar: ["من أين أنت؟"]
        },
    },
    {
        word: "I am from",
        ipa_pronunciation: ["aɪ æm frəm"],
        translations: {
            vn: ["tôi đến từ"],
            my: ["saya berasal dari"], 
            zh: ["我来自"],
            ja: ["私は～から来ました"],
            ar: ["أنا من"]
        },
    },
    {
        word: "see you later",
        ipa_pronunciation: ["siː ju leɪtər"],
        translations: {
            vn: ["hẹn gặp lại sau"],
            my: ["jumpa lagi"], 
            zh: ["一会儿见"],
            ja: ["またね"],
            ar: ["أراك لاحقا"]
        },
    },
    {
        word: "have a nice day",
        ipa_pronunciation: ["hæv ə naɪs deɪ"],
        translations: {
            vn: ["chúc một ngày tốt lành"],
            my: ["semoga hari anda menyenangkan"], 
            zh: ["祝你今天愉快"],
            ja: ["良い一日を"],
            ar: ["أتمنى لك يوماً سعيداً"]
        },
    },
    {
        word: "can",
        ipa_pronunciation: ["kæn"],
        translations: {
            vn: ["có thể"],
            my: ["boleh"], 
            zh: ["可以"],
            ja: ["できる"],
            ar: ["يمكن"]
        },
    },
    {
        word: "help",
        ipa_pronunciation: ["hɛlp"],
        translations: {
            vn: ["giúp đỡ"],
            my: ["bantuan"], 
            zh: ["帮助"],
            ja: ["助ける"],
            ar: ["مساعدة"]
        },
    },
    {
        word: "here",
        ipa_pronunciation: ["hɪr"],
        translations: {
            vn: ["đây"],
            my: ["di sini"], 
            zh: ["这里"],
            ja: ["ここに"],
            ar: ["هنا"]
        },
    },
    {
        word: "there",
        ipa_pronunciation: ["ðɛr"],
        translations: {
            vn: ["đó"],
            my: ["di sana"], 
            zh: ["那里"],
            ja: ["そこ"],
            ar: ["هناك"]
        },
    },
    {
        word: "this",
        ipa_pronunciation: ["ðɪs"],
        translations: {
            vn: ["cái này"],
            my: ["ini"], 
            zh: ["这个"],
            ja: ["これ"],
            ar: ["هذا"]
        },
    },
    {
        word: "that",
        ipa_pronunciation: ["ðæt"],
        translations: {
            vn: ["cái đó"],
            my: ["itu"], 
            zh: ["那个"],
            ja: ["それ"],
            ar: ["ذلك"]
        },
    },
    {
        word: "who",
        ipa_pronunciation: ["huː"],
        translations: {
            vn: ["ai"],
            my: ["siapa"], 
            zh: ["谁"],
            ja: ["誰"],
            ar: ["من"]
        },
    },
    {
        word: "what",
        ipa_pronunciation: ["wʌt"],
        translations: {
            vn: ["gì"],
            my: ["apa"], 
            zh: ["什么"],
            ja: ["何"],
            ar: ["ماذا"]
        },
    },
    {
        word: "where",
        ipa_pronunciation: ["wɛr"],
        translations: {
            vn: ["đâu"],
            my: ["di mana"], 
            zh: ["哪里"],
            ja: ["どこ"],
            ar: ["أين"]
        },
    },
    {
        word: "when",
        ipa_pronunciation: ["wɛn"],
        translations: {
            vn: ["khi nào"],
            my: ["bilakah"], 
            zh: ["什么时候"],
            ja: ["いつ"],
            ar: ["متى"]
        },
    },
    {
        word: "why",
        ipa_pronunciation: ["waɪ"],
        translations: {
            vn: ["tại sao"],
            my: ["kenapa"], 
            zh: ["为什么"],
            ja: ["なぜ"],
            ar: ["لماذا"]
        },
    },
    {
        word: "how",
        ipa_pronunciation: ["haʊ"],
        translations: {
            vn: ["như thế nào"],
            my: ["bagaimana"], 
            zh: ["怎么"],
            ja: ["どのように"],
            ar: ["كيف"]
        },
    },
    {
        word: "and",
        ipa_pronunciation: ["ænd"],
        translations: {
            vn: ["và"],
            my: ["dan"], 
            zh: ["和"],
            ja: ["と"],
            ar: ["و"]
        },
    },
    {
        word: "but",
        ipa_pronunciation: ["bət"],
        translations: {
            vn: ["nhưng"],
            my: ["tetapi"], 
            zh: ["但是"],
            ja: ["しかし"],
            ar: ["لكن"]
        },
    },
    {
        word: "or",
        ipa_pronunciation: ["ɔːr"],
        translations: {
            vn: ["hoặc"],
            my: ["atau"], 
            zh: ["或者"],
            ja: ["または"],
            ar: ["أو"]
        },
    },
    {
        word: "because",
        ipa_pronunciation: ["bɪˈkəz"],
        translations: {
            vn: ["bởi vì"],
            my: ["kerana"], 
            zh: ["因为"],
            ja: ["なぜなら"],
            ar: ["لأن"]
        },
    },
    {
        word: "if",
        ipa_pronunciation: ["ɪf"],
        translations: {
            vn: ["nếu"],
            my: ["jika"], 
            zh: ["如果"],
            ja: ["もし"],
            ar: ["إذا"]
        },
    },
    {
        word: "so",
        ipa_pronunciation: ["soʊ"],
        translations: {
            vn: ["vì vậy"],
            my: ["jadi"], 
            zh: ["所以"],
            ja: ["だから"],
            ar: ["لذا"]
        },
    },
    {
        word: "then",
        ipa_pronunciation: ["ðɛn"],
        translations: {
            vn: ["sau đó"],
            my: ["kemudian"], 
            zh: ["然后"],
            ja: ["それから"],
            ar: ["ثم"]
        },
    },
    {
        word: "now",
        ipa_pronunciation: ["naʊ"],
        translations: {
            vn: ["bây giờ"],
            my: ["sekarang"], 
            zh: ["现在"],
            ja: ["今"],
            ar: ["الآن"]
        },
    },
    {
        word: "today",
        ipa_pronunciation: ["təˈdeɪ"],
        translations: {
            vn: ["hôm nay"],
            my: ["hari ini"], 
            zh: ["今天"],
            ja: ["今日"],
            ar: ["اليوم"]
        },
    },
    {
        word: "tomorrow",
        ipa_pronunciation: ["təˈmɒroʊ"],
        translations: {
            vn: ["ngày mai"],
            my: ["esok"], 
            zh: ["明天"],
            ja: ["明日"],
            ar: ["غدا"]
        },
    },
    {
        word: "yesterday",
        ipa_pronunciation: ["ˈjɛstərˌdeɪ"],
        translations: {
            vn: ["hôm qua"],
            my: ["kelmarin"], 
            zh: ["昨天"],
            ja: ["昨日"],
            ar: ["أمس"]
        },
    },
    {
        word: "time",
        ipa_pronunciation: ["taɪm"],
        translations: {
            vn: ["thời gian"],
            my: ["masa"], 
            zh: ["时间"],
            ja: ["時間"],
            ar: ["وقت"]
        },
    },
    {
        word: "day",
        ipa_pronunciation: ["deɪ"],
        translations: {
            vn: ["ngày"],
            my: ["hari"], 
            zh: ["天"],
            ja: ["日"],
            ar: ["يوم"]
        },
    },
    {
        word: "week",
        ipa_pronunciation: ["wik"],
        translations: {
            vn: ["tuần"],
            my: ["minggu"], 
            zh: ["周"],
            ja: ["週"],
            ar: ["أسبوع"]
        },
    },
    {
        word: "month",
        ipa_pronunciation: ["mʌnθ"],
        translations: {
            vn: ["tháng"],
            my: ["bulan"], 
            zh: ["月"],
            ja: ["月"],
            ar: ["شهر"]
        },
    },
    {
        word: "year",
        ipa_pronunciation: ["jɪr"],
        translations: {
            vn: ["năm"],
            my: ["tahun"], 
            zh: ["年"],
            ja: ["年"],
            ar: ["سنة"]
        },
    },
    {
        word: "hour",
        ipa_pronunciation: ["aʊər"],
        translations: {
            vn: ["giờ"],
            my: ["jam"], 
            zh: ["小时"],
            ja: ["時間"],
            ar: ["ساعة"]
        },
    },
    {
        word: "minute",
        ipa_pronunciation: ["ˈmɪnɪt"],
        translations: {
            vn: ["phút"],
            my: ["minit"], 
            zh: ["分钟"],
            ja: ["分"],
            ar: ["دقيقة"]
        },
    },
    {
        word: "second",
        ipa_pronunciation: ["ˈsɛkənd"],
        translations: {
            vn: ["giây"],
            my: ["saat"], 
            zh: ["秒"],
            ja: ["秒"],
            ar: ["ثانية"]
        },
    },
    {
        word: "morning",
        ipa_pronunciation: ["ˈmɔrnɪŋ"],
        translations: {
            vn: ["buổi sáng"],
            my: ["pagi"], 
            zh: ["早上"],
            ja: ["朝"],
            ar: ["صباح"]
        },
    },
    {
        word: "afternoon",
        ipa_pronunciation: ["ˌæftərˈnuːn"],
        translations: {
            vn: ["buổi chiều"],
            my: ["petang"], 
            zh: ["下午"],
            ja: ["午後"],
            ar: ["بعد الظهر"]
        },
    },
    {
        word: "evening",
        ipa_pronunciation: ["ˈiːvənɪŋ"],
        translations: {
            vn: ["buổi tối"],
            my: ["petang"], 
            zh: ["晚上"],
            ja: ["夜"],
            ar: ["مساء"]
        },
    },
    {
        word: "night",
        ipa_pronunciation: ["naɪt"],
        translations: {
            vn: ["đêm"],
            my: ["malam"], 
            zh: ["夜晚"],
            ja: ["夜"],
            ar: ["ليلة"]
        },
    },
    {
        word: "man",
        ipa_pronunciation: ["mæn"],
        translations: {
            vn: ["người đàn ông"],
            my: ["lelaki"], 
            zh: ["男人"],
            ja: ["男"],
            ar: ["رجل"]
        },
    },
    {
        word: "woman",
        ipa_pronunciation: ["ˈwʊmən"],
        translations: {
            vn: ["người phụ nữ"],
            my: ["perempuan"], 
            zh: ["女人"],
            ja: ["女"],
            ar: ["امرأة"]
        },
    },
    {
        word: "child",
        ipa_pronunciation: ["tʃaɪld"],
        translations: {
            vn: ["trẻ em"],
            my: ["kanak-kanak"], 
            zh: ["孩子"],
            ja: ["子供"],
            ar: ["طفل"]
        },
    },
    {
        word: "boy",
        ipa_pronunciation: ["bɔɪ"],
        translations: {
            vn: ["cậu bé"],
            my: ["budak lelaki"], 
            zh: ["男孩"],
            ja: ["男の子"],
            ar: ["فتى"]
        },
    },
    {
        word: "girl",
        ipa_pronunciation: ["ɡɜːrl"],
        translations: {
            vn: ["cô bé"],
            my: ["budak perempuan"], 
            zh: ["女孩"],
            ja: ["女の子"],
            ar: ["فتاة"]
        },
    },
    {
        word: "father",
        ipa_pronunciation: ["ˈfɑːðər"],
        translations: {
            vn: ["cha"],
            my: ["ayah"], 
            zh: ["父亲"],
            ja: ["父親"],
            ar: ["أب"]
        },
    },
    {
        word: "mother",
        ipa_pronunciation: ["ˈmʌðər"],
        translations: {
            vn: ["mẹ"],
            my: ["ibu"], 
            zh: ["母亲"],
            ja: ["母親"],
            ar: ["أم"]
        },
    },
    {
        word: "son",
        ipa_pronunciation: ["sʌn"],
        translations: {
            vn: ["con trai"],
            my: ["anak lelaki"], 
            zh: ["儿子"],
            ja: ["息子"],
            ar: ["ابن"]
        },
    },
    {
        word: "daughter",
        ipa_pronunciation: ["ˈdɔːtər"],
        translations: {
            vn: ["con gái"],
            my: ["anak perempuan"], 
            zh: ["女儿"],
            ja: ["娘"],
            ar: ["ابنة"]
        },
    },
    {
        word: "family",
        ipa_pronunciation: ["ˈfæməli"],
        translations: {
            vn: ["gia đình"],
            my: ["keluarga"], 
            zh: ["家庭"],
            ja: ["家族"],
            ar: ["عائلة"]
        },
    },
    {
        word: "home",
        ipa_pronunciation: ["hoʊm"],
        translations: {
            vn: ["nhà"],
            my: ["rumah"], 
            zh: ["家"],
            ja: ["家"],
            ar: ["منزل"]
        },
    },
    {
        word: "house",
        ipa_pronunciation: ["haʊs"],
        translations: {
            vn: ["nhà"],
            my: ["rumah"], 
            zh: ["房子"],
            ja: ["家"],
            ar: ["بيت"]
        },
    },
    {
        word: "room",
        ipa_pronunciation: ["ruːm"],
        translations: {
            vn: ["phòng"],
            my: ["bilik"], 
            zh: ["房间"],
            ja: ["部屋"],
            ar: ["غرفة"]
        },
    },
    {
        word: "bed",
        ipa_pronunciation: ["bɛd"],
        translations: {
            vn: ["giường"],
            my: ["katil"], 
            zh: ["床"],
            ja: ["ベッド"],
            ar: ["سرير"]
        },
    },
    {
        word: "kitchen",
        ipa_pronunciation: ["ˈkɪtʃɪn"],
        translations: {
            vn: ["nhà bếp"],
            my: ["dapur"], 
            zh: ["厨房"],
            ja: ["台所"],
            ar: ["مطبخ"]
        },
    },
    {
        word: "bathroom",
        ipa_pronunciation: ["ˈbæθruːm"],
        translations: {
            vn: ["phòng tắm"],
            my: ["bilik mandi"], 
            zh: ["浴室"],
            ja: ["バスルーム"],
            ar: ["حمام"]
        },
    },
    {
        word: "living room",
        ipa_pronunciation: ["ˈlɪvɪŋ ruːm"],
        translations: {
            vn: ["phòng khách"],
            my: ["bilik tamu"], 
            zh: ["客厅"],
            ja: ["リビングルーム"],
            ar: ["صالة"]
        },
    },
    {
        word: "door",
        ipa_pronunciation: ["dɔːr"],
        translations: {
            vn: ["cửa"],
            my: ["pintu"], 
            zh: ["门"],
            ja: ["ドア"],
            ar: ["باب"]
        },
    },
    {
        word: "window",
        ipa_pronunciation: ["ˈwɪndoʊ"],
        translations: {
            vn: ["cửa sổ"],
            my: ["tingkap"], 
            zh: ["窗户"],
            ja: ["窓"],
            ar: ["نافذة"]
        },
    },
    {
        word: "table",
        ipa_pronunciation: ["ˈteɪbl"],
        translations: {
            vn: ["bàn"],
            my: ["meja"], 
            zh: ["桌子"],
            ja: ["テーブル"],
            ar: ["طاولة"]
        },
    },
    {
        word: "chair",
        ipa_pronunciation: ["tʃɛr"],
        translations: {
            vn: ["ghế"],
            my: ["kerusi"], 
            zh: ["椅子"],
            ja: ["椅子"],
            ar: ["كرسي"]
        },
    },
    {
        word: "book",
        ipa_pronunciation: ["bʊk"],
        translations: {
            vn: ["sách"],
            my: ["buku"], 
            zh: ["书"],
            ja: ["本"],
            ar: ["كتاب"]
        },
    },
    {
        word: "pen",
        ipa_pronunciation: ["pɛn"],
        translations: {
            vn: ["bút"],
            my: ["pen"], 
            zh: ["笔"],
            ja: ["ペン"],
            ar: ["قلم"]
        },
    },
    {
        word: "pencil",
        ipa_pronunciation: ["ˈpɛnsəl"],
        translations: {
            vn: ["bút chì"],
            my: ["pensel"], 
            zh: ["铅笔"],
            ja: ["鉛筆"],
            ar: ["قلم رصاص"]
        },
    },
    {
        word: "paper",
        ipa_pronunciation: ["ˈpeɪpər"],
        translations: {
            vn: ["giấy"],
            my: ["kertas"], 
            zh: ["纸"],
            ja: ["紙"],
            ar: ["ورقة"]
        },
    },
    {
        word: "computer",
        ipa_pronunciation: ["kəmˈpjuːtər"],
        translations: {
            vn: ["máy tính"],
            my: ["komputer"], 
            zh: ["电脑"],
            ja: ["コンピュータ"],
            ar: ["كمبيوتر"]
        },
    },
    {
        word: "phone",
        ipa_pronunciation: ["foʊn"],
        translations: {
            vn: ["điện thoại"],
            my: ["telefon"], 
            zh: ["电话"],
            ja: ["電話"],
            ar: ["هاتف"]
        },
    },
    {
        word: "car",
        ipa_pronunciation: ["kɑːr"],
        translations: {
            vn: ["ô tô"],
            my: ["kereta"], 
            zh: ["汽车"],
            ja: ["車"],
            ar: ["سيارة"]
        },
    },
    {
        word: "bus",
        ipa_pronunciation: ["bʌs"],
        translations: {
            vn: ["xe buýt"],
            my: ["bas"], 
            zh: ["公共汽车"],
            ja: ["バス"],
            ar: ["حافلة"]
        },
    },
    {
        word: "train",
        ipa_pronunciation: ["treɪn"],
        translations: {
            vn: ["tàu hỏa"],
            my: ["kereta api"], 
            zh: ["火车"],
            ja: ["電車"],
            ar: ["قطار"]
        },
    },
    {
        word: "bike",
        ipa_pronunciation: ["baɪk"],
        translations: {
            vn: ["xe đạp"],
            my: ["basikal"], 
            zh: ["自行车"],
            ja: ["自転車"],
            ar: ["دراجة"]
        },
    },
    {
        word: "walk",
        ipa_pronunciation: ["wɔk"],
        translations: {
            vn: ["đi bộ"],
            my: ["berjalan"], 
            zh: ["走路"],
            ja: ["歩く"],
            ar: ["يمشي"]
        },
    },
    {
        word: "run",
        ipa_pronunciation: ["rʌn"],
        translations: {
            vn: ["chạy"],
            my: ["berlari"], 
            zh: ["跑"],
            ja: ["走る"],
            ar: ["يجري"]
        },
    },
    {
        word: "swim",
        ipa_pronunciation: ["swɪm"],
        translations: {
            vn: ["bơi lội"],
            my: ["berenang"], 
            zh: ["游泳"],
            ja: ["泳ぐ"],
            ar: ["يسبح"]
        },
    },
    {
        word: "eat",
        ipa_pronunciation: ["iːt"],
        translations: {
            vn: ["ăn"],
            my: ["makan"], 
            zh: ["吃"],
            ja: ["食べる"],
            ar: ["يأكل"]
        },
    },
    {
        word: "drink",
        ipa_pronunciation: ["drɪŋk"],
        translations: {
            vn: ["uống"],
            my: ["minum"], 
            zh: ["喝"],
            ja: ["飲む"],
            ar: ["يشرب"]
        },
    },
    {
        word: "sleep",
        ipa_pronunciation: ["sliːp"],
        translations: {
            vn: ["ngủ"],
            my: ["tidur"], 
            zh: ["睡觉"],
            ja: ["寝る"],
            ar: ["ينام"]
        },
    },
    {
        word: "read",
        ipa_pronunciation: ["riːd"],
        translations: {
            vn: ["đọc"],
            my: ["membaca"], 
            zh: ["读"],
            ja: ["読む"],
            ar: ["يقرأ"]
        },
    },
    {
        word: "write",
        ipa_pronunciation: ["raɪt"],
        translations: {
            vn: ["viết"],
            my: ["menulis"], 
            zh: ["写"],
            ja: ["書く"],
            ar: ["يكتب"]
        },
    },
    {
        word: "work",
        ipa_pronunciation: ["wɜːrk"],
        translations: {
            vn: ["làm việc"],
            my: ["kerja"], 
            zh: ["工作"],
            ja: ["働く"],
            ar: ["يعمل"]
        },
    },
    {
        word: "play",
        ipa_pronunciation: ["pleɪ"],
        translations: {
            vn: ["chơi"],
            my: ["bermain"], 
            zh: ["玩"],
            ja: ["遊ぶ"],
            ar: ["يلعب"]
        },
    },
    {
        word: "study",
        ipa_pronunciation: ["ˈstʌdi"],
        translations: {
            vn: ["học"],
            my: ["belajar"], 
            zh: ["学习"],
            ja: ["勉強する"],
            ar: ["يدرس"]
        },
    },
    {
        word: "learn",
        ipa_pronunciation: ["lɜːrn"],
        translations: {
            vn: ["học"],
            my: ["mempelajari"], 
            zh: ["学习"],
            ja: ["学ぶ"],
            ar: ["يتعلم"]
        },
    },
    {
        word: "listen",
        ipa_pronunciation: ["ˈlɪsən"],
        translations: {
            vn: ["nghe"],
            my: ["mendengar"], 
            zh: ["听"],
            ja: ["聞く"],
            ar: ["يستمع"]
        },
    },
    {
        word: "speak",
        ipa_pronunciation: ["spiːk"],
        translations: {
            vn: ["nói"],
            my: ["berbicara"], 
            zh: ["说"],
            ja: ["話す"],
            ar: ["يتكلم"]
        },
    },
    {
        word: "sing",
        ipa_pronunciation: ["sɪŋ"],
        translations: {
            vn: ["hát"],
            my: ["bernyanyi"], 
            zh: ["唱"],
            ja: ["歌う"],
            ar: ["يغني"]
        },
    },
    {
        word: "dance",
        ipa_pronunciation: ["dæns"],
        translations: {
            vn: ["nhảy múa"],
            my: ["menari"], 
            zh: ["跳舞"],
            ja: ["踊る"],
            ar: ["يرقص"]
        },
    },
    {
        word: "watch",
        ipa_pronunciation: ["wɑːtʃ"],
        translations: {
            vn: ["xem"],
            my: ["menonton"], 
            zh: ["看"],
            ja: ["見る"],
            ar: ["يشاهد"]
        },
    },
    {
        word: "open",
        ipa_pronunciation: ["ˈoʊpən"],
        translations: {
            vn: ["mở"],
            my: ["membuka"], 
            zh: ["打开"],
            ja: ["開ける"],
            ar: ["يفتح"]
        },
    },
    {
        word: "close",
        ipa_pronunciation: ["kloʊz"],
        translations: {
            vn: ["đóng"],
            my: ["menutup"], 
            zh: ["关"],
            ja: ["閉める"],
            ar: ["يغلق"]
        },
    },
    {
        word: "hot",
        ipa_pronunciation: ["hɑːt"],
        translations: {
            vn: ["nóng"],
            my: ["panas"], 
            zh: ["热"],
            ja: ["暑い"],
            ar: ["حار"]
        },
    },
    {
        word: "cold",
        ipa_pronunciation: ["koʊld"],
        translations: {
            vn: ["lạnh"],
            my: ["sejuk"], 
            zh: ["冷"],
            ja: ["寒い"],
            ar: ["بارد"]
        },
    },
    {
        word: "big",
        ipa_pronunciation: ["bɪɡ"],
        translations: {
            vn: ["lớn"],
            my: ["besar"], 
            zh: ["大"],
            ja: ["大きい"],
            ar: ["كبير"]
        },
    },
    {
        word: "small",
        ipa_pronunciation: ["smɔːl"],
        translations: {
            vn: ["nhỏ"],
            my: ["kecil"], 
            zh: ["小"],
            ja: ["小さい"],
            ar: ["صغير"]
        },
    },
    {
        word: "new",
        ipa_pronunciation: ["nuː"],
        translations: {
            vn: ["mới"],
            my: ["baru"], 
            zh: ["新"],
            ja: ["新しい"],
            ar: ["جديد"]
        },
    },
    {
        word: "old",
        ipa_pronunciation: ["oʊld"],
        translations: {
            vn: ["cũ"],
            my: ["lama"], 
            zh: ["旧"],
            ja: ["古い"],
            ar: ["قديم"]
        },
    },
    {
        word: "good",
        ipa_pronunciation: ["ɡʊd"],
        translations: {
            vn: ["tốt"],
            my: ["baik"], 
            zh: ["好"],
            ja: ["良い"],
            ar: ["جيد"]
        },
    },
    {
        word: "bad",
        ipa_pronunciation: ["bæd"],
        translations: {
            vn: ["xấu"],
            my: ["buruk"], 
            zh: ["坏"],
            ja: ["悪い"],
            ar: ["سيء"]
        },
    },
    {
        word: "happy",
        ipa_pronunciation: ["ˈhæpi"],
        translations: {
            vn: ["hạnh phúc"],
            my: ["gembira"], 
            zh: ["快乐"],
            ja: ["幸せな"],
            ar: ["سعيد"]
        },
    },
    {
        word: "sad",
        ipa_pronunciation: ["sæd"],
        translations: {
            vn: ["buồn"],
            my: ["sedih"], 
            zh: ["悲伤"],
            ja: ["悲しい"],
            ar: ["حزين"]
        },
    },
    {
        word: "hungry",
        ipa_pronunciation: ["ˈhʌŋɡri"],
        translations: {
            vn: ["đói"],
            my: ["lapar"], 
            zh: ["饿"],
            ja: ["空腹の"],
            ar: ["جائع"]
        },
    },
    {
        word: "thirsty",
        ipa_pronunciation: ["ˈθɜːrsti"],
        translations: {
            vn: ["khát"],
            my: ["haus"], 
            zh: ["渴"],
            ja: ["喉が渇いた"],
            ar: ["عطشان"]
        },
    },
    {
        word: "tired",
        ipa_pronunciation: ["ˈtaɪərd"],
        translations: {
            vn: ["mệt"],
            my: ["letih"], 
            zh: ["累"],
            ja: ["疲れた"],
            ar: ["متعب"]
        },
    }
];
