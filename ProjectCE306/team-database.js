// team-database.js
// ฐานข้อมูล VCT 44 ทีม (อัปเดต 2026)

// ---------------------------------------------------------
// 1. ฟังก์ชันตัวช่วยสร้างรายชื่อผู้เล่นแบบรวดเร็วเพื่อลดขนาดไฟล์
// ---------------------------------------------------------
const stdGear = { 
    mouse: "Logitech G Pro X Superlight 2 (800 DPI)", 
    crosshair: "0;P;c;1;o;1;0t;1;0l;2;0o;2;0a;1", 
    monitor: "BenQ ZOWIE XL2566K (360Hz)", 
    keyboard: "Wooting 60HE" 
};

function makeRoster(names) {
    const roles = ["Duelist", "Initiator", "Flex", "Controller", "Sentinel"];
    return names.map((name, i) => ({ name: name, role: roles[i % 5], ...stdGear }));
}

// ---------------------------------------------------------
// 2. ฐานข้อมูลทีมแฟรนไชส์ทั้ง 44 ทีม (Pacific, Americas, EMEA, China)
// ---------------------------------------------------------
const imgPacific = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop";
const imgAmericas = "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=600&auto=format&fit=crop";
const imgEMEA = "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=600&auto=format&fit=crop";
const imgChina = "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=600&auto=format&fit=crop";

const vctTeams = [
    // ================== VCT PACIFIC (11 ทีม) ==================
    {
        id: "prx", name: "Paper Rex", tag: "PRX", region: "Pacific", badgeColor: "bg-danger", desc: "ทีมแชมป์แปซิฟิก สไตล์ W-Gaming บุกทะลวงใจ ไม่สนแผนการ", image: imgPacific,
        players: [
            { name: "f0rsakeN", role: "Flex", mouse: "Logitech G Pro X Superlight 2", crosshair: "0;s;1;P;o;1;0t;1;0l;1;0o;4;0a;1", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "something", role: "Duelist", mouse: "Razer Viper V3 Pro", crosshair: "0;P;o;0.6;d;1;f;0;s;0;0t;1;0l;3", monitor: "BenQ ZOWIE XL2566K", keyboard: "Razer Huntsman V3 Pro" },
            { name: "d4v41", role: "Initiator", mouse: "Vaxee XE Wireless", crosshair: "0;s;1;P;c;5;o;1;d;1;z;3;f;0;0b;0", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "mindfreak", role: "Controller", mouse: "Logitech G Pro X Superlight", crosshair: "0;P;c;1;o;1;f;0;0t;1;0l;2;0o;2", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "Jinggg", role: "Duelist", mouse: "Finalmouse UltralightX", crosshair: "0;s;1;P;c;5;o;1;0t;1;0l;2;0o;2", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" }
        ]
    },
    {
        id: "gen", name: "Gen.G Esports", tag: "GEN", region: "Pacific", badgeColor: "bg-danger", desc: "แชมป์ Masters Shanghai ทีมเกาหลีใต้ระบบทีมเวิร์คสุดโหด", image: imgPacific,
        players: [
            { name: "t3xture", role: "Duelist", mouse: "Zowie EC2-CW", crosshair: "0;p;0;s;1;P;c;5;h;0;f;0;0l;4", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "Meteor", role: "Sentinel", mouse: "Logitech G Pro X Superlight", crosshair: "0;s;1;P;o;1;0t;1;0l;2;0o;2", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "Munchkin", role: "IGL", mouse: "Logitech G Pro X Superlight", crosshair: "0;P;c;1;o;1;d;1;0b;0;1b;0", monitor: "BenQ ZOWIE XL2566K", keyboard: "Razer Huntsman V3 Pro" },
            { name: "Karon", role: "Controller", mouse: "Razer DeathAdder V3 Pro", crosshair: "0;P;o;0.6;d;1;f;0;s;0", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "Lakia", role: "Initiator", mouse: "Logitech G Pro X Superlight 2", crosshair: "0;s;1;P;c;5;o;1;d;1;0b;0", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" }
        ]
    },
    { id: "drx", name: "DRX", tag: "DRX", region: "Pacific", badgeColor: "bg-danger", desc: "ยอดทีมเกาหลีใต้ที่มีการเซ็ตแผนสกิลเป๊ะที่สุดในโลก", image: imgPacific, players: makeRoster(["BuZz", "MaKo", "Foxy9", "BeYN", "Flashback"]) },
    { id: "tln", name: "Talon Esports", tag: "TLN", region: "Pacific", badgeColor: "bg-danger", desc: "สโมสรขวัญใจชาวไทย ตัวแทนความหวังระดับภูมิภาค", image: imgPacific, players: makeRoster(["Crws", "JitboyS", "ban", "Governor", "Surf"]) },
    { id: "ts", name: "Team Secret", tag: "TS", region: "Pacific", badgeColor: "bg-danger", desc: "ราชาแห่งปินส์ ทีมเวิร์คและการคุมอารมณ์สุดนิ่ง", image: imgPacific, players: makeRoster(["JessieVash", "Jremy", "invy", "NDG", "Wild0reoo"]) },
    { id: "t1", name: "T1", tag: "T1", region: "Pacific", badgeColor: "bg-danger", desc: "สโมสรระดับตำนานจากเกาหลีที่สร้างชื่อจากเกมแนวหน้า", image: imgPacific, players: makeRoster(["Sayaplayer", "Carpe", "iZu", "xccurate", "Rossy"]) },
    { id: "rrq", name: "Rex Regum Qeon", tag: "RRQ", region: "Pacific", badgeColor: "bg-danger", desc: "มหาอำนาจจากอินโดนีเซีย ฟอร์มการยิงดุดัน", image: imgPacific, players: makeRoster(["xffero", "Lmemore", "Estrela", "Jemkin", "Monyet"]) },
    { id: "zeta", name: "ZETA DIVISION", tag: "ZETA", region: "Pacific", badgeColor: "bg-danger", desc: "ฮีโร่ชาวญี่ปุ่นกับแฟนคลับที่พร้อมส่งเสียงเชียร์กระหึ่ม", image: imgPacific, players: makeRoster(["Laz", "Dep", "SugarZ3ro", "hiroronn", "Yuran"]) },
    { id: "dfm", name: "DetonatioN FocusMe", tag: "DFM", region: "Pacific", badgeColor: "bg-danger", desc: "อีกหนึ่งตัวแทนญี่ปุ่นที่ฟอร์มกำลังพัฒนาอย่างก้าวกระโดด", image: imgPacific, players: makeRoster(["Meiy", "neth", "Anthem", "Medusa", "SSeeS"]) },
    { id: "ge", name: "Global Esports", tag: "GE", region: "Pacific", badgeColor: "bg-danger", desc: "ความภาคภูมิใจแห่งอินเดีย สู้ไม่ถอยในทุกแมตช์", image: imgPacific, players: makeRoster(["Lightningfast", "Russ", "blaZek1ng", "Polvi", "Benkai"]) },
    { id: "boom", name: "BOOM Esports", tag: "BME", region: "Pacific", badgeColor: "bg-danger", desc: "หมาป่าอินโดฯ ที่ฝ่าฟันรายการ Ascension เข้าสู่ลีกใหญ่", image: imgPacific, players: makeRoster(["famouz", "Shiro", "NcSlasher", "BerserX", "ZesBeeW"]) },

    // ================== VCT AMERICAS (11 ทีม) ==================
    {
        id: "sen", name: "Sentinels", tag: "SEN", region: "Americas", badgeColor: "bg-primary", desc: "แชมป์ Masters Madrid ทีมมหาชนที่มีฐานแฟนคลับใหญ่ที่สุด", image: imgAmericas,
        players: [
            { name: "TenZ", role: "Flex", mouse: "Endgame Gear OP1 8K", crosshair: "0;s;1;P;c;5;h;0;0l;4;0o;2;0a;1", monitor: "ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "zekken", role: "Duelist", mouse: "Logitech G Pro X Superlight 2", crosshair: "0;c;1;P;t;2;o;1;d;1;0b;0;1b;0", monitor: "ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "johnqt", role: "IGL", mouse: "Razer DeathAdder V3 Pro", crosshair: "0;p;0;s;1;P;c;5;h;0;f;0;0l;4;0o;2", monitor: "ZOWIE XL2566K", keyboard: "Logitech G Pro X TKL" },
            { name: "Sacy", role: "Initiator", mouse: "Logitech G Pro X Superlight", crosshair: "0;P;h;0;0t;1;0l;4;0o;1;0a;1", monitor: "ZOWIE XL2566K", keyboard: "Logitech G915 TKL" },
            { name: "Zellsis", role: "Flex", mouse: "Zowie U2", crosshair: "0;s;1;P;c;1;o;1;d;1;0b;0;1b;0", monitor: "ZOWIE XL2566K", keyboard: "Wooting 60HE" }
        ]
    },
    { id: "loud", name: "LOUD", tag: "LOUD", region: "Americas", badgeColor: "bg-primary", desc: "อดีตแชมป์โลกจากบราซิล สไตล์ดุดันและกลยุทธ์แพรวพราว", image: imgAmericas, players: makeRoster(["Less", "qck", "tuyz", "cauanzin", "pancada"]) },
    { id: "nrg", name: "NRG", tag: "NRG", region: "Americas", badgeColor: "bg-primary", desc: "สโมสรจากอเมริกาเหนือที่เต็มไปด้วยยอดฝีมือมากประสบการณ์", image: imgAmericas, players: makeRoster(["crashies", "Victor", "s0m", "FNS", "Ethan"]) },
    { id: "lev", name: "Leviatán", tag: "LEV", region: "Americas", badgeColor: "bg-primary", desc: "มังกรแห่งลาตินอเมริกา นำโดยสุดยอดผู้เล่น aspas", image: imgAmericas, players: makeRoster(["aspas", "tex", "kiNgg", "Mazino", "C0M"]) },
    { id: "c9", name: "Cloud9", tag: "C9", region: "Americas", badgeColor: "bg-primary", desc: "ทีมคลาวด์ไนน์ที่มีประวัติศาสตร์ยาวนานในวงการอีสปอร์ต", image: imgAmericas, players: makeRoster(["Xeppaa", "OXY", "vanity", "moose", "runi"]) },
    { id: "100t", name: "100 Thieves", tag: "100T", region: "Americas", badgeColor: "bg-primary", desc: "แก๊งโจรจอมขโมยซีน แชมป์ระดับภูมิภาคขวัญใจฮอลลีวูด", image: imgAmericas, players: makeRoster(["Asuna", "bang", "Cryocells", "eeiu", "Boostio"]) },
    { id: "kru", name: "KRÜ Esports", tag: "KRÜ", region: "Americas", badgeColor: "bg-primary", desc: "สโมสรของ Aguero ผู้สร้างปาฏิหาริย์ในหลายทัวร์นาเมนต์", image: imgAmericas, players: makeRoster(["Klaus", "Melser", "keznit", "Shyy", "heat"]) },
    { id: "fur", name: "FURIA", tag: "FUR", region: "Americas", badgeColor: "bg-primary", desc: "เสือดำแห่งบราซิล วิ่งยิงแจกความดุดันให้ทุกทีม", image: imgAmericas, players: makeRoster(["Khalil", "mwzera", "havoc", "nzr", "xand"]) },
    { id: "mibr", name: "MIBR", tag: "MIBR", region: "Americas", badgeColor: "bg-primary", desc: "Made in Brazil ทีมสายเลือดใหม่ที่พร้อมท้าชนรุ่นใหญ่", image: imgAmericas, players: makeRoster(["jzz", "frz", "mazin", "artzin", "Palla"]) },
    { id: "eg", name: "Evil Geniuses", tag: "EG", region: "Americas", badgeColor: "bg-primary", desc: "อดีตแชมป์โลก 2023 ที่สร้างแรงบันดาลใจด้วยเพลย์อัจฉริยะ", image: imgAmericas, players: makeRoster(["jawgemo", "Derrek", "NaturE", "supamen", "Apoth"]) },
    { id: "g2", name: "G2 Esports", tag: "G2", region: "Americas", badgeColor: "bg-primary", desc: "ทีมซามูไรตัวตึงแห่งวงการ ขึ้นมาจากลีกรองแต่ฟอร์มแชมป์", image: imgAmericas, players: makeRoster(["valyn", "trent", "JonahP", "leaf", "icy"]) },

    // ================== VCT EMEA (11 ทีม) ==================
    {
        id: "fnc", name: "Fnatic", tag: "FNC", region: "EMEA", badgeColor: "bg-warning text-dark", desc: "ราชาแห่งยุโรป โดดเด่นด้วยแผนการเล่นที่รัดกุมและความแม่นยำสูง", image: imgEMEA,
        players: [
            { name: "Boaster", role: "IGL", mouse: "Fnatic Bolt Wireless", crosshair: "0;s;1;P;c;1;o;1;d;1;0b;0", monitor: "BenQ ZOWIE XL2566K", keyboard: "Fnatic Streak65 LP" },
            { name: "Derke", role: "Duelist", mouse: "Logitech G Pro X Superlight 2", crosshair: "0;s;1;P;o;1;d;1;f;0;0t;0;0l;1;0o;0", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "Alfajer", role: "Sentinel", mouse: "Zowie EC2-CW", crosshair: "0;P;c;5;o;1;d;1;f;0;0b;0;1b;0", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "Leo", role: "Initiator", mouse: "Razer Viper V3 Pro", crosshair: "0;P;c;1;o;1;0t;1;0l;2;0o;2;0a;1", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "Chronicle", role: "Flex", mouse: "Logitech G Pro X Superlight", crosshair: "0;P;c;1;o;1;d;1;0b;0;1b;0", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" }
        ]
    },
    { id: "navi", name: "Natus Vincere", tag: "NAVI", region: "EMEA", badgeColor: "bg-warning text-dark", desc: "ตำนานแชมป์ Masters ขับเคลื่อนโดยผู้เล่นตัวท็อป", image: imgEMEA, players: makeRoster(["ANGE1", "Shao", "SUYGETSU", "ardiis", "Zyppan"]) },
    { id: "th", name: "Team Heretics", tag: "TH", region: "EMEA", badgeColor: "bg-warning text-dark", desc: "ดาวรุ่งพุ่งแรงแห่งยุโรป อายุน้อยแต่ฟอร์มการยิงเกินร้อย", image: imgEMEA, players: makeRoster(["Boo", "benjyfishy", "MiniBoo", "RieNs", "Wo0t"]) },
    { id: "tl", name: "Team Liquid", tag: "TL", region: "EMEA", badgeColor: "bg-warning text-dark", desc: "ยอดทีมม้าก้านกล้วยที่มักมีเซอร์ไพรส์ในทัวร์นาเมนต์ใหญ่", image: imgEMEA, players: makeRoster(["Jamppi", "nAts", "Keiko", "Mistic", "Enzo"]) },
    { id: "fut", name: "FUT Esports", tag: "FUT", region: "EMEA", badgeColor: "bg-warning text-dark", desc: "ความภาคภูมิใจของตุรกี ผู้เล่นมีเอมและการคุมปืนที่ยอดเยี่ยม", image: imgEMEA, players: makeRoster(["MrFaliN", "qRaxs", "AtaKaptan", "yetujey", "cNed"]) },
    { id: "kc", name: "Karmine Corp", tag: "KC", region: "EMEA", badgeColor: "bg-warning text-dark", desc: "ทีมขวัญใจฝรั่งเศสที่มีเสียงเชียร์จาก The Blue Wall", image: imgEMEA, players: makeRoster(["MAGNUM", "marteen", "N4RRATE", "tomaszy", "sh1n"]) },
    { id: "vit", name: "Team Vitality", tag: "VIT", region: "EMEA", badgeColor: "bg-warning text-dark", desc: "แมลงเพชฌฆาตจากฝรั่งเศส ที่พร้อมป่วนทุกทีมในยุโรป", image: imgEMEA, players: makeRoster(["ceNder", "runneR", "Kicks", "Sayf", "trexx"]) },
    { id: "bbl", name: "BBL Esports", tag: "BBL", region: "EMEA", badgeColor: "bg-warning text-dark", desc: "อีกหนึ่งตัวตึงจากตุรกีที่มีประวัติศาสตร์การแข่งอย่างยาวนาน", image: imgEMEA, players: makeRoster(["pAura", "QutionerX", "Brave", "Elite", "reazy"]) },
    { id: "koi", name: "KOI", tag: "KOI", region: "EMEA", badgeColor: "bg-warning text-dark", desc: "สโมสรจากสเปนของ Ibai ที่มีแรงเชียร์ล้นหลาม", image: imgEMEA, players: makeRoster(["kamo", "ShadoW", "grubinho", "starxo", "sheydos"]) },
    { id: "gx", name: "GIANTX", tag: "GX", region: "EMEA", badgeColor: "bg-warning text-dark", desc: "การรวมตัวของเหล่ายักษ์ใหญ่แห่งลีกยุโรป", image: imgEMEA, players: makeRoster(["Fit1nho", "Cloud", "hoody", "purp0", "Redgar"]) },
    { id: "m8", name: "Gentle Mates", tag: "M8", region: "EMEA", badgeColor: "bg-warning text-dark", desc: "ทีมน้องใหม่จาก Ascension ที่ทะลุเข้ามาโชว์ของในลีก", image: imgEMEA, players: makeRoster(["logaN", "nataNk", "TakaS", "Wailers", "beyAz"]) },

    // ================== VCT CHINA (11 ทีม) ==================
    {
        id: "edg", name: "EDward Gaming", tag: "EDG", region: "China", badgeColor: "bg-danger", desc: "แชมป์จากประเทศจีน โดดเด่นด้วยทักษะการเล่นสไนเปอร์สุดดุดัน", image: imgChina,
        players: [
            { name: "ZmjjKK", role: "Duelist", mouse: "Vaxee XE Wireless", crosshair: "0;p;0;s;1;P;c;5;h;0;f;0;0l;4;0o;2", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "CHICHOO", role: "IGL", mouse: "Logitech G Pro X Superlight", crosshair: "0;s;1;P;c;1;o;1;d;1;0b;0", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "nobody", role: "Initiator", mouse: "Razer DeathAdder V3 Pro", crosshair: "0;s;1;P;c;5;o;1;d;1;z;3;f;0;0b;0", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "Smoggy", role: "Controller", mouse: "Logitech G Pro X Superlight 2", crosshair: "0;P;o;0.6;d;1;f;0;s;0", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" },
            { name: "S1Mon", role: "Flex", mouse: "Zowie U2", crosshair: "0;c;1;P;t;2;o;1;d;1;0b;0", monitor: "BenQ ZOWIE XL2566K", keyboard: "Wooting 60HE" }
        ]
    },
    { id: "fpx", name: "FunPlus Phoenix", tag: "FPX", region: "China", badgeColor: "bg-danger", desc: "นกฟินิกซ์ไฟที่ขึ้นชื่อเรื่องการเล่น Comp เอเจนต์แปลกใหม่", image: imgChina, players: makeRoster(["AAAAY", "BerLIN", "Life", "autumn", "TzH"]) },
    { id: "te", name: "Trace Esports", tag: "TE", region: "China", badgeColor: "bg-danger", desc: "ทีมฟอร์มดุจากแดนมังกรที่โค่นยอดทีมมาแล้วมากมาย", image: imgChina, players: makeRoster(["FengF", "Kai", "LuoK1ng", "heybay", "flex1n"]) },
    { id: "blg", name: "Bilibili Gaming", tag: "BLG", region: "China", badgeColor: "bg-danger", desc: "ทีมมหาชนจีนที่มีสไตล์การเล่น Aggressive ลุยแหลก", image: imgChina, players: makeRoster(["whzy", "Knight", "Yosemite", "B3Ar", "nephh"]) },
    { id: "jdg", name: "JD Gaming", tag: "JDG", region: "China", badgeColor: "bg-danger", desc: "อีกหนึ่งสโมสรยักษ์ใหญ่ที่หวังครองแชมป์ในวงการ", image: imgChina, players: makeRoster(["stew", "Viva", "YHchen", "jkuro", "MarT1n"]) },
    { id: "nova", name: "Nova Esports", tag: "NOVA", region: "China", badgeColor: "bg-danger", desc: "สโมสรอีสปอร์ตระดับโลกที่ขยายฐานมาบุก Valorant", image: imgChina, players: makeRoster(["PangH", "o0o0o", "cb", "GuanG", "OBONE"]) },
    { id: "ag", name: "All Gamers", tag: "AG", region: "China", badgeColor: "bg-danger", desc: "ทีมเก่าแก่สายชูตติ้งของจีน พร้อมท้าชนด้วยเอมที่แม่นยำ", image: imgChina, players: makeRoster(["DelB", "fxy0", "Monk", "sword9", "X3b"]) },
    { id: "drg", name: "Dragon Ranger Gaming", tag: "DRG", region: "China", badgeColor: "bg-danger", desc: "มังกรตัวใหม่ที่ทะลุเข้ามาในลีกด้วยความหวังเต็มเปี่ยม", image: imgChina, players: makeRoster(["TvirusLuke", "Nicc", "vov", "Shion7", "Dingwei"]) },
    { id: "wol", name: "Wolves Esports", tag: "WOL", region: "China", badgeColor: "bg-danger", desc: "ทีมหมาป่าที่มีคอนเนคชันกับสโมสรฟุตบอลชื่อดัง", image: imgChina, players: makeRoster(["pl1xx", "Yuicaw", "Spring", "ColdFish", "aluba"]) },
    { id: "tec", name: "Titan Esports Club", tag: "TEC", region: "China", badgeColor: "bg-danger", desc: "ทีมที่แข็งแกร่งดั่งไททัน ยืนหยัดในการแข่งระยะยาว", image: imgChina, players: makeRoster(["Rb", "AK", "B1ack", "qiang", "Yosemite"]) },
    { id: "tyl", name: "TyLoo", tag: "TYL", region: "China", badgeColor: "bg-danger", desc: "ตำนานเกม FPS ของจีนที่กลับมาทวงความยิ่งใหญ่อีกครั้ง", image: imgChina, players: makeRoster(["AAK", "ICE", "hfmi0dzjc9z7", "J1mmy", "Ninebody"]) }
];

// ---------------------------------------------------------
// 3. ฟังก์ชันเรนเดอร์ข้อมูลลงหน้าเว็บ (Render UI)
// ---------------------------------------------------------
function renderTeams(filterRegion = "All") {
    const container = document.getElementById("team-container");
    if(!container) return;
    
    container.innerHTML = ""; 

    const filteredTeams = filterRegion === "All" 
        ? vctTeams 
        : vctTeams.filter(team => team.region === filterRegion);

    filteredTeams.forEach(team => {
        const cardHTML = `
            <div class="col-md-4">
                <div class="card vct-card h-100 p-3 border-secondary">
                    <img src="${team.image}" class="card-img-top rounded mb-3" alt="${team.name}">
                    <div class="card-body p-0 d-flex flex-column justify-content-between">
                        <div>
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h4 class="fw-bold text-white mb-0">${team.name} (${team.tag})</h4>
                                <span class="badge ${team.badgeColor}">${team.region}</span>
                            </div>
                            <p class="text-secondary small">${team.desc}</p>
                        </div>
                        <button class="btn btn-danger w-100 mt-3" data-bs-toggle="modal" data-bs-target="#modal-${team.id}">
                            <i class="bi bi-sliders"></i> ดูรายชื่อ & อุปกรณ์ผู้เล่น
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });

    renderModals(filteredTeams); 
}

function renderModals(teamsToRender) {
    const modalsContainer = document.getElementById("modals-container");
    if(!modalsContainer) return;
    
    modalsContainer.innerHTML = ""; 

    teamsToRender.forEach(team => {
        let playersHTML = "";
        team.players.forEach(player => {
            playersHTML += `
                <tr>
                    <td><strong class="text-white">${player.name}</strong> <span class="badge ${team.badgeColor} ms-1">${player.role}</span></td>
                    <td class="text-secondary">${player.mouse}</td>
                    <td><code class="text-danger">${player.crosshair}</code></td>
                    <td class="text-secondary">${player.monitor}</td>
                    <td class="text-secondary">${player.keyboard}</td>
                </tr>
            `;
        });

        const modalHTML = `
            <div class="modal fade" id="modal-${team.id}" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content bg-dark border-danger">
                        <div class="modal-header bg-black border-bottom border-danger">
                            <h5 class="modal-title text-white fw-bold"><i class="bi bi-shield-shaded text-danger"></i> ${team.name}: ข้อมูลผู้เล่น & การตั้งค่า</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body p-4">
                            <div class="table-responsive">
                                <table class="table table-dark table-striped align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th>Player / Role</th>
                                            <th>Mouse & Sens</th>
                                            <th>Crosshair Code</th>
                                            <th>Monitor</th>
                                            <th>Keyboard</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${playersHTML}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        modalsContainer.innerHTML += modalHTML;
    });
}

// ---------------------------------------------------------
// 4. ระบบจัดการปุ่มกรอง (Filter Button Logic)
// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    renderTeams("All"); 

    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => {
                b.classList.remove("btn-danger", "active");
                b.classList.add("btn-outline-secondary"); 
            });

            e.target.classList.remove("btn-outline-secondary");
            e.target.classList.add("btn-danger", "active");

            const region = e.target.getAttribute("data-region");
            renderTeams(region);
        });
    });
});