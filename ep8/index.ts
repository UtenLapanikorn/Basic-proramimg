// const data = [
//     {
//       "gameID": "237612",
//       "steamAppID": "1187870",
//       "cheapest": "14.49",
//       "cheapestDealID": "BRsKTT2p7rLxf7f5aOvcdplfIlaFLhLuXbXvuKZ%2Fd00%3D",
//       "external": "FORZA POLPO!",
//       "internalName": "FORZAPOLPO",
//       "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1187870/capsule_sm_120.jpg?t=1685406493"
//     },
//     {
//       "gameID": "233750",
//       "steamAppID": "1551360",
//       "cheapest": "29.99",
//       "cheapestDealID": "VB7MbqaKk%2FPfkXuonBBMwm4d3FhzwIB1B2Ifto9tRi8%3D",
//       "external": "Forza Horizon 5",
//       "internalName": "FORZAHORIZON5",
//       "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/capsule_sm_120.jpg?t=1725950938"
//     },
//     {
//       "gameID": "227155",
//       "steamAppID": "1293830",
//       "cheapest": "11.99",
//       "cheapestDealID": "1y%2FuTwcdqa9ejkiAhzTVQryMXaqZ17jq3vsxM%2BsJhUQ%3D",
//       "external": "Forza Horizon 4",
//       "internalName": "FORZAHORIZON4",
//       "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1293830/capsule_sm_120.jpg?t=1702576030"
//     },
//     {
//       "gameID": "270856",
//       "steamAppID": "2440510",
//       "cheapest": "34.99",
//       "cheapestDealID": "CH1qJ4iXBAoWs1bNLrnZl63CdBocKIDQthMus0ZX3Io%3D",
//       "external": "Forza Motorsport",
//       "internalName": "FORZAMOTORSPORT",
//       "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2440510/capsule_sm_120.jpg?t=1725654114"
//     },
//     {
//       "gameID": "236924",
//       "steamAppID": null,
//       "cheapest": "29.99",
//       "cheapestDealID": "GD3yXUDT%2Fy3ILuoHrvgeza%2F2To%2FA%2BcAB5y8IaiDIyco%3D",
//       "external": "Forza Horizon 5: Car Pass",
//       "internalName": "FORZAHORIZON5CARPASS",
//       "thumb": "https://images.greenmangaming.com/4c0e7a023a6d4a3bb4523c79bdc66581/74db67018ad04629b55dcd8ba71aeb1a.jpg"
//     },
//     {
//       "gameID": "236926",
//       "steamAppID": null,
//       "cheapest": "19.99",
//       "cheapestDealID": "eZTTGXOkKCMPqTfmybBaHBr4BBQsHFgBPjmU715lmzk%3D",
//       "external": "Forza Horizon 5: VIP Membership",
//       "internalName": "FORZAHORIZON5VIPMEMBERSHIP",
//       "thumb": "https://images.greenmangaming.com/5ee08800eab54281abf73d2096c1744d/e3a37f0e48204ec4a8e5566f7061dae2.jpg"
//     },
//     {
//       "gameID": "236437",
//       "steamAppID": null,
//       "cheapest": "79.99",
//       "cheapestDealID": "FqnC%2FFqe72w6jFJRefR1Wos3dhoCgvnnMlZYpSialDk%3D",
//       "external": "Forza Horizon 5: Deluxe Edition",
//       "internalName": "FORZAHORIZON5DELUXEEDITION",
//       "thumb": "https://images.greenmangaming.com/8839dca3b64f4ebc9398198452e17811/7d5fd2c7da8b497e9f556051ec16ec4f.jpg"
//     },
//     {
//       "gameID": "236440",
//       "steamAppID": null,
//       "cheapest": "99.99",
//       "cheapestDealID": "Ar7w33%2BcNeIbUZjPZy3EC2Qe3qLbbLKBwL0Yf3uixaY%3D",
//       "external": "Forza Horizon 5: Premium Edition",
//       "internalName": "FORZAHORIZON5PREMIUMEDITION",
//       "thumb": "https://images.greenmangaming.com/fd63e49ff71c43a2a1a8c8a6af83ebc3/124b47988bfa4d48bcd827dbcd05230d.jpg"
//     },
//     {
//       "gameID": "236925",
//       "steamAppID": null,
//       "cheapest": "49.99",
//       "cheapestDealID": "1Og82ofqGEd71dchtNcI2cK%2FHzu6xGcsVSIDTpyjTrk%3D",
//       "external": "Forza Horizon 5: Premium Add-Ons Bundle",
//       "internalName": "FORZAHORIZON5PREMIUMADDONSBUNDLE",
//       "thumb": "https://images.greenmangaming.com/aedaf9334323445f94b471fd1390cc95/06718f6346784ab3b68eae053604d7b3.jpg"
//     }
//   ]
  
//   const cheapestForza = data.filter(function(element, index) {
//       return Number(element.cheapest) < 5 // ราคาน้อยกว่า 5 ดอล
//   })
//   console.log(cheapestForza)

// const person = {
//     firstName: "Uten",
//     lastName: "Lapanikorn",
//     age: 20,
//     fullName: function(){
//         return this.firstName + " " + this.lastName
//     },
//     isPass: function() {
//         return this.age > 20 // this ใช้เรียกแทนชื่อ
//     }
// }

// console.log(person.isPass())

// const news = {
//     data: [
//         {
//             "article_id": "7f3649b74463116aac89a876f2961378",
//             "title": "Why are Italian and European canned tomatoes so popular in Japanese supermarkets?",
//             "link": "https://www.prnewswire.com/apac/news-releases/why-are-italian-and-european-canned-tomatoes-so-popular-in-japanese-supermarkets-302239667.html",
//             "keywords": null,
//             "creator": null,
//             "video_url": null,
//             "description": "Discover more about Red Gold Tomatoes from Europe @ AEON ITABASHI SHOPPING CENTER from the 5th to the 8th of September 2024 TOKYO, Sept. 5, 2024 /PRNewswire/ -- Italian and European Red Gold canned tomatoes – thanks to their guaranteed high quality and versatility in the kitchen – are a...",
//             "content": "ONLY AVAILABLE IN PAID PLANS",
//             "pubDate": "2024-09-05 15:33:00",
//             "pubDateTZ": "UTC",
//             "image_url": "https://mma.prnewswire.com/media/2186813/VISUAL_ASIA.jpg?p=publish",
//             "source_id": "prnewswire_apac",
//             "source_priority": 1822,
//             "source_name": "Pr Newswire Apac",
//             "source_url": "https://www.prnewswire.com/apac",
//             "source_icon": "https://i.bytvi.com/domain_icons/prnewswire_apac.png",
//             "language": "english",
//             "country": [
//                 "afghanistan",
//                 "india",
//                 "australia",
//                 "singapore",
//                 "fiji",
//                 "maldives",
//                 "japan",
//                 "malaysia",
//                 "china",
//                 "south korea",
//                 "thailand",
//                 "pakistan",
//                 "mongolia",
//                 "brunei",
//                 "new zealand",
//                 "indonesia",
//                 "bhutan",
//                 "philippines",
//                 "hong kong",
//                 "bangladesh",
//                 "nepal",
//                 "sri lanka",
//                 "cambodia"
//             ],
//             "category": [
//                 "business"
//             ],
//             "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "duplicate": true
//         },
//         {
//             "article_id": "760aec296aeff09f1b5206fcb4ed4325",
//             "title": "รุมแฉเจ้าอาวาสวัดดังเป็นหนี้โยมไม่มีเงินคืน เจ้าตัวโต้ลั่นถ้ายืมจริงต้องมีสัญญา",
//             "link": "https://www.dailynews.co.th/news/3831928/",
//             "keywords": [
//                 "breakingnews",
//                 "hot news"
//             ],
//             "creator": [
//                 "Tanomsri Jantong"
//             ],
//             "video_url": null,
//             "description": "โยม-อดีตกรรมการวัด ลุยแฉเจ้าอาวาสวัดดัง เป็นหนี้โยม ไม่มีเงินคืน บอกให้ไปยึดโบสถ์ แถมเป็นคนตีหน้าเศร้าเล่าความเท็จเก่ง เจ้าอาวาสโฟนอินโต้ ถ้ายืมจริงต้องมีสัญญา ยอมรับเซ็นเอกสารรับสภาพหนี้จริงThe post รุมแฉเจ้าอาวาสวัดดังเป็นหนี้โยมไม่มีเงินคืน เจ้าตัวโต้ลั่นถ้ายืมจริงต้องมีสัญญา appeared first on เดลินิวส์.",
//             "content": "ONLY AVAILABLE IN PAID PLANS",
//             "pubDate": "2024-09-05 15:25:17",
//             "pubDateTZ": "UTC",
//             "image_url": null,
//             "source_id": "dailynews_co_th",
//             "source_priority": 425309,
//             "source_name": "Dailynews Co Th",
//             "source_url": "https://www.dailynews.co.th",
//             "source_icon": "https://i.bytvi.com/domain_icons/dailynews_co_th.png",
//             "language": "thai",
//             "country": [
//                 "thailand"
//             ],
//             "category": [
//                 "other"
//             ],
//             "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "duplicate": false
//         },
//         {
//             "article_id": "369bb5cd5504da3fd3c83ef9659795bb",
//             "title": "เปิดโผรางวัลคนทําหนัง ‘สุพรรณหงส์’ ครั้งที่ 32 ประจําปี 2566",
//             "link": "https://www.thaipost.net/entertainment-news/651349/",
//             "keywords": [
//                 "สุพรรณหงส์ ครั้งที่ 32",
//                 "บันเทิง",
//                 "หนังไทย",
//                 "สุพรรณหงส์"
//             ],
//             "creator": [
//                 "เพ้นท์"
//             ],
//             "video_url": null,
//             "description": "สมาพันธ์สมาคมภาพยนตร์แห่งชาติ ร่วมกับ กระทรวงวัฒนธรรม (วธ.) จัดงานแถลงข่าว งานประกาศรางวัลภาพยนตร์แห่งชาติ สุพรรณหงส์ ครั้งที่ 32 ประจําปี 2566 จัดขึ้นที่ เอสเอฟ เวิลด์ ซีเนม่า โดยในปีนี้มาในคอนเซ็ปต์ แสงแห่งกันและกัน ซึ่งไอเดียมาจาก แสงแห่งศรัทธา ที่ผู้สร้างหนังและผู้ชมภาพยนตร์ต่างร่วมกันรักษา และสอดส่องดูแล เปรียบได้ดั่ง ความร่วมมือร่วมใจในกันและกัน เพื่อก้าวไปสู่ ยุคทอง ครั้งใหม่ของหนังไทยต่อไปThe post เปิดโผรางวัลคนทําหนัง ‘สุพรรณหงส์’ ครั้งที่ 32 ประจําปี 2566 appeared first on .",
//             "content": "ONLY AVAILABLE IN PAID PLANS",
//             "pubDate": "2024-09-05 15:24:53",
//             "pubDateTZ": "UTC",
//             "image_url": "https://storage-wp.thaipost.net/2024/09/99-1.jpg",
//             "source_id": "thaipost",
//             "source_priority": 504046,
//             "source_name": "Thai Post",
//             "source_url": "https://www.thaipost.net",
//             "source_icon": "https://i.bytvi.com/domain_icons/thaipost.jpg",
//             "language": "thai",
//             "country": [
//                 "thailand"
//             ],
//             "category": [
//                 "top"
//             ],
//             "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "duplicate": false
//         },
//         {
//             "article_id": "70ce74a44b41a952334b5516922f0bca",
//             "title": "แค่ปีเดียว! สหรัฐฯ เผย \"เหตุกราดยิง\" ในสถานศึกษามากกว่า 40 ครั้ง",
//             "link": "https://www.thaipbs.or.th/news/content/343887",
//             "keywords": [
//                 "ต่างประเทศ"
//             ],
//             "creator": [
//                 "https://www.thaipbs.or.th/news/rss/news/home",
//                 "webmaster@thaipbs.or.th"
//             ],
//             "video_url": null,
//             "description": "สถานศึกษาไม่ต่ํากว่า 20 แห่งในสหรัฐอเมริกา ตกเป็นเป้าหมายของการใช้ความรุนแรงจากอาวุธปืน ตั้งแต่เริ่มต้นปี 2024 เกณฑ์ในการให้คํานิยามเหตุยิงในสถานศึกษาของสํานักข่าว CNN จะต้องมีคนถูกยิงอย่างน้อย 1 คน ไม่รวมผู้ก่อเหตุ การก่อเหตุจะต้องเกิดขึ้นในบริเวณสถานศึกษา ไม่ว่าจะเป็นอาคาร สนามหญ้า ลานจอดรถ สนามกีฬา และ รถโดยสาร เหตุยิงในโรงเรียนมัธยมอาปาลาชี ในเมืองวินเดอร์ รัฐจอร์เจียเมื่อวันที่ 4 ก.ย.ที่ผ่านมา ถือเป็นเหตุยิงในสถานศึกษาครั้งที่ 45 ของปี ขึ้นแท่นเหตุยิงในสถานศึกษาครั้งรุนแรงที่สุดของปีนี้ และเป็น 1 ใน 11 ครั้ง ที่มีผู้เสียชีวิต 4 คนขึ้นไปนับตั้งแต่ปี 2008 เหตุยิงในสถานศึกษาในสหรัฐฯ ที่ผ่านมา ส่งผลให้มีผู้เสียชีวิต 23 คน และบาดเจ็บ 62 คน เมื่อปี 2023 มีเหตุยิงในสถานศึกษาทั้งหมด 82 ครั้ง นับตั้งแต่สํานักข่าว CNN เก็บข้อมูลตั้งแต่ปี 2008 แบ่งเป็นเหตุยิงในโรงเรียน 52 ครั้ง และ สถาบันอุดมศึกษา 30 ครั้ง การก่อเหตุยิงในสถานศึกษาลดลงในปีแรกที่โควิด-19 ระบาด (ปี 2020) หลังจากสถานศึกษาต้องระงับการเรียนการสอนตามมาตรการควบคุมโรค การก่อเหตุกลับเพิ่มขึ้นอย่างก้าวกระโดดตั้งแต่ปี 2021-2023 โดยที่ปี 2022 ทําสถิติรุนแรงมากที่สุดปีหนึ่ง ด้วยจํานวนผู้เสียชีวิตมากถึง 46 คน 1 ในเหตุสะเทือนขวัญที่สุดคือเหตุยิงในโรงเรียนประถมในรัฐเท็กซัส ส่งผลให้ครูและนักเรียน 19 คนเสียชีวิต การใช้ความรุนแรงจากอาวุธปืนอาจเป็นวาระหนึ่งในการเลือกตั้งหลังจากมือปืนวัย 14 ปีก่อเหตุยิงในโรงเรียนมัธยมในรัฐจอร์เจีย เหตุการณ์นี้ มีผู้เสียชีวิต 4 คน เป็นครู 2 คน และ นักเรียน 2 คน ขณะที่ผู้ได้รับบาดเจ็บ 9 คนถูกส่งตัวไปรักษาที่โรงพยาบาลแล้วอ่านข่าว : เกิดเหตุยิงในโรงเรียนมัธยม สหรัฐฯ เสียชีวิต 4 เจ็บอีก 9 คนภาพมุมสูงแสดงให้เห็นตํารวจควบคุมสถานการณ์ภายในโรงเรียนในขณะที่นักเรียนและครูรวมตัวกันด้านนอกเพื่อความปลอดภัย ข้อความในแชตจากนักเรียนส่งมาบอกแม่ถึงเหตุการณ์ที่เกิดขึ้นจึงรีบออกจากสํานักงานและเดินทางไปหาลูกชายที่โรงเรียนทันที เจ้าหน้าที่สามารถจับกุม โคลต์ เกรย์ ผู้ต้องสงสัยก่อเหตุ วัย 14 ปี และอาวุธปืนไรเฟิล AR กึ่งอัตโนมัติที่ใช้ในการก่อเหตุได้ทันที คริส โฮเซย์ ผู้อํานวยการสํานักงานสอบสวนประจํารัฐจอร์เจียย้ําว่าผู้ต้องสงสัยก่อเหตุจะถูกตั้งข้อหาและพิจารณาคดีในฐานะผู้ใหญ่ ด้านโฆษกทําเนียบขาว ระบุว่า การก่อเหตุลักษณะนี้ไม่ใช่เรื่องปกติเนื่องจากสถานศึกษาควรเป็นพื้นที่ปลอดภัยให้ครูและนักเรียน วันนี้ชาวอเมริกันหลายร้อยคนรวมตัวกันที่สวนสาธารณะใจกลางเมือง เพื่อไว้อาลัยให้ผู้เสียชีวิตจากเหตุกราดยิงในโรงเรียนมัธยมครั้งนี้ ขณะที่เด็กนักเรียนบางส่วนของโรงเรียนมัธยมให้ข้อมูลนาทีเกิดเหตุ ที่สร้างความสูญเสียมากที่สุดครั้งหนึ่งนับตั้งแต่ปี 2008 เป็นต้นมามือปืนเคยถูกสอบฐานโพสต์คุกคามในออนไลน์ขณะที่สํานักงานสอบสวนกลางสหรัฐอเมริกา หรือ เอฟบีไอ เปิดเผยว่า ผู้ต้องสงสัย เคยถูกตํารวจสอบสวน เมื่อเดือนพฤษภาคม ปีที่แล้ว หลังจากเจ้าหน้าที่ทางการสหรัฐฯ ได้รับแจ้งเบาะแสเกี่ยวกับภัยคุกคามที่ถูกโพสต์ลงบนโลกออนไลน์เรื่องการก่อเหตุยิงภายในโรงเรียน ก่อนที่เจ้าหน้าที่จะระบุตําแหน่งและแจ้งเตือนเจ้าหน้าที่ท้องถิ่นแต่ผู้ต้องสงสัยปฏิเสธความเกี่ยวข้องใด ๆ กับโพสต์เตือนบนโลกออนไลน์ขณะที่พ่อของผู้ต้องสงสัยมีปืนล่าสัตว์ในบ้านพักแต่เก็บไว้อย่างปลอดภัยทําให้เจ้าหน้าที่ไม่ได้จับกุมตัว หรือ ดําเนินมาตรการใด ๆ ต่อไป เจ้าหน้าที่ยังอยู่ในระหว่างการสอบสวนเพื่อหาแรงจูงใจในการก่อเหตุ ซึ่งขณะนี้ยังไม่พบความเชื่อมโยง ระหว่างผู้ต้องสงสัย กับ ผู้ถูกยิง อ่านข่าวอื่น : นโยบายเพื่อไทย จาก \"เศรษฐา\" ถึง \"แพทองธาร\"\"6 ทุ่งรับน้ํา\" พื้นที่กันชน-กักน้ํา-ระบายน้ํา ของอยุธยา",
//             "content": "ONLY AVAILABLE IN PAID PLANS",
//             "pubDate": "2024-09-05 15:21:43",
//             "pubDateTZ": "UTC",
//             "image_url": "https://news.thaipbs.or.th/media/G0DL5oPyrtt5HBAivNSpXlHN6pF5cDgScKdQovg9156HVyTLHzdyR7.jpg",
//             "source_id": "thaipbs",
//             "source_priority": 817643,
//             "source_name": "Thai Pbs News",
//             "source_url": "https://news.thaipbs.or.th",
//             "source_icon": "https://i.bytvi.com/domain_icons/thaipbs.jpg",
//             "language": "thai",
//             "country": [
//                 "thailand"
//             ],
//             "category": [
//                 "top"
//             ],
//             "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "duplicate": false
//         },
//         {
//             "article_id": "79523f5bafd011ff85cc180443b83375",
//             "title": "สภาผ่านฉลุย ร่าง พ.ร.บ.งบฯ ปี 68 วงเงิน 3.7 ล้านล้านบาท",
//             "link": "https://www.thaipbs.or.th/news/content/343886",
//             "keywords": [
//                 "การเมือง"
//             ],
//             "creator": [
//                 "https://www.thaipbs.or.th/news/rss/news/home",
//                 "webmaster@thaipbs.or.th"
//             ],
//             "video_url": null,
//             "description": "วันนี้ (5 ก.ย.67) การประชุมสภาผู้แทนราษฎรเพื่อพิจารณาพิจารณาร่าง พ.ร.บ.งบประมาณรายจ่ายประจําปีงบประมาณ พ.ศ.2568 ที่คณะกรรมาธิการวิสามัญพิจารณาเสร็จแล้ว โดยมีการตั้งวงเงินงบประมาณ จํานวน 3,752,700 ล้านบาทที่ประชุมสภาฯ ใช้เวลาอภิปรายตลอด 3 วัน ระหว่างวันที่ 3-5 ก.ย. ก่อนลงมติเมื่อเวลา 21.48 น. โดยผลลงคะแนนเห็นด้วย 309 ต่อ 155 เสียง, งดออกเสียง 4 ไม่ลงคะแนน 1 จากจํานวนผู้ลงมติ 469 คน นายสุริยะ จึงรุ่งเรืองกิจ รองนายกรัฐมนตรีและ รมว.คมนาคม ในฐานะผู้แทนรัฐบาล กล่าวขอบคุณสภาฯ ที่ได้พิจารณาให้ความเห็นชอบร่าง พ.ร.บ.งบประมาณรายจ่ายประจําปีงบประมาณ พ.ศ.2568 ถือว่าเป็นเครื่องมือสําคัญที่จะใช้ขับเคลื่อนนโยบายของรัฐบาล ยุทธศาสตร์ชาติและแผนพัฒนาต่าง ๆ ทั้งนี้จะนําข้อคิดเห็น คําแนะนําและข้อเสนอแนะของสมาชิกไปประกอบการพิจารณาปรับปรุงหน่วยงานรับงบประมาณ เพื่อให้ประชาชนได้รับประโยชน์จากเงินงบประมาณที่มาจากภาษีของประชาชนนอกจากนี้ นายสุริยะ ยังกล่าวขอบคุณกรรมการวิสามัญทุกคนที่ให้ความสําคัญเสียสละเวลาและร่วมมือในการพิจารณาร่าง พ.ร.บ.งบประมาณรายจ่ายฉบับนี้อย่างเต็มที่ จนสําเร็จลุล่วงไปด้วยดี โดยข้อสังเกตของคณะกรรมการวิสามัญเป็นประโยชน์ต่อการบริหารราชการ รัฐบาลจะนําไปประกอบการพิจารณาปรับปรุงการดําเนินงาน เพื่อให้การจัดสรรทรัพยากรเป็นไปอย่างประหยัดและมีประสิทธิภาพตามหลักความคุ้มค่า และให้เกิดประโยชน์สูงสุดต่อประชาชนและประเทศชาติ พร้อมขอให้มั่นใจว่างบประมาณที่อนุมัติจะนําไปใช้ตามวัตถุประสงค์ ตามแผนงานที่กําหนด โดยรัฐบาลจะกํากับดูแลติดตามการใช้จ่ายงบให้มีความโปร่งใสและบรรลุผลสําเร็จตามนโยบายที่กําหนดไว้หลังจากสภาฯ ให้ความเห็นชอบแล้ว สํานักงานเลขาธิการสภาผู้แทนราษฎรจะส่งร่างไปยังวุฒิสภาเพื่อพิจารณา ซึ่งวุฒิสภาจะต้องพิจารณาให้แล้วเสร็จภายใน 20 วัน นับแต่วันรับร่าง โดยมีรายงานว่า ประธานวุฒิสภาจะบรรจุระเบียบวาระการประชุมในวันที่ 9-10 ก.ย.นี้อ่านข่าวจ่อแก้มาตรฐานทางจริยธรรม “ของแสลง” นักการเมืองนายกฯ ชี้ใช้คําแรงไป \"ครม.สืบสันดาน\" ย้ําตั้งใจทํางาน\"ชูศักดิ์\" คาดรับผิดชอบงานกฎหมาย เล็งแก้รัฐธรรมนูญ",
//             "content": "ONLY AVAILABLE IN PAID PLANS",
//             "pubDate": "2024-09-05 15:21:43",
//             "pubDateTZ": "UTC",
//             "image_url": "https://news.thaipbs.or.th/media/G0DL5oPyrtt5HBAivNSpXlGRl6mNilWBIlNQnySTm2lolzSm6p4j5R.jpg",
//             "source_id": "thaipbs",
//             "source_priority": 817643,
//             "source_name": "Thai Pbs News",
//             "source_url": "https://news.thaipbs.or.th",
//             "source_icon": "https://i.bytvi.com/domain_icons/thaipbs.jpg",
//             "language": "thai",
//             "country": [
//                 "thailand"
//             ],
//             "category": [
//                 "top"
//             ],
//             "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "duplicate": false
//         },
//         {
//             "article_id": "d6a213984cab8fb3da12830f1c5af7aa",
//             "title": "\"โก๋ คาราบาว\" มือกลองประจําวง เสียชีวิต ในวัย 50 ปี",
//             "link": "https://www.thaipbs.or.th/news/content/343888",
//             "keywords": [
//                 "ศิลปะ-บันเทิง"
//             ],
//             "creator": [
//                 "https://www.thaipbs.or.th/news/rss/news/entertainment",
//                 "webmaster@thaipbs.or.th"
//             ],
//             "video_url": null,
//             "description": "วันนี้ (5 ก.ย.2567) เพจเฟซบุ๊ก Carabao Official โพสต์ข้อความ แจ้งข่าวการเสียชีวิตของ \"โก๋ คาราบาว\" มือกลองประจําวง โดยระบุว่า \"ขอแสดงความเสียใจต่อการจากไปของคุณชวลิต ฉลองพงษ์ หรือ โก๋ คาราบาว ขอให้พี่โก๋เดินทางสู่ภพภูมิที่ดีครับ ด้วยรักและอาลัย\" ขณะที่มีคนมาคอมเมนต์แสดงความไว้อาลัยจํานวนมากสําหรับ โก๋ คาราบาว ชื่อจริง ชวลิต ฉลอมพงษ์ อายุ 50 ปี เป็นชาว จ.อุบลราชธานี โดยโก๋ คาราบาว ได้เข้าร่วมวงคาราบาว ในอัลบั้มชุดที่ 11 วิชาแพะ เมื่อปี 2534 จนถึงปัจจุบันทั้งนี้วงคาราบาว เป็นวงดนตเพลงเพื่อชีวิตที่มีชื่อเสียงมากที่สุดวงหนึ่งของของประเทศไทย มีผลงานตั้งแต่ปี พ.ศ.2524 จนถึงปัจจุบัน โดยมี แอ๊ด ยืนยง โอภากุล ศิลปินแห่งชาติ สาขาศิลปะการแสดง (นักร้อง-นักประพันธ์เพลงไทยสากล) พ.ศ.2556 เป็นหัวหน้าวงอ่านข่าว :ปิดตํานาน 50 ปี \"ต่วย'ตูน\" วางแผงเล่มสุดท้าย ก.ย.นี้อัปเดตสวัสดิการแห่งรัฐ เดือนกันยายน 2567 เงินเข้าวันไหนศาลอุทธรณ์ คุก 8 ปี ไม่รอลงอาญา \"ครูไพบูลย์\" คดีพรากผู้เยาว์อดีตภรรยา",
//             "content": "ONLY AVAILABLE IN PAID PLANS",
//             "pubDate": "2024-09-05 15:21:43",
//             "pubDateTZ": "UTC",
//             "image_url": "https://news.thaipbs.or.th/media/G0DL5oPyrtt5HBAivNSpXlKLZ7kUDTf55OjDx3RYchUjVOEBx0zeb9.jpg",
//             "source_id": "thaipbs",
//             "source_priority": 817643,
//             "source_name": "Thai Pbs News",
//             "source_url": "https://news.thaipbs.or.th",
//             "source_icon": "https://i.bytvi.com/domain_icons/thaipbs.jpg",
//             "language": "thai",
//             "country": [
//                 "thailand"
//             ],
//             "category": [
//                 "entertainment"
//             ],
//             "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "duplicate": false
//         },
//         {
//             "article_id": "525cf138960f6c9ef02f10353ae468b2",
//             "title": "Senate panel to question US semiconductor firms on Russian weapons",
//             "link": "https://www.channelnewsasia.com/business/senate-panel-question-us-semiconductor-firms-russian-weapons-4589286",
//             "keywords": [
//                 "business"
//             ],
//             "creator": null,
//             "video_url": null,
//             "description": null,
//             "content": "ONLY AVAILABLE IN PAID PLANS",
//             "pubDate": "2024-09-05 15:20:01",
//             "pubDateTZ": "UTC",
//             "image_url": "https://onecms-res.cloudinary.com/image/upload/s--yYS3puND--/c_fill,h_900,w_1600/fl_relative,g_south_east,l_mediacorp:cna:watermark:2024-04:reuters_1,w_0.1/f_auto,q_auto/v1/one-cms/core/2024-09-05t152001z_2_lynxmpek840q4_rtroptp_3_usa-congress.jpg?itok=4WOYgFA7",
//             "source_id": "channelnewsasia",
//             "source_priority": 37829,
//             "source_name": "Cna",
//             "source_url": "https://www.channelnewsasia.com",
//             "source_icon": "https://i.bytvi.com/domain_icons/channelnewsasia.jpg",
//             "language": "english",
//             "country": [
//                 "singapore",
//                 "georgia",
//                 "yemen",
//                 "afghanistan",
//                 "cyprus",
//                 "india",
//                 "saudi arabia",
//                 "maldives",
//                 "japan",
//                 "united arab emirates",
//                 "malaysia",
//                 "china",
//                 "south korea",
//                 "north korea",
//                 "taiwan",
//                 "thailand",
//                 "pakistan",
//                 "mongolia",
//                 "brunei",
//                 "lebanon",
//                 "indonesia",
//                 "kyrgyzstan",
//                 "syria",
//                 "israel",
//                 "bhutan",
//                 "iran",
//                 "turkey",
//                 "armenia",
//                 "qatar",
//                 "philippines",
//                 "hong kong",
//                 "kazakhstan",
//                 "iraq",
//                 "bangladesh",
//                 "laos",
//                 "vietnam",
//                 "timor-leste",
//                 "kuwait",
//                 "myanmar",
//                 "azerbaijan",
//                 "jordan",
//                 "nepal",
//                 "oman",
//                 "sri lanka",
//                 "uzbekistan",
//                 "turkmenistan",
//                 "macau",
//                 "bahrain",
//                 "cambodia",
//                 "tajikistan"
//             ],
//             "category": [
//                 "business"
//             ],
//             "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "duplicate": true
//         },
//         {
//             "article_id": "8238277b10e9e79362d3c20443476550",
//             "title": "สรุปเหรียญพาราลิมปิก 2024 ล่าสุด 5 ก.ย. 67 \"ไทย\" ลุ้นทองที่ 6 \"จีน\" นําที่ 2 ไม่เห็นฝุ่น",
//             "link": "https://www.thairath.co.th/sport/worldsport/others/2812792",
//             "keywords": null,
//             "creator": null,
//             "video_url": null,
//             "description": "สรุปเหรียญพาราลิมปิก 2024 ล่าสุด 5 ก.ย. 67 \"ไทย\" ลุ้นเหรียญทองที่ 6 ต่อ \"จีน\" ทิ้งห่างที่ 2 ออกไปอีก",
//             "content": "ONLY AVAILABLE IN PAID PLANS",
//             "pubDate": "2024-09-05 15:15:00",
//             "pubDateTZ": "UTC",
//             "image_url": "https://static.thairath.co.th/media/CiHZjUdJ5HPNXJ92O0egjcYhQlkebgWMMo.jpg",
//             "source_id": "thairath",
//             "source_priority": 44507,
//             "source_name": "Thairath",
//             "source_url": "https://www.thairath.co.th",
//             "source_icon": "https://i.bytvi.com/domain_icons/thairath.png",
//             "language": "thai",
//             "country": [
//                 "thailand"
//             ],
//             "category": [
//                 "sports"
//             ],
//             "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "duplicate": false
//         },
//         {
//             "article_id": "aec6df0b6f35f5dd0564b0c8b244157b",
//             "title": "Valencia's Mir denies sexual assault allegations",
//             "link": "https://www.channelnewsasia.com/sport/valencias-mir-denies-sexual-assault-allegations-4589281",
//             "keywords": [
//                 "sport"
//             ],
//             "creator": null,
//             "video_url": null,
//             "description": null,
//             "content": "ONLY AVAILABLE IN PAID PLANS",
//             "pubDate": "2024-09-05 15:13:56",
//             "pubDateTZ": "UTC",
//             "image_url": "https://onecms-res.cloudinary.com/image/upload/s--XKp908SM--/c_fill,h_900,w_1600/fl_relative,g_south_east,l_mediacorp:cna:watermark:2024-04:reuters_1,w_0.1/f_auto,q_auto/v1/one-cms/core/2024-09-05t151356z_1_lynxmpek840q2_rtroptp_3_soccer-crime-spain.jpg?itok=9uvHOTj8",
//             "source_id": "channelnewsasia",
//             "source_priority": 37829,
//             "source_name": "Cna",
//             "source_url": "https://www.channelnewsasia.com",
//             "source_icon": "https://i.bytvi.com/domain_icons/channelnewsasia.jpg",
//             "language": "english",
//             "country": [
//                 "singapore",
//                 "georgia",
//                 "yemen",
//                 "afghanistan",
//                 "cyprus",
//                 "india",
//                 "saudi arabia",
//                 "maldives",
//                 "japan",
//                 "united arab emirates",
//                 "malaysia",
//                 "china",
//                 "south korea",
//                 "north korea",
//                 "taiwan",
//                 "thailand",
//                 "pakistan",
//                 "mongolia",
//                 "brunei",
//                 "lebanon",
//                 "indonesia",
//                 "kyrgyzstan",
//                 "syria",
//                 "israel",
//                 "bhutan",
//                 "iran",
//                 "turkey",
//                 "armenia",
//                 "qatar",
//                 "philippines",
//                 "hong kong",
//                 "kazakhstan",
//                 "iraq",
//                 "bangladesh",
//                 "laos",
//                 "vietnam",
//                 "timor-leste",
//                 "kuwait",
//                 "myanmar",
//                 "azerbaijan",
//                 "jordan",
//                 "nepal",
//                 "oman",
//                 "sri lanka",
//                 "uzbekistan",
//                 "turkmenistan",
//                 "macau",
//                 "bahrain",
//                 "cambodia",
//                 "tajikistan"
//             ],
//             "category": [
//                 "sports"
//             ],
//             "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "duplicate": false
//         },
//         {
//             "article_id": "519b2e0a5ad9d82b680d5154141982f2",
//             "title": "ผ่านสบายๆ มติสภา 309 เสียง โหวตเห็นชอบร่างงบประมาณ 2568 วาระ 3",
//             "link": "https://www.thairath.co.th/news/politic/2812794",
//             "keywords": null,
//             "creator": null,
//             "video_url": null,
//             "description": "ผ่านแบบสบาย ๆ ที่ประชุมสภามีมติเห็นชอบร่างงบประมาณ 2568 จํานวน 3.7 ล้านล้านบาท ในวาระ 3 ด้วยคะแนน 309 ต่อ 155 เสียง",
//             "content": "ONLY AVAILABLE IN PAID PLANS",
//             "pubDate": "2024-09-05 15:13:00",
//             "pubDateTZ": "UTC",
//             "image_url": "https://static.thairath.co.th/media/Kg2lj2gY7z4zNnRd7SuCeZPSyu0Q3r7wSJv.jpg",
//             "source_id": "thairath",
//             "source_priority": 44507,
//             "source_name": "Thairath",
//             "source_url": "https://www.thairath.co.th",
//             "source_icon": "https://i.bytvi.com/domain_icons/thairath.png",
//             "language": "thai",
//             "country": [
//                 "thailand"
//             ],
//             "category": [
//                 "top"
//             ],
//             "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
//             "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
//             "duplicate": false
//         }
//     ],
//     onlyThai: function () {
//         return this.data.filter(function (element, index) {
//             return element.language === 'thai'
//         })
//     },
//     onlyEnglish: function () {
//         return this.data.filter(function (element, inedx) {
//             return element.language === 'english'
//     })
//     },
//     onlySource: function () { 
//         return this.data.filter(function(element, index) {
//             return element.source_id === 'thaipbs'
//         })
//     }
// }

// console.log(news.onlySource())

// const slimeAnime = {
//     data: [
//     {
//       "mal_id": 37430,
//       "url": "https://myanimelist.net/anime/37430/Tensei_shitara_Slime_Datta_Ken",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1069/123309.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1069/123309t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1069/123309l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1069/123309.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1069/123309t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1069/123309l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "bkQkyzXEXKE",
//         "url": "https://www.youtube.com/watch?v=bkQkyzXEXKE",
//         "embed_url": "https://www.youtube.com/embed/bkQkyzXEXKE?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/bkQkyzXEXKE/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Slime Datta Ken"
//         },
//         {
//           "type": "Synonym",
//           "title": "TenSura"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したらスライムだった件"
//         },
//         {
//           "type": "English",
//           "title": "That Time I Got Reincarnated as a Slime"
//         },
//         {
//           "type": "German",
//           "title": "That Time I Got Reincamrnated as a Slime"
//         },
//         {
//           "type": "Spanish",
//           "title": "That Time I Got Reincarnated as a Slime"
//         },
//         {
//           "type": "French",
//           "title": "That Time I Got Reincarnated as a Slime"
//         }
//       ],
//       "title": "Tensei shitara Slime Datta Ken",
//       "title_english": "That Time I Got Reincarnated as a Slime",
//       "title_japanese": "転生したらスライムだった件",
//       "title_synonyms": [
//         "TenSura"
//       ],
//       "type": "TV",
//       "source": "Manga",
//       "episodes": 24,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2018-10-02T00:00:00+00:00",
//         "to": "2019-03-19T00:00:00+00:00",
//         "prop": {
//           "from": {
//             "day": 2,
//             "month": 10,
//             "year": 2018
//           },
//           "to": {
//             "day": 19,
//             "month": 3,
//             "year": 2019
//           }
//         },
//         "string": "Oct 2, 2018 to Mar 19, 2019"
//       },
//       "duration": "23 min per ep",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 8.14,
//       "scored_by": 905118,
//       "rank": 454,
//       "popularity": 82,
//       "members": 1495264,
//       "favorites": 30895,
//       "synopsis": "Thirty-seven-year-old Satoru Mikami is a typical corporate worker, who is perfectly content with his monotonous lifestyle in Tokyo, other than failing to nail down a girlfriend even once throughout his life. In the midst of a casual encounter with his colleague, he falls victim to a random assailant on the streets and is stabbed. However, while succumbing to his injuries, a peculiar voice echoes in his mind, and recites a bunch of commands which the dying man cannot make sense of.\n\nWhen Satoru regains consciousness, he discovers that he has reincarnated as a goop of slime in an unfamiliar realm. In doing so, he acquires newfound skills—notably, the power to devour anything and mimic its appearance and abilities. He then stumbles upon the sealed Catastrophe-level monster \"Storm Dragon\" Veldora who had been sealed away for the past 300 years for devastating a town to ashes. Sympathetic to his predicament, Satoru befriends him, promising to assist in destroying the seal. In return, Veldora bestows upon him the name Rimuru Tempest to grant him divine protection. \n\nNow, liberated from the mundanities of his past life, Rimuru embarks on a fresh journey with a distinct goal in mind. As he grows accustomed to his new physique, his gooey antics ripple throughout the world, gradually altering his fate.\n\n[Written by MAL Rewrite]",
//       "background": "",
//       "season": "fall",
//       "year": 2018,
//       "broadcast": {
//         "day": "Tuesdays",
//         "time": "00:00",
//         "timezone": "Asia/Tokyo",
//         "string": "Tuesdays at 00:00 (JST)"
//       },
//       "producers": [
//         {
//           "mal_id": 104,
//           "type": "anime",
//           "name": "Lantis",
//           "url": "https://myanimelist.net/anime/producer/104/Lantis"
//         },
//         {
//           "mal_id": 159,
//           "type": "anime",
//           "name": "Kodansha",
//           "url": "https://myanimelist.net/anime/producer/159/Kodansha"
//         },
//         {
//           "mal_id": 1416,
//           "type": "anime",
//           "name": "BS11",
//           "url": "https://myanimelist.net/anime/producer/1416/BS11"
//         },
//         {
//           "mal_id": 1840,
//           "type": "anime",
//           "name": "Bandai Namco Arts",
//           "url": "https://myanimelist.net/anime/producer/1840/Bandai_Namco_Arts"
//         },
//         {
//           "mal_id": 1896,
//           "type": "anime",
//           "name": "Micro Magazine Publishing",
//           "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
//         }
//       ],
//       "licensors": [
//         {
//           "mal_id": 102,
//           "type": "anime",
//           "name": "Funimation",
//           "url": "https://myanimelist.net/anime/producer/102/Funimation"
//         }
//       ],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 1,
//           "type": "anime",
//           "name": "Action",
//           "url": "https://myanimelist.net/anime/genre/1/Action"
//         },
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": [
//         {
//           "mal_id": 27,
//           "type": "anime",
//           "name": "Shounen",
//           "url": "https://myanimelist.net/anime/genre/27/Shounen"
//         }
//       ]
//     },
//     {
//       "mal_id": 58592,
//       "url": "https://myanimelist.net/anime/58592/Tensei_shitara_Slime_Datta_Ken_3rd_Season__Kanwa_-_Diablo_Nikki",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1092/142426.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1092/142426t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1092/142426l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1092/142426.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1092/142426t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1092/142426l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": null,
//         "url": null,
//         "embed_url": null,
//         "images": {
//           "image_url": null,
//           "small_image_url": null,
//           "medium_image_url": null,
//           "large_image_url": null,
//           "maximum_image_url": null
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Slime Datta Ken 3rd Season: Kanwa - Diablo Nikki"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensei shitara Slime Datta Ken 2nd Season Part 2 Recap"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensei shitara Slime Datta Ken Episode 48.5"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したらスライムだった件 閑話: ディアブロ日記"
//         },
//         {
//           "type": "English",
//           "title": "That Time I Got Reincarnated as a Slime Season 3: Digression - Diablo's Journal"
//         }
//       ],
//       "title": "Tensei shitara Slime Datta Ken 3rd Season: Kanwa - Diablo Nikki",
//       "title_english": "That Time I Got Reincarnated as a Slime Season 3: Digression - Diablo's Journal",
//       "title_japanese": "転生したらスライムだった件 閑話: ディアブロ日記",
//       "title_synonyms": [
//         "Tensei shitara Slime Datta Ken 2nd Season Part 2 Recap",
//         "Tensei shitara Slime Datta Ken Episode 48.5"
//       ],
//       "type": "TV Special",
//       "source": "Manga",
//       "episodes": 1,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2024-03-31T00:00:00+00:00",
//         "to": null,
//         "prop": {
//           "from": {
//             "day": 31,
//             "month": 3,
//             "year": 2024
//           },
//           "to": {
//             "day": null,
//             "month": null,
//             "year": null
//           }
//         },
//         "string": "Mar 31, 2024"
//       },
//       "duration": "23 min",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 6.67,
//       "scored_by": 5891,
//       "rank": 5860,
//       "popularity": 5701,
//       "members": 14180,
//       "favorites": 42,
//       "synopsis": "Recap of Tensei Shitara Slime Datta Ken 2nd Season Part 2.",
//       "background": "",
//       "season": null,
//       "year": null,
//       "broadcast": {
//         "day": null,
//         "time": null,
//         "timezone": null,
//         "string": null
//       },
//       "producers": [],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 1,
//           "type": "anime",
//           "name": "Action",
//           "url": "https://myanimelist.net/anime/genre/1/Action"
//         },
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 39551,
//       "url": "https://myanimelist.net/anime/39551/Tensei_shitara_Slime_Datta_Ken_2nd_Season",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1271/109841.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1271/109841t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1271/109841l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1271/109841.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1271/109841t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1271/109841l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "Lk3fJsIOnKw",
//         "url": "https://www.youtube.com/watch?v=Lk3fJsIOnKw",
//         "embed_url": "https://www.youtube.com/embed/Lk3fJsIOnKw?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/Lk3fJsIOnKw/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Slime Datta Ken 2nd Season"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensura 2"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したらスライムだった件"
//         },
//         {
//           "type": "English",
//           "title": "That Time I Got Reincarnated as a Slime Season 2"
//         },
//         {
//           "type": "German",
//           "title": "That Time I Got Reincarnated as a Slime Staffel 2"
//         },
//         {
//           "type": "Spanish",
//           "title": "That Time I Got Reincarnated as a Slime Temporada 2"
//         },
//         {
//           "type": "French",
//           "title": "Moi, quand je me réincarne en Slime Saison 2"
//         }
//       ],
//       "title": "Tensei shitara Slime Datta Ken 2nd Season",
//       "title_english": "That Time I Got Reincarnated as a Slime Season 2",
//       "title_japanese": "転生したらスライムだった件",
//       "title_synonyms": [
//         "Tensura 2"
//       ],
//       "type": "TV",
//       "source": "Manga",
//       "episodes": 12,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2021-01-12T00:00:00+00:00",
//         "to": "2021-03-30T00:00:00+00:00",
//         "prop": {
//           "from": {
//             "day": 12,
//             "month": 1,
//             "year": 2021
//           },
//           "to": {
//             "day": 30,
//             "month": 3,
//             "year": 2021
//           }
//         },
//         "string": "Jan 12, 2021 to Mar 30, 2021"
//       },
//       "duration": "23 min per ep",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 8.37,
//       "scored_by": 576443,
//       "rank": 212,
//       "popularity": 162,
//       "members": 999733,
//       "favorites": 10807,
//       "synopsis": "Taking a break from his time as a teacher, the powerful slime Rimuru Tempest returns to his kingdom, eponymously named Tempest, just in time to begin negotiations with a nearby nation—the Kingdom of Eurazania. While the negotiations are anything but peaceful, they do end successfully, allowing Rimuru to return and finish teaching. When trying to again return to Tempest, this time permanently, Rimuru is stopped by a mysterious figure who is somehow able to constrain the many magical abilities he has at his disposal. \n\nIn Tempest, the situation is even worse. A group of unknown humans has invaded the land and are assaulting its citizens, both influential and innocent. They are not just trying to bring harm either—they have the intent to kill. Can Rimuru overcome his powerful and dangerous foe and return to Tempest before it is too late?  \n\n[Written by MAL Rewrite]",
//       "background": "",
//       "season": "winter",
//       "year": 2021,
//       "broadcast": {
//         "day": "Tuesdays",
//         "time": "23:00",
//         "timezone": "Asia/Tokyo",
//         "string": "Tuesdays at 23:00 (JST)"
//       },
//       "producers": [
//         {
//           "mal_id": 159,
//           "type": "anime",
//           "name": "Kodansha",
//           "url": "https://myanimelist.net/anime/producer/159/Kodansha"
//         }
//       ],
//       "licensors": [
//         {
//           "mal_id": 102,
//           "type": "anime",
//           "name": "Funimation",
//           "url": "https://myanimelist.net/anime/producer/102/Funimation"
//         }
//       ],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 1,
//           "type": "anime",
//           "name": "Action",
//           "url": "https://myanimelist.net/anime/genre/1/Action"
//         },
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": [
//         {
//           "mal_id": 27,
//           "type": "anime",
//           "name": "Shounen",
//           "url": "https://myanimelist.net/anime/genre/27/Shounen"
//         }
//       ]
//     },
//     {
//       "mal_id": 41487,
//       "url": "https://myanimelist.net/anime/41487/Tensei_shitara_Slime_Datta_Ken_2nd_Season_Part_2",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1033/118296.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1033/118296t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1033/118296l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1033/118296.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1033/118296t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1033/118296l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "nle-73CcG1k",
//         "url": "https://www.youtube.com/watch?v=nle-73CcG1k",
//         "embed_url": "https://www.youtube.com/embed/nle-73CcG1k?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/nle-73CcG1k/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/nle-73CcG1k/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/nle-73CcG1k/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/nle-73CcG1k/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/nle-73CcG1k/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Slime Datta Ken 2nd Season Part 2"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensura 2"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したらスライムだった件"
//         },
//         {
//           "type": "English",
//           "title": "That Time I Got Reincarnated as a Slime Season 2 Part 2"
//         },
//         {
//           "type": "German",
//           "title": "Meine Wiedergeburt als Schleim in einer anderen Welt Staffel 2 Teil 2"
//         },
//         {
//           "type": "Spanish",
//           "title": "That Time I Got Reincarnated as a Slime Temporada 2 Parte 2"
//         },
//         {
//           "type": "French",
//           "title": "Moi, Quand Je Me Réincarne en Slime Saison 2 Partie 2"
//         }
//       ],
//       "title": "Tensei shitara Slime Datta Ken 2nd Season Part 2",
//       "title_english": "That Time I Got Reincarnated as a Slime Season 2 Part 2",
//       "title_japanese": "転生したらスライムだった件",
//       "title_synonyms": [
//         "Tensura 2"
//       ],
//       "type": "TV",
//       "source": "Manga",
//       "episodes": 12,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2021-07-06T00:00:00+00:00",
//         "to": "2021-09-21T00:00:00+00:00",
//         "prop": {
//           "from": {
//             "day": 6,
//             "month": 7,
//             "year": 2021
//           },
//           "to": {
//             "day": 21,
//             "month": 9,
//             "year": 2021
//           }
//         },
//         "string": "Jul 6, 2021 to Sep 21, 2021"
//       },
//       "duration": "23 min per ep",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 8.32,
//       "scored_by": 461050,
//       "rank": 253,
//       "popularity": 248,
//       "members": 803225,
//       "favorites": 10938,
//       "synopsis": "The nation of Tempest is in a festive mood after successfully overcoming the surprise attack from the Falmuth Army and the Western Holy Church. Beyond the festivities lies a meeting between Tempest and its allies to decide the future of the Nation of Monsters. The aftermath of the Falmuth invasion, Milim Nava's suspicious behavior, and the disappearance of Demon Lord Carrion—the problems seem to keep on piling up.\n\nRimuru Tempest, now awakened as a True Demon Lord, decides to go on the offensive against Clayman. With the fully revived Storm Dragon Veldora, Ultimate Skill Raphael, and other powerful comrades, the ruler of the Tempest is confident in taking down his enemies one by one until he can face the man pulling the strings.\n\n[Written by MAL Rewrite]",
//       "background": "",
//       "season": "summer",
//       "year": 2021,
//       "broadcast": {
//         "day": "Tuesdays",
//         "time": "23:00",
//         "timezone": "Asia/Tokyo",
//         "string": "Tuesdays at 23:00 (JST)"
//       },
//       "producers": [
//         {
//           "mal_id": 159,
//           "type": "anime",
//           "name": "Kodansha",
//           "url": "https://myanimelist.net/anime/producer/159/Kodansha"
//         },
//         {
//           "mal_id": 1416,
//           "type": "anime",
//           "name": "BS11",
//           "url": "https://myanimelist.net/anime/producer/1416/BS11"
//         },
//         {
//           "mal_id": 1840,
//           "type": "anime",
//           "name": "Bandai Namco Arts",
//           "url": "https://myanimelist.net/anime/producer/1840/Bandai_Namco_Arts"
//         },
//         {
//           "mal_id": 1896,
//           "type": "anime",
//           "name": "Micro Magazine Publishing",
//           "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
//         },
//         {
//           "mal_id": 1992,
//           "type": "anime",
//           "name": "Bandai Spirits",
//           "url": "https://myanimelist.net/anime/producer/1992/Bandai_Spirits"
//         },
//         {
//           "mal_id": 2106,
//           "type": "anime",
//           "name": "Sony Music Solutions",
//           "url": "https://myanimelist.net/anime/producer/2106/Sony_Music_Solutions"
//         },
//         {
//           "mal_id": 2232,
//           "type": "anime",
//           "name": "ADK Marketing Solutions",
//           "url": "https://myanimelist.net/anime/producer/2232/ADK_Marketing_Solutions"
//         }
//       ],
//       "licensors": [
//         {
//           "mal_id": 1468,
//           "type": "anime",
//           "name": "Crunchyroll",
//           "url": "https://myanimelist.net/anime/producer/1468/Crunchyroll"
//         }
//       ],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 1,
//           "type": "anime",
//           "name": "Action",
//           "url": "https://myanimelist.net/anime/genre/1/Action"
//         },
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": [
//         {
//           "mal_id": 27,
//           "type": "anime",
//           "name": "Shounen",
//           "url": "https://myanimelist.net/anime/genre/27/Shounen"
//         }
//       ]
//     },
//     {
//       "mal_id": 41488,
//       "url": "https://myanimelist.net/anime/41488/Tensura_Nikki__Tensei_shitara_Slime_Datta_Ken",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1458/117607.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1458/117607t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1458/117607l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1458/117607.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1458/117607t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1458/117607l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "JyCSGTKcNPA",
//         "url": "https://www.youtube.com/watch?v=JyCSGTKcNPA",
//         "embed_url": "https://www.youtube.com/embed/JyCSGTKcNPA?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/JyCSGTKcNPA/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensura Nikki: Tensei shitara Slime Datta Ken"
//         },
//         {
//           "type": "Japanese",
//           "title": "転スラ日記 転生したらスライムだった件"
//         },
//         {
//           "type": "English",
//           "title": "The Slime Diaries"
//         },
//         {
//           "type": "German",
//           "title": "The Slime Diaries"
//         },
//         {
//           "type": "Spanish",
//           "title": "The Slime Diaries"
//         },
//         {
//           "type": "French",
//           "title": "The Slime Diaries"
//         }
//       ],
//       "title": "Tensura Nikki: Tensei shitara Slime Datta Ken",
//       "title_english": "The Slime Diaries",
//       "title_japanese": "転スラ日記 転生したらスライムだった件",
//       "title_synonyms": [],
//       "type": "TV",
//       "source": "Manga",
//       "episodes": 12,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2021-04-06T00:00:00+00:00",
//         "to": "2021-06-22T00:00:00+00:00",
//         "prop": {
//           "from": {
//             "day": 6,
//             "month": 4,
//             "year": 2021
//           },
//           "to": {
//             "day": 22,
//             "month": 6,
//             "year": 2021
//           }
//         },
//         "string": "Apr 6, 2021 to Jun 22, 2021"
//       },
//       "duration": "23 min per ep",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 7.59,
//       "scored_by": 155952,
//       "rank": 1565,
//       "popularity": 695,
//       "members": 350785,
//       "favorites": 2088,
//       "synopsis": "In between slaying monsters and negotiating with neighboring countries, Rimuru Tempest has his hands full attending to his kingdom alongside day-to-day matters. But whether it's expanding the farms in the summer heat or shoveling snow in the chilly winter, no task is too big for Rimuru and his friends!\n\n[Written by MAL Rewrite]",
//       "background": "Tensura Nikki: Tensei shitara Slime Datta Ken was initially scheduled to begin airing in January 2021, but it was delayed for three months due to the COVID-19 pandemic.",
//       "season": "spring",
//       "year": 2021,
//       "broadcast": {
//         "day": "Tuesdays",
//         "time": "23:00",
//         "timezone": "Asia/Tokyo",
//         "string": "Tuesdays at 23:00 (JST)"
//       },
//       "producers": [
//         {
//           "mal_id": 104,
//           "type": "anime",
//           "name": "Lantis",
//           "url": "https://myanimelist.net/anime/producer/104/Lantis"
//         },
//         {
//           "mal_id": 159,
//           "type": "anime",
//           "name": "Kodansha",
//           "url": "https://myanimelist.net/anime/producer/159/Kodansha"
//         },
//         {
//           "mal_id": 1416,
//           "type": "anime",
//           "name": "BS11",
//           "url": "https://myanimelist.net/anime/producer/1416/BS11"
//         },
//         {
//           "mal_id": 1840,
//           "type": "anime",
//           "name": "Bandai Namco Arts",
//           "url": "https://myanimelist.net/anime/producer/1840/Bandai_Namco_Arts"
//         },
//         {
//           "mal_id": 1896,
//           "type": "anime",
//           "name": "Micro Magazine Publishing",
//           "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
//         },
//         {
//           "mal_id": 1992,
//           "type": "anime",
//           "name": "Bandai Spirits",
//           "url": "https://myanimelist.net/anime/producer/1992/Bandai_Spirits"
//         },
//         {
//           "mal_id": 2106,
//           "type": "anime",
//           "name": "Sony Music Solutions",
//           "url": "https://myanimelist.net/anime/producer/2106/Sony_Music_Solutions"
//         },
//         {
//           "mal_id": 2232,
//           "type": "anime",
//           "name": "ADK Marketing Solutions",
//           "url": "https://myanimelist.net/anime/producer/2232/ADK_Marketing_Solutions"
//         }
//       ],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": [
//         {
//           "mal_id": 27,
//           "type": "anime",
//           "name": "Shounen",
//           "url": "https://myanimelist.net/anime/genre/27/Shounen"
//         }
//       ]
//     },
//     {
//       "mal_id": 38793,
//       "url": "https://myanimelist.net/anime/38793/Tensei_shitara_Slime_Datta_Ken_OVA",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1230/118297.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1230/118297t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1230/118297l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1230/118297.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1230/118297t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1230/118297l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": null,
//         "url": null,
//         "embed_url": null,
//         "images": {
//           "image_url": null,
//           "small_image_url": null,
//           "medium_image_url": null,
//           "large_image_url": null,
//           "maximum_image_url": null
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Slime Datta Ken OVA"
//         },
//         {
//           "type": "Synonym",
//           "title": "TenSura OVA"
//         },
//         {
//           "type": "Synonym",
//           "title": "That Time I Got Reincarnated as a Slime OVA"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensei shitara Slime Datta Ken Gaiden"
//         },
//         {
//           "type": "Synonym",
//           "title": "That Time I Got Reincarnated as a Slime Extra"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したらスライムだった件 OVA"
//         },
//         {
//           "type": "English",
//           "title": "That Time I Got Reincarnated as a Slime OAD"
//         },
//         {
//           "type": "German",
//           "title": "That Time I Got Reincarnated As A Slim OAD"
//         },
//         {
//           "type": "Spanish",
//           "title": "That Time I Got Reincarnated as a Slime OAD"
//         },
//         {
//           "type": "French",
//           "title": "Moi, Quand Je Me Réincarne en Slime OAD"
//         }
//       ],
//       "title": "Tensei shitara Slime Datta Ken OVA",
//       "title_english": "That Time I Got Reincarnated as a Slime OAD",
//       "title_japanese": "転生したらスライムだった件 OVA",
//       "title_synonyms": [
//         "TenSura OVA",
//         "That Time I Got Reincarnated as a Slime OVA",
//         "Tensei shitara Slime Datta Ken Gaiden",
//         "That Time I Got Reincarnated as a Slime Extra"
//       ],
//       "type": "OVA",
//       "source": "Manga",
//       "episodes": 5,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2019-07-09T00:00:00+00:00",
//         "to": "2020-11-27T00:00:00+00:00",
//         "prop": {
//           "from": {
//             "day": 9,
//             "month": 7,
//             "year": 2019
//           },
//           "to": {
//             "day": 27,
//             "month": 11,
//             "year": 2020
//           }
//         },
//         "string": "Jul 9, 2019 to Nov 27, 2020"
//       },
//       "duration": "23 min per ep",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 7.49,
//       "scored_by": 121839,
//       "rank": 1901,
//       "popularity": 1032,
//       "members": 242552,
//       "favorites": 525,
//       "synopsis": "One day, Shuna and Shion are fighting over Rimuru's squishy slime body as usual. Rimuru figures that giving them each a body double of himself would solve the conflict, but when he imagines some of his other friends asking him to do the same for them, he quickly drops that plan. Then he comes up with the idea to make a cushion in the shape of his slime form. He travels around Tempest to see if his friends know of any good materials he can use, and he learns that a special type of sand found along a lake shore in the forest is exactly what he's looking for. So he sets out to collect some sand... but a monster is waiting for him by the lake! What's more, Milim hears about his plan for a picnic and comes racing down from the sky!\n\n(Source: Crunchyroll)",
//       "background": "",
//       "season": null,
//       "year": null,
//       "broadcast": {
//         "day": null,
//         "time": null,
//         "timezone": null,
//         "string": null
//       },
//       "producers": [],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 1,
//           "type": "anime",
//           "name": "Action",
//           "url": "https://myanimelist.net/anime/genre/1/Action"
//         },
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 49877,
//       "url": "https://myanimelist.net/anime/49877/Tensei_shitara_Slime_Datta_Ken_Movie__Guren_no_Kizuna-hen",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1745/128238.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1745/128238t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1745/128238l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1745/128238.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1745/128238t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1745/128238l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "nJEGXG_vXbo",
//         "url": "https://www.youtube.com/watch?v=nJEGXG_vXbo",
//         "embed_url": "https://www.youtube.com/embed/nJEGXG_vXbo?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/nJEGXG_vXbo/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen"
//         },
//         {
//           "type": "Synonym",
//           "title": "TenSura"
//         },
//         {
//           "type": "Synonym",
//           "title": "That Time I Got Reincarnated as a Slime Movie"
//         },
//         {
//           "type": "Japanese",
//           "title": "劇場版 転生したらスライムだった件 紅蓮の絆編"
//         },
//         {
//           "type": "English",
//           "title": "That Time I Got Reincarnated as a Slime: The Movie - Scarlet Bond"
//         }
//       ],
//       "title": "Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen",
//       "title_english": "That Time I Got Reincarnated as a Slime: The Movie - Scarlet Bond",
//       "title_japanese": "劇場版 転生したらスライムだった件 紅蓮の絆編",
//       "title_synonyms": [
//         "TenSura",
//         "That Time I Got Reincarnated as a Slime Movie"
//       ],
//       "type": "Movie",
//       "source": "Manga",
//       "episodes": 1,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2022-11-25T00:00:00+00:00",
//         "to": null,
//         "prop": {
//           "from": {
//             "day": 25,
//             "month": 11,
//             "year": 2022
//           },
//           "to": {
//             "day": null,
//             "month": null,
//             "year": null
//           }
//         },
//         "string": "Nov 25, 2022"
//       },
//       "duration": "1 hr 48 min",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 7.63,
//       "scored_by": 89581,
//       "rank": 1427,
//       "popularity": 1163,
//       "members": 215472,
//       "favorites": 1338,
//       "synopsis": "In Raja, a small country located to the west of Tempest. Rimuru and his companions get involved in a long-running conspiracy that swirls around the mysterious power of the queen. Rimuru and his commander Benimaru also encounter another ogre survivor named Hiiro, a man that used to be the brother of Benimaru.\n\n(Source: ANN)",
//       "background": "",
//       "season": null,
//       "year": null,
//       "broadcast": {
//         "day": null,
//         "time": null,
//         "timezone": null,
//         "string": null
//       },
//       "producers": [],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 1,
//           "type": "anime",
//           "name": "Action",
//           "url": "https://myanimelist.net/anime/genre/1/Action"
//         },
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": [
//         {
//           "mal_id": 27,
//           "type": "anime",
//           "name": "Shounen",
//           "url": "https://myanimelist.net/anime/genre/27/Shounen"
//         }
//       ]
//     },
//     {
//       "mal_id": 39607,
//       "url": "https://myanimelist.net/anime/39607/Tensei_shitara_Slime_Datta_Ken__Kanwa_-_Veldora_Nikki",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1672/100144.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1672/100144t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1672/100144l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1672/100144.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1672/100144t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1672/100144l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": null,
//         "url": null,
//         "embed_url": null,
//         "images": {
//           "image_url": null,
//           "small_image_url": null,
//           "medium_image_url": null,
//           "large_image_url": null,
//           "maximum_image_url": null
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Slime Datta Ken: Kanwa - Veldora Nikki"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensei shitara Slime Datta Ken Recap"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したらスライムだった件 閑話: ヴェルドラ日記"
//         },
//         {
//           "type": "English",
//           "title": "That Time I Got Reincarnated as a Slime: Tales - Veldora's Journal"
//         },
//         {
//           "type": "German",
//           "title": "Meine Wiedergeburt als Schleim in einer anderen Welt Staffel 2 Folge 36.5 – Veldoras Tagebuch 2"
//         },
//         {
//           "type": "Spanish",
//           "title": "That Time I Got Reincarnated as a Slime Temporada 2 Episodio 36.5 Digresión: Diario de Veldora"
//         },
//         {
//           "type": "French",
//           "title": "Moi, quand je me réincarne en Slime Saison 2 Épisode 36.5: Digression – Le journal de Veldra 2"
//         }
//       ],
//       "title": "Tensei shitara Slime Datta Ken: Kanwa - Veldora Nikki",
//       "title_english": "That Time I Got Reincarnated as a Slime: Tales - Veldora's Journal",
//       "title_japanese": "転生したらスライムだった件 閑話: ヴェルドラ日記",
//       "title_synonyms": [
//         "Tensei shitara Slime Datta Ken Recap"
//       ],
//       "type": "TV Special",
//       "source": "Manga",
//       "episodes": 1,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2019-03-26T00:00:00+00:00",
//         "to": null,
//         "prop": {
//           "from": {
//             "day": 26,
//             "month": 3,
//             "year": 2019
//           },
//           "to": {
//             "day": null,
//             "month": null,
//             "year": null
//           }
//         },
//         "string": "Mar 26, 2019"
//       },
//       "duration": "23 min",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 6.76,
//       "scored_by": 71844,
//       "rank": 5366,
//       "popularity": 1780,
//       "members": 129975,
//       "favorites": 202,
//       "synopsis": "Ifrit, who has been trapped in Rimuru due to the latter's Predator skill, recaps events of the season while in a discussion with Veldora as they play Shogi.\n\n(Source: Wikipedia)",
//       "background": "",
//       "season": null,
//       "year": null,
//       "broadcast": {
//         "day": null,
//         "time": null,
//         "timezone": null,
//         "string": null
//       },
//       "producers": [],
//       "licensors": [
//         {
//           "mal_id": 102,
//           "type": "anime",
//           "name": "Funimation",
//           "url": "https://myanimelist.net/anime/producer/102/Funimation"
//         }
//       ],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [],
//       "demographics": []
//     },
//     {
//       "mal_id": 45753,
//       "url": "https://myanimelist.net/anime/45753/Tensei_shitara_Slime_Datta_Ken__Kanwa_-_Hinata_Sakaguchi",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1670/111154.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1670/111154t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1670/111154l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1670/111154.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1670/111154t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1670/111154l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": null,
//         "url": null,
//         "embed_url": null,
//         "images": {
//           "image_url": null,
//           "small_image_url": null,
//           "medium_image_url": null,
//           "large_image_url": null,
//           "maximum_image_url": null
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Slime Datta Ken: Kanwa - Hinata Sakaguchi"
//         },
//         {
//           "type": "Synonym",
//           "title": "That Time I got Reincarnated as a Slime Episode 24.9"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensei shitara Slime Datta Ken Recap"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensura Recap"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したらスライムだった件 閑話: ヒナタ・サカグチ"
//         },
//         {
//           "type": "English",
//           "title": "That Time I Got Reincarnated as a Slime Season 2: Digression - Hinata Sakaguchi"
//         },
//         {
//           "type": "German",
//           "title": "Meine Wiedergeburt Als Schleim In Einer Anderen Welt Staffel 2 Folge 24.9 Hinata Sakaguchi"
//         },
//         {
//           "type": "Spanish",
//           "title": "That Time I Got Reincarnated as a Slime Episodio 24.9. Digresión: Hinata Sakaguchi"
//         },
//         {
//           "type": "French",
//           "title": "Moi, quand je me réincarne en Slime Saison 2 Épisode 24.9 Digression: Hinata Sakaguchi"
//         }
//       ],
//       "title": "Tensei shitara Slime Datta Ken: Kanwa - Hinata Sakaguchi",
//       "title_english": "That Time I Got Reincarnated as a Slime Season 2: Digression - Hinata Sakaguchi",
//       "title_japanese": "転生したらスライムだった件 閑話: ヒナタ・サカグチ",
//       "title_synonyms": [
//         "That Time I got Reincarnated as a Slime Episode 24.9",
//         "Tensei shitara Slime Datta Ken Recap",
//         "Tensura Recap"
//       ],
//       "type": "TV Special",
//       "source": "Manga",
//       "episodes": 1,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2021-01-05T00:00:00+00:00",
//         "to": null,
//         "prop": {
//           "from": {
//             "day": 5,
//             "month": 1,
//             "year": 2021
//           },
//           "to": {
//             "day": null,
//             "month": null,
//             "year": null
//           }
//         },
//         "string": "Jan 5, 2021"
//       },
//       "duration": "23 min",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 6.79,
//       "scored_by": 31748,
//       "rank": 5213,
//       "popularity": 2796,
//       "members": 65024,
//       "favorites": 127,
//       "synopsis": "A summary of season one of Tensei shitara Slime Datta Ken with some extra content leading into season two.",
//       "background": "",
//       "season": null,
//       "year": null,
//       "broadcast": {
//         "day": null,
//         "time": null,
//         "timezone": null,
//         "string": null
//       },
//       "producers": [],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 1,
//           "type": "anime",
//           "name": "Action",
//           "url": "https://myanimelist.net/anime/genre/1/Action"
//         },
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 49318,
//       "url": "https://myanimelist.net/anime/49318/Tensei_shitara_Slime_Datta_Ken_2nd_Season__Kanwa_-_Veldora_Nikki_2",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1879/121719.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1879/121719t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1879/121719l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1879/121719.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1879/121719t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1879/121719l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": null,
//         "url": null,
//         "embed_url": null,
//         "images": {
//           "image_url": null,
//           "small_image_url": null,
//           "medium_image_url": null,
//           "large_image_url": null,
//           "maximum_image_url": null
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Slime Datta Ken 2nd Season: Kanwa - Veldora Nikki 2"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensei shitara Slime Datta Ken 2nd Season Recap"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensei shitara Slime Datta Ken Episode 36.5"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したらスライムだった件 閑話: ヴェルドラ日記2"
//         },
//         {
//           "type": "English",
//           "title": "That Time I Got Reincarnated as a Slime Season 2: Tales - Veldora's Journal 2"
//         }
//       ],
//       "title": "Tensei shitara Slime Datta Ken 2nd Season: Kanwa - Veldora Nikki 2",
//       "title_english": "That Time I Got Reincarnated as a Slime Season 2: Tales - Veldora's Journal 2",
//       "title_japanese": "転生したらスライムだった件 閑話: ヴェルドラ日記2",
//       "title_synonyms": [
//         "Tensei shitara Slime Datta Ken 2nd Season Recap",
//         "Tensei shitara Slime Datta Ken Episode 36.5"
//       ],
//       "type": "TV Special",
//       "source": "Manga",
//       "episodes": 1,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2021-06-29T00:00:00+00:00",
//         "to": null,
//         "prop": {
//           "from": {
//             "day": 29,
//             "month": 6,
//             "year": 2021
//           },
//           "to": {
//             "day": null,
//             "month": null,
//             "year": null
//           }
//         },
//         "string": "Jun 29, 2021"
//       },
//       "duration": "23 min",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 7.17,
//       "scored_by": 29552,
//       "rank": 3430,
//       "popularity": 2913,
//       "members": 60329,
//       "favorites": 283,
//       "synopsis": "Recap of Tensei Shitara Slime Datta Ken 2nd Season.",
//       "background": "",
//       "season": null,
//       "year": null,
//       "broadcast": {
//         "day": null,
//         "time": null,
//         "timezone": null,
//         "string": null
//       },
//       "producers": [],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 1,
//           "type": "anime",
//           "name": "Action",
//           "url": "https://myanimelist.net/anime/genre/1/Action"
//         },
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 53580,
//       "url": "https://myanimelist.net/anime/53580/Tensei_shitara_Slime_Datta_Ken_3rd_Season",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1211/143476.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1211/143476t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1211/143476l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1211/143476.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1211/143476t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1211/143476l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "kM2m7GcF6W0",
//         "url": "https://www.youtube.com/watch?v=kM2m7GcF6W0",
//         "embed_url": "https://www.youtube.com/embed/kM2m7GcF6W0?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/kM2m7GcF6W0/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Slime Datta Ken 3rd Season"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensura 3"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したらスライムだった件 第3期"
//         },
//         {
//           "type": "English",
//           "title": "That Time I Got Reincarnated as a Slime Season 3"
//         }
//       ],
//       "title": "Tensei shitara Slime Datta Ken 3rd Season",
//       "title_english": "That Time I Got Reincarnated as a Slime Season 3",
//       "title_japanese": "転生したらスライムだった件 第3期",
//       "title_synonyms": [
//         "Tensura 3"
//       ],
//       "type": "TV",
//       "source": "Manga",
//       "episodes": 24,
//       "status": "Currently Airing",
//       "airing": true,
//       "aired": {
//         "from": "2024-04-05T00:00:00+00:00",
//         "to": "2024-09-27T00:00:00+00:00",
//         "prop": {
//           "from": {
//             "day": 5,
//             "month": 4,
//             "year": 2024
//           },
//           "to": {
//             "day": 27,
//             "month": 9,
//             "year": 2024
//           }
//         },
//         "string": "Apr 5, 2024 to Sep 27, 2024"
//       },
//       "duration": "24 min per ep",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 7.8,
//       "scored_by": 60762,
//       "rank": 1009,
//       "popularity": 712,
//       "members": 343121,
//       "favorites": 3888,
//       "synopsis": "Rimuru Tempest is victorious following his climactic showdown with Demon Lord Clayman. With Diablo's aid, the war with the Falmuth Kingdom ends decisively in Rimuru's favor. Fueled by increased migration and the integration of Jura Forest, the nation of Tempest undergoes rapid growth.\n\nRimuru's victory shifts the balance of power, giving rise to a renewed period of peace—but whether that peace will last is another matter. Yuuki Kagurazaka and Kazalim are conspiring with the Harlequin Alliance to bring about Rimuru's downfall. Furthermore, the Western Holy Church continues its intolerant crusade against Rimuru and his non-human subordinates. Both allies and enemies engage in a battle of wits, carefully advancing their agendas without shattering the delicate status quo. But once the first domino inevitably falls, the race to supremacy begins.\n\n[Written by MAL Rewrite]",
//       "background": "Tensei shitara Slime Datta Ken 3rd Season was released on Blu-ray and DVD in four volumes from July 24, 2024, to October 30, 2024.",
//       "season": "spring",
//       "year": 2024,
//       "broadcast": {
//         "day": "Fridays",
//         "time": "23:00",
//         "timezone": "Asia/Tokyo",
//         "string": "Fridays at 23:00 (JST)"
//       },
//       "producers": [
//         {
//           "mal_id": 159,
//           "type": "anime",
//           "name": "Kodansha",
//           "url": "https://myanimelist.net/anime/producer/159/Kodansha"
//         },
//         {
//           "mal_id": 1003,
//           "type": "anime",
//           "name": "Nippon Television Network",
//           "url": "https://myanimelist.net/anime/producer/1003/Nippon_Television_Network"
//         },
//         {
//           "mal_id": 1416,
//           "type": "anime",
//           "name": "BS11",
//           "url": "https://myanimelist.net/anime/producer/1416/BS11"
//         },
//         {
//           "mal_id": 1896,
//           "type": "anime",
//           "name": "Micro Magazine Publishing",
//           "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
//         },
//         {
//           "mal_id": 1992,
//           "type": "anime",
//           "name": "Bandai Spirits",
//           "url": "https://myanimelist.net/anime/producer/1992/Bandai_Spirits"
//         },
//         {
//           "mal_id": 2106,
//           "type": "anime",
//           "name": "Sony Music Solutions",
//           "url": "https://myanimelist.net/anime/producer/2106/Sony_Music_Solutions"
//         },
//         {
//           "mal_id": 2232,
//           "type": "anime",
//           "name": "ADK Marketing Solutions",
//           "url": "https://myanimelist.net/anime/producer/2232/ADK_Marketing_Solutions"
//         },
//         {
//           "mal_id": 2424,
//           "type": "anime",
//           "name": "Bandai Namco Filmworks",
//           "url": "https://myanimelist.net/anime/producer/2424/Bandai_Namco_Filmworks"
//         },
//         {
//           "mal_id": 2425,
//           "type": "anime",
//           "name": "Bandai Namco Music Live",
//           "url": "https://myanimelist.net/anime/producer/2425/Bandai_Namco_Music_Live"
//         }
//       ],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 1,
//           "type": "anime",
//           "name": "Action",
//           "url": "https://myanimelist.net/anime/genre/1/Action"
//         },
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": [
//         {
//           "mal_id": 27,
//           "type": "anime",
//           "name": "Shounen",
//           "url": "https://myanimelist.net/anime/genre/27/Shounen"
//         }
//       ]
//     },
//     {
//       "mal_id": 59493,
//       "url": "https://myanimelist.net/anime/59493/Tensei_shitara_Slime_Datta_Ken__Kanwa_-_Luminous_Memories",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1465/144664.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1465/144664.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": null,
//         "url": null,
//         "embed_url": null,
//         "images": {
//           "image_url": null,
//           "small_image_url": null,
//           "medium_image_url": null,
//           "large_image_url": null,
//           "maximum_image_url": null
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Slime Datta Ken: Kanwa - Luminous Memories"
//         },
//         {
//           "type": "Synonym",
//           "title": "That Time I got Reincarnated as a Slime Episode 65.5"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensei shitara Slime Datta Ken Recap"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensura Recap"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したらスライムだった件 閑話:ルミナスメモリーズ"
//         },
//         {
//           "type": "English",
//           "title": "That Time I Got Reincarnated as a Slime Season 3: Digression - Luminous Memories"
//         }
//       ],
//       "title": "Tensei shitara Slime Datta Ken: Kanwa - Luminous Memories",
//       "title_english": "That Time I Got Reincarnated as a Slime Season 3: Digression - Luminous Memories",
//       "title_japanese": "転生したらスライムだった件 閑話:ルミナスメモリーズ",
//       "title_synonyms": [
//         "That Time I got Reincarnated as a Slime Episode 65.5",
//         "Tensei shitara Slime Datta Ken Recap",
//         "Tensura Recap"
//       ],
//       "type": "TV Special",
//       "source": "Manga",
//       "episodes": 1,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2024-08-10T00:00:00+00:00",
//         "to": null,
//         "prop": {
//           "from": {
//             "day": 10,
//             "month": 8,
//             "year": 2024
//           },
//           "to": {
//             "day": null,
//             "month": null,
//             "year": null
//           }
//         },
//         "string": "Aug 10, 2024"
//       },
//       "duration": "24 min",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 6.31,
//       "scored_by": 3918,
//       "rank": 7894,
//       "popularity": 5677,
//       "members": 14308,
//       "favorites": 9,
//       "synopsis": "Recap of Tensei shitara Slime Datta Ken 3rd Season.\n\nRimuru and Hinata, despite both holding similar values, fought fiercely. What happened behind the scenes of this complicated situation? From the perspective of Luminous Valentine, the one and only God of the Holy Empire of Lubelius and one of the Octagram Demon Lords. The details of the \"Holy Demon Battle\" are told, as well as some secret that she has never told anyone.",
//       "background": "",
//       "season": null,
//       "year": null,
//       "broadcast": {
//         "day": null,
//         "time": null,
//         "timezone": null,
//         "string": null
//       },
//       "producers": [],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 1,
//           "type": "anime",
//           "name": "Action",
//           "url": "https://myanimelist.net/anime/genre/1/Action"
//         },
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 59493,
//       "url": "https://myanimelist.net/anime/59493/Tensei_shitara_Slime_Datta_Ken__Kanwa_-_Luminous_Memories",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1465/144664.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1465/144664.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1465/144664l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": null,
//         "url": null,
//         "embed_url": null,
//         "images": {
//           "image_url": null,
//           "small_image_url": null,
//           "medium_image_url": null,
//           "large_image_url": null,
//           "maximum_image_url": null
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Slime Datta Ken: Kanwa - Luminous Memories"
//         },
//         {
//           "type": "Synonym",
//           "title": "That Time I got Reincarnated as a Slime Episode 65.5"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensei shitara Slime Datta Ken Recap"
//         },
//         {
//           "type": "Synonym",
//           "title": "Tensura Recap"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したらスライムだった件 閑話:ルミナスメモリーズ"
//         },
//         {
//           "type": "English",
//           "title": "That Time I Got Reincarnated as a Slime Season 3: Digression - Luminous Memories"
//         }
//       ],
//       "title": "Tensei shitara Slime Datta Ken: Kanwa - Luminous Memories",
//       "title_english": "That Time I Got Reincarnated as a Slime Season 3: Digression - Luminous Memories",
//       "title_japanese": "転生したらスライムだった件 閑話:ルミナスメモリーズ",
//       "title_synonyms": [
//         "That Time I got Reincarnated as a Slime Episode 65.5",
//         "Tensei shitara Slime Datta Ken Recap",
//         "Tensura Recap"
//       ],
//       "type": "TV Special",
//       "source": "Manga",
//       "episodes": 1,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2024-08-10T00:00:00+00:00",
//         "to": null,
//         "prop": {
//           "from": {
//             "day": 10,
//             "month": 8,
//             "year": 2024
//           },
//           "to": {
//             "day": null,
//             "month": null,
//             "year": null
//           }
//         },
//         "string": "Aug 10, 2024"
//       },
//       "duration": "24 min",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 6.31,
//       "scored_by": 3918,
//       "rank": 7894,
//       "popularity": 5677,
//       "members": 14308,
//       "favorites": 9,
//       "synopsis": "Recap of Tensei shitara Slime Datta Ken 3rd Season.\n\nRimuru and Hinata, despite both holding similar values, fought fiercely. What happened behind the scenes of this complicated situation? From the perspective of Luminous Valentine, the one and only God of the Holy Empire of Lubelius and one of the Octagram Demon Lords. The details of the \"Holy Demon Battle\" are told, as well as some secret that she has never told anyone.",
//       "background": "",
//       "season": null,
//       "year": null,
//       "broadcast": {
//         "day": null,
//         "time": null,
//         "timezone": null,
//         "string": null
//       },
//       "producers": [],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 1,
//           "type": "anime",
//           "name": "Action",
//           "url": "https://myanimelist.net/anime/genre/1/Action"
//         },
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 54565,
//       "url": "https://myanimelist.net/anime/54565/Tensei_shitara_Slime_Datta_Ken__Coleus_no_Yume",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1570/135813.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1570/135813t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1570/135813l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1570/135813.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1570/135813t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1570/135813l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "WuIDVoKdVGU",
//         "url": "https://www.youtube.com/watch?v=WuIDVoKdVGU",
//         "embed_url": "https://www.youtube.com/embed/WuIDVoKdVGU?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/WuIDVoKdVGU/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Slime Datta Ken: Coleus no Yume"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したらスライムだった件 コリウスの夢"
//         },
//         {
//           "type": "English",
//           "title": "That Time I Got Reincarnated as a Slime: Visions of Coleus"
//         }
//       ],
//       "title": "Tensei shitara Slime Datta Ken: Coleus no Yume",
//       "title_english": "That Time I Got Reincarnated as a Slime: Visions of Coleus",
//       "title_japanese": "転生したらスライムだった件 コリウスの夢",
//       "title_synonyms": [],
//       "type": "ONA",
//       "source": "Manga",
//       "episodes": 3,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2023-11-02T00:00:00+00:00",
//         "to": null,
//         "prop": {
//           "from": {
//             "day": 2,
//             "month": 11,
//             "year": 2023
//           },
//           "to": {
//             "day": null,
//             "month": null,
//             "year": null
//           }
//         },
//         "string": "Nov 2, 2023"
//       },
//       "duration": "24 min per ep",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 7.58,
//       "scored_by": 37727,
//       "rank": 1572,
//       "popularity": 2299,
//       "members": 89948,
//       "favorites": 316,
//       "synopsis": "The story takes place between the first and second season, where Rimuru confronts the swirling conspiracies in the Coleus kingdom.\n\n(Source: MAL News)",
//       "background": "",
//       "season": null,
//       "year": null,
//       "broadcast": {
//         "day": null,
//         "time": null,
//         "timezone": null,
//         "string": null
//       },
//       "producers": [],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 1,
//           "type": "anime",
//           "name": "Action",
//           "url": "https://myanimelist.net/anime/genre/1/Action"
//         },
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": [
//         {
//           "mal_id": 27,
//           "type": "anime",
//           "name": "Shounen",
//           "url": "https://myanimelist.net/anime/genre/27/Shounen"
//         }
//       ]
//     },
//     {
//       "mal_id": 57434,
//       "url": "https://myanimelist.net/anime/57434/Tensei_shitara_Slime_Datta_Ken_Movie__Guren_no_Kizuna-hen_Specials",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1505/140140.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1505/140140t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1505/140140l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1505/140140.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1505/140140t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1505/140140l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": null,
//         "url": null,
//         "embed_url": null,
//         "images": {
//           "image_url": null,
//           "small_image_url": null,
//           "medium_image_url": null,
//           "large_image_url": null,
//           "maximum_image_url": null
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen Specials"
//         }
//       ],
//       "title": "Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen Specials",
//       "title_english": null,
//       "title_japanese": null,
//       "title_synonyms": [],
//       "type": "Special",
//       "source": "Manga",
//       "episodes": 2,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2023-07-28T00:00:00+00:00",
//         "to": null,
//         "prop": {
//           "from": {
//             "day": 28,
//             "month": 7,
//             "year": 2023
//           },
//           "to": {
//             "day": null,
//             "month": null,
//             "year": null
//           }
//         },
//         "string": "Jul 28, 2023"
//       },
//       "duration": "1 min per ep",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": null,
//       "scored_by": null,
//       "rank": 14210,
//       "popularity": 19769,
//       "members": 259,
//       "favorites": 2,
//       "synopsis": "Unreleased scenes from the movie included in the BD/DVD release: \"Intermission: Kurobee's Blacksmith Workshop\" and \"Intermission: Gabiru and Wyvern\".\n\n(Source: Official Website)",
//       "background": "",
//       "season": null,
//       "year": null,
//       "broadcast": {
//         "day": null,
//         "time": null,
//         "timezone": null,
//         "string": null
//       },
//       "producers": [],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 441,
//           "type": "anime",
//           "name": "8bit",
//           "url": "https://myanimelist.net/anime/producer/441/8bit"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         }
//       ],
//       "demographics": [
//         {
//           "mal_id": 27,
//           "type": "anime",
//           "name": "Shounen",
//           "url": "https://myanimelist.net/anime/genre/27/Shounen"
//         }
//       ]
//     },
//     {
//       "mal_id": 59095,
//       "url": "https://myanimelist.net/anime/59095/Tensei_shitara_Dainana_Ouji_Datta_node_Kimama_ni_Majutsu_wo_Kiwamemasu_2nd_Season",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1466/143624.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1466/143624t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1466/143624l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1466/143624.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1466/143624t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1466/143624l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": null,
//         "url": null,
//         "embed_url": null,
//         "images": {
//           "image_url": null,
//           "small_image_url": null,
//           "medium_image_url": null,
//           "large_image_url": null,
//           "maximum_image_url": null
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu 2nd Season"
//         },
//         {
//           "type": "Synonym",
//           "title": "I Was Reincarnated as the 7th Prince"
//         },
//         {
//           "type": "Synonym",
//           "title": "so I Will Perfect My Magic as I Please 2nd Season"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したら第七王子だったので、気ままに魔術を極めます 第2期"
//         },
//         {
//           "type": "English",
//           "title": "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability Season 2"
//         }
//       ],
//       "title": "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu 2nd Season",
//       "title_english": "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability Season 2",
//       "title_japanese": "転生したら第七王子だったので、気ままに魔術を極めます 第2期",
//       "title_synonyms": [
//         "I Was Reincarnated as the 7th Prince",
//         "so I Will Perfect My Magic as I Please 2nd Season"
//       ],
//       "type": "TV",
//       "source": "Light novel",
//       "episodes": null,
//       "status": "Not yet aired",
//       "airing": false,
//       "aired": {
//         "from": null,
//         "to": null,
//         "prop": {
//           "from": {
//             "day": null,
//             "month": null,
//             "year": null
//           },
//           "to": {
//             "day": null,
//             "month": null,
//             "year": null
//           }
//         },
//         "string": "Not available"
//       },
//       "duration": "Unknown",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": null,
//       "scored_by": null,
//       "rank": null,
//       "popularity": 4938,
//       "members": 20609,
//       "favorites": 35,
//       "synopsis": "Second season of Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu.",
//       "background": "",
//       "season": null,
//       "year": null,
//       "broadcast": {
//         "day": null,
//         "time": null,
//         "timezone": null,
//         "string": "Unknown"
//       },
//       "producers": [],
//       "licensors": [],
//       "studios": [],
//       "genres": [
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 49891,
//       "url": "https://myanimelist.net/anime/49891/Tensei_shitara_Ken_deshita",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1191/127909.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1191/127909t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1191/127909l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1191/127909.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1191/127909t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1191/127909l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "TDN4Rh7VvkU",
//         "url": "https://www.youtube.com/watch?v=TDN4Rh7VvkU",
//         "embed_url": "https://www.youtube.com/embed/TDN4Rh7VvkU?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/TDN4Rh7VvkU/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Ken deshita"
//         },
//         {
//           "type": "Synonym",
//           "title": "I became the sword by transmigrating"
//         },
//         {
//           "type": "Synonym",
//           "title": "TenKen"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したら剣でした"
//         },
//         {
//           "type": "English",
//           "title": "Reincarnated as a Sword"
//         }
//       ],
//       "title": "Tensei shitara Ken deshita",
//       "title_english": "Reincarnated as a Sword",
//       "title_japanese": "転生したら剣でした",
//       "title_synonyms": [
//         "I became the sword by transmigrating",
//         "TenKen"
//       ],
//       "type": "TV",
//       "source": "Light novel",
//       "episodes": 12,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2022-10-05T00:00:00+00:00",
//         "to": "2022-12-21T00:00:00+00:00",
//         "prop": {
//           "from": {
//             "day": 5,
//             "month": 10,
//             "year": 2022
//           },
//           "to": {
//             "day": 21,
//             "month": 12,
//             "year": 2022
//           }
//         },
//         "string": "Oct 5, 2022 to Dec 21, 2022"
//       },
//       "duration": "23 min per ep",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 7.52,
//       "scored_by": 140372,
//       "rank": 1793,
//       "popularity": 878,
//       "members": 289972,
//       "favorites": 1725,
//       "synopsis": "A nameless sword wakes up to discover he has been reincarnated from his former life as a human. With his power of telekinesis, he moves around this new world, acquiring several skills and abilities. When the sword comes upon a forest filled with monsters, he meets a young girl fleeing from a beast. Grabbing the sword, the girl easily defeats the monster. After introducing herself as Fran, she names the sword \"Shishou\" and officially becomes his wielder.\n\nThe two set out to become adventurers, but unfortunately for Fran, she is a member of the Black Cat Tribe—a Beastkin group with a bad reputation. No member of this tribe has ever evolved into a mightier beast, but Fran plans to be the first and achieve her parents' dream. As Shishou promises to remain her sword until she attains her goal, they form an unstoppable partnership of impressive strength.\n\n[Written by MAL Rewrite]",
//       "background": "",
//       "season": "fall",
//       "year": 2022,
//       "broadcast": {
//         "day": "Wednesdays",
//         "time": "23:00",
//         "timezone": "Asia/Tokyo",
//         "string": "Wednesdays at 23:00 (JST)"
//       },
//       "producers": [
//         {
//           "mal_id": 282,
//           "type": "anime",
//           "name": "Gentosha Comics",
//           "url": "https://myanimelist.net/anime/producer/282/Gentosha_Comics"
//         },
//         {
//           "mal_id": 513,
//           "type": "anime",
//           "name": "Nikkatsu",
//           "url": "https://myanimelist.net/anime/producer/513/Nikkatsu"
//         },
//         {
//           "mal_id": 1113,
//           "type": "anime",
//           "name": "NBCUniversal Entertainment Japan",
//           "url": "https://myanimelist.net/anime/producer/1113/NBCUniversal_Entertainment_Japan"
//         },
//         {
//           "mal_id": 1501,
//           "type": "anime",
//           "name": "JR East Marketing & Communications",
//           "url": "https://myanimelist.net/anime/producer/1501/JR_East_Marketing___Communications"
//         },
//         {
//           "mal_id": 1896,
//           "type": "anime",
//           "name": "Micro Magazine Publishing",
//           "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
//         },
//         {
//           "mal_id": 2185,
//           "type": "anime",
//           "name": "BS Asahi",
//           "url": "https://myanimelist.net/anime/producer/2185/BS_Asahi"
//         },
//         {
//           "mal_id": 2289,
//           "type": "anime",
//           "name": "GREE Entertainment",
//           "url": "https://myanimelist.net/anime/producer/2289/GREE_Entertainment"
//         },
//         {
//           "mal_id": 2440,
//           "type": "anime",
//           "name": "Micro House",
//           "url": "https://myanimelist.net/anime/producer/2440/Micro_House"
//         }
//       ],
//       "licensors": [
//         {
//           "mal_id": 376,
//           "type": "anime",
//           "name": "Sentai Filmworks",
//           "url": "https://myanimelist.net/anime/producer/376/Sentai_Filmworks"
//         }
//       ],
//       "studios": [
//         {
//           "mal_id": 605,
//           "type": "anime",
//           "name": "C2C",
//           "url": "https://myanimelist.net/anime/producer/605/C2C"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 1,
//           "type": "anime",
//           "name": "Action",
//           "url": "https://myanimelist.net/anime/genre/1/Action"
//         },
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 53913,
//       "url": "https://myanimelist.net/anime/53913/Tensei_shitara_Ken_deshita_2",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1710/131965.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1710/131965t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1710/131965l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1710/131965.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1710/131965t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1710/131965l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "w7tkCb7eH3g",
//         "url": "https://www.youtube.com/watch?v=w7tkCb7eH3g",
//         "embed_url": "https://www.youtube.com/embed/w7tkCb7eH3g?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/w7tkCb7eH3g/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Ken deshita 2"
//         },
//         {
//           "type": "Synonym",
//           "title": "I became the sword by transmigrating 2nd Season"
//         },
//         {
//           "type": "Synonym",
//           "title": "TenKen 2"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したら剣でした2"
//         },
//         {
//           "type": "English",
//           "title": "Reincarnated as a Sword Season 2"
//         }
//       ],
//       "title": "Tensei shitara Ken deshita 2",
//       "title_english": "Reincarnated as a Sword Season 2",
//       "title_japanese": "転生したら剣でした2",
//       "title_synonyms": [
//         "I became the sword by transmigrating 2nd Season",
//         "TenKen 2"
//       ],
//       "type": "TV",
//       "source": "Light novel",
//       "episodes": null,
//       "status": "Not yet aired",
//       "airing": false,
//       "aired": {
//         "from": null,
//         "to": null,
//         "prop": {
//           "from": {
//             "day": null,
//             "month": null,
//             "year": null
//           },
//           "to": {
//             "day": null,
//             "month": null,
//             "year": null
//           }
//         },
//         "string": "Not available"
//       },
//       "duration": "Unknown",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": null,
//       "scored_by": null,
//       "rank": null,
//       "popularity": 2809,
//       "members": 64531,
//       "favorites": 376,
//       "synopsis": "Second season of Tensei shitara Ken deshita.",
//       "background": "",
//       "season": null,
//       "year": null,
//       "broadcast": {
//         "day": null,
//         "time": null,
//         "timezone": null,
//         "string": "Unknown"
//       },
//       "producers": [
//         {
//           "mal_id": 282,
//           "type": "anime",
//           "name": "Gentosha Comics",
//           "url": "https://myanimelist.net/anime/producer/282/Gentosha_Comics"
//         },
//         {
//           "mal_id": 1113,
//           "type": "anime",
//           "name": "NBCUniversal Entertainment Japan",
//           "url": "https://myanimelist.net/anime/producer/1113/NBCUniversal_Entertainment_Japan"
//         },
//         {
//           "mal_id": 1896,
//           "type": "anime",
//           "name": "Micro Magazine Publishing",
//           "url": "https://myanimelist.net/anime/producer/1896/Micro_Magazine_Publishing"
//         }
//       ],
//       "licensors": [],
//       "studios": [],
//       "genres": [
//         {
//           "mal_id": 1,
//           "type": "anime",
//           "name": "Action",
//           "url": "https://myanimelist.net/anime/genre/1/Action"
//         },
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 53516,
//       "url": "https://myanimelist.net/anime/53516/Tensei_shitara_Dainana_Ouji_Datta_node_Kimama_ni_Majutsu_wo_Kiwamemasu",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1580/141243.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1580/141243t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1580/141243l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1580/141243.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1580/141243t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1580/141243l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "aK8Gtxw-9bE",
//         "url": "https://www.youtube.com/watch?v=aK8Gtxw-9bE",
//         "embed_url": "https://www.youtube.com/embed/aK8Gtxw-9bE?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/aK8Gtxw-9bE/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu"
//         },
//         {
//           "type": "Synonym",
//           "title": "I Was Reincarnated as the 7th Prince"
//         },
//         {
//           "type": "Synonym",
//           "title": "so I Will Perfect My Magic as I Please"
//         },
//         {
//           "type": "Japanese",
//           "title": "転生したら第七王子だったので、気ままに魔術を極めます"
//         },
//         {
//           "type": "English",
//           "title": "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability"
//         }
//       ],
//       "title": "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu",
//       "title_english": "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability",
//       "title_japanese": "転生したら第七王子だったので、気ままに魔術を極めます",
//       "title_synonyms": [
//         "I Was Reincarnated as the 7th Prince",
//         "so I Will Perfect My Magic as I Please"
//       ],
//       "type": "TV",
//       "source": "Light novel",
//       "episodes": 12,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2024-04-02T00:00:00+00:00",
//         "to": "2024-06-18T00:00:00+00:00",
//         "prop": {
//           "from": {
//             "day": 2,
//             "month": 4,
//             "year": 2024
//           },
//           "to": {
//             "day": 18,
//             "month": 6,
//             "year": 2024
//           }
//         },
//         "string": "Apr 2, 2024 to Jun 18, 2024"
//       },
//       "duration": "23 min per ep",
//       "rating": "PG-13 - Teens 13 or older",
//       "score": 7.47,
//       "scored_by": 86578,
//       "rank": 2000,
//       "popularity": 1385,
//       "members": 176319,
//       "favorites": 893,
//       "synopsis": "In his past life, Prince Lloyd de Saloum was a commoner who could not become adept at magic, no matter how knowledgeable or obsessed he was about it. Now reincarnated into his current royal lineage, he receives a body with seemingly endless mana, making his desire to master all things arcane attainable. Moreover, as the seventh prince of the kingdom, Lloyd has no claim to the throne, allowing him to nurture his abilities as freely as he wants.\n\nUnfortunately for Lloyd, ancient seals that imprison powerful demons begin to break down and release the horrors within, endangering the peace. With these monstrosities roaming around, Lloyd's overwhelming magical prowess is the ultimate weapon that can neutralize these threats before all things descend to chaos.\n\n[Written by MAL Rewrite]",
//       "background": "",
//       "season": "spring",
//       "year": 2024,
//       "broadcast": {
//         "day": "Tuesdays",
//         "time": "00:00",
//         "timezone": "Asia/Tokyo",
//         "string": "Tuesdays at 00:00 (JST)"
//       },
//       "producers": [
//         {
//           "mal_id": 16,
//           "type": "anime",
//           "name": "TV Tokyo",
//           "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
//         },
//         {
//           "mal_id": 104,
//           "type": "anime",
//           "name": "Lantis",
//           "url": "https://myanimelist.net/anime/producer/104/Lantis"
//         },
//         {
//           "mal_id": 159,
//           "type": "anime",
//           "name": "Kodansha",
//           "url": "https://myanimelist.net/anime/producer/159/Kodansha"
//         },
//         {
//           "mal_id": 1041,
//           "type": "anime",
//           "name": "Ai Addiction",
//           "url": "https://myanimelist.net/anime/producer/1041/Ai_Addiction"
//         },
//         {
//           "mal_id": 1468,
//           "type": "anime",
//           "name": "Crunchyroll",
//           "url": "https://myanimelist.net/anime/producer/1468/Crunchyroll"
//         },
//         {
//           "mal_id": 2232,
//           "type": "anime",
//           "name": "ADK Marketing Solutions",
//           "url": "https://myanimelist.net/anime/producer/2232/ADK_Marketing_Solutions"
//         },
//         {
//           "mal_id": 2424,
//           "type": "anime",
//           "name": "Bandai Namco Filmworks",
//           "url": "https://myanimelist.net/anime/producer/2424/Bandai_Namco_Filmworks"
//         },
//         {
//           "mal_id": 2425,
//           "type": "anime",
//           "name": "Bandai Namco Music Live",
//           "url": "https://myanimelist.net/anime/producer/2425/Bandai_Namco_Music_Live"
//         }
//       ],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 2212,
//           "type": "anime",
//           "name": "Tsumugi Akita Animation Lab",
//           "url": "https://myanimelist.net/anime/producer/2212/Tsumugi_Akita_Animation_Lab"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 56733,
//       "url": "https://myanimelist.net/anime/56733/Magical★Explorer",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1062/138681.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1062/138681t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1062/138681l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1062/138681.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1062/138681t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1062/138681l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": null,
//         "url": null,
//         "embed_url": null,
//         "images": {
//           "image_url": null,
//           "small_image_url": null,
//           "medium_image_url": null,
//           "large_image_url": null,
//           "maximum_image_url": null
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Magical★Explorer"
//         },
//         {
//           "type": "Synonym",
//           "title": "Magical Explorer: Reincarnated as an Eroge Hero's Friend"
//         },
//         {
//           "type": "Synonym",
//           "title": "I'll Live Freely With My Eroge Knowledge."
//         },
//         {
//           "type": "Japanese",
//           "title": "マジカル★エクスプロ"
//         },
//         {
//           "type": "English",
//           "title": "Magical Explorer: Reborn as a Side Character in a Fantasy Dating Sim"
//         }
//       ],
//       "title": "Magical★Explorer",
//       "title_english": "Magical Explorer: Reborn as a Side Character in a Fantasy Dating Sim",
//       "title_japanese": "マジカル★エクスプロ",
//       "title_synonyms": [
//         "Magical Explorer: Reincarnated as an Eroge Hero's Friend",
//         "I'll Live Freely With My Eroge Knowledge."
//       ],
//       "type": null,
//       "source": "Light novel",
//       "episodes": null,
//       "status": "Not yet aired",
//       "airing": false,
//       "aired": {
//         "from": null,
//         "to": null,
//         "prop": {
//           "from": {
//             "day": null,
//             "month": null,
//             "year": null
//           },
//           "to": {
//             "day": null,
//             "month": null,
//             "year": null
//           }
//         },
//         "string": "Not available"
//       },
//       "duration": "Unknown",
//       "rating": null,
//       "score": null,
//       "scored_by": null,
//       "rank": null,
//       "popularity": 11474,
//       "members": 2077,
//       "favorites": 8,
//       "synopsis": "Reincarnated as a character in the legendary erotic game, “Magical Explorer,” it doesn’t take long for our hero to discover that he’s been designated the unlucky side-character rather than the game’s lady-killer protagonist. Not to worry, though! Armed with his vast knowledge of the game (and a few cheats) he’ll do whatever it takes to win the hearts of the game’s heroines and emerge as the most accomplished student at the Sorcerer's Academy!\n\n(Source: Yen Press)",
//       "background": "",
//       "season": null,
//       "year": null,
//       "broadcast": {
//         "day": null,
//         "time": null,
//         "timezone": null,
//         "string": null
//       },
//       "producers": [],
//       "licensors": [],
//       "studios": [],
//       "genres": [
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         },
//         {
//           "mal_id": 9,
//           "type": "anime",
//           "name": "Ecchi",
//           "url": "https://myanimelist.net/anime/genre/9/Ecchi"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 35,
//           "type": "anime",
//           "name": "Harem",
//           "url": "https://myanimelist.net/anime/genre/35/Harem"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 58395,
//       "url": "https://myanimelist.net/anime/58395/Neko_ni_Tensei_shita_Ojisan",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1659/144170.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1659/144170t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1659/144170l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1659/144170.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1659/144170t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1659/144170l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "cNBdqkjdRuY",
//         "url": "https://www.youtube.com/watch?v=cNBdqkjdRuY",
//         "embed_url": "https://www.youtube.com/embed/cNBdqkjdRuY?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/cNBdqkjdRuY/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Neko ni Tensei shita Ojisan"
//         },
//         {
//           "type": "Synonym",
//           "title": "The Old Man Who Was Reincarnated as a Cat"
//         },
//         {
//           "type": "Japanese",
//           "title": "ねこに転生したおじさん"
//         }
//       ],
//       "title": "Neko ni Tensei shita Ojisan",
//       "title_english": null,
//       "title_japanese": "ねこに転生したおじさん",
//       "title_synonyms": [
//         "The Old Man Who Was Reincarnated as a Cat"
//       ],
//       "type": "TV",
//       "source": "Web manga",
//       "episodes": null,
//       "status": "Not yet aired",
//       "airing": false,
//       "aired": {
//         "from": "2024-10-07T00:00:00+00:00",
//         "to": null,
//         "prop": {
//           "from": {
//             "day": 7,
//             "month": 10,
//             "year": 2024
//           },
//           "to": {
//             "day": null,
//             "month": null,
//             "year": null
//           }
//         },
//         "string": "Oct 7, 2024 to ?"
//       },
//       "duration": "Unknown",
//       "rating": null,
//       "score": null,
//       "scored_by": null,
//       "rank": null,
//       "popularity": 14438,
//       "members": 849,
//       "favorites": 2,
//       "synopsis": "The story follows an ordinary old man who one day suddenly is reincarnated as a cute cat, and the president of the company he works for picks him up.\n\n(Source: ANN)",
//       "background": "",
//       "season": "fall",
//       "year": 2024,
//       "broadcast": {
//         "day": "Mondays",
//         "time": "13:00",
//         "timezone": "Asia/Tokyo",
//         "string": "Mondays at 13:00 (JST)"
//       },
//       "producers": [],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 2911,
//           "type": "anime",
//           "name": "Studio Eight Color",
//           "url": "https://myanimelist.net/anime/producer/2911/Studio_Eight_Color"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 4,
//           "type": "anime",
//           "name": "Comedy",
//           "url": "https://myanimelist.net/anime/genre/4/Comedy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 71,
//           "type": "anime",
//           "name": "Pets",
//           "url": "https://myanimelist.net/anime/genre/71/Pets"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 39535,
//       "url": "https://myanimelist.net/anime/39535/Mushoku_Tensei__Isekai_Ittara_Honki_Dasu",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1530/117776.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1530/117776t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1530/117776l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1530/117776.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1530/117776t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1530/117776l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "Qx01pn9l-6g",
//         "url": "https://www.youtube.com/watch?v=Qx01pn9l-6g",
//         "embed_url": "https://www.youtube.com/embed/Qx01pn9l-6g?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/Qx01pn9l-6g/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Mushoku Tensei: Isekai Ittara Honki Dasu"
//         },
//         {
//           "type": "Synonym",
//           "title": "Jobless Reincarnation: I Will Seriously Try If I Go To Another World"
//         },
//         {
//           "type": "Japanese",
//           "title": "無職転生 ～異世界行ったら本気だす～"
//         },
//         {
//           "type": "English",
//           "title": "Mushoku Tensei: Jobless Reincarnation"
//         },
//         {
//           "type": "German",
//           "title": "Mushoku Tensei: Jobless Reincarnation"
//         },
//         {
//           "type": "French",
//           "title": "Mushoku Tensei: Jobless Reincarnation"
//         }
//       ],
//       "title": "Mushoku Tensei: Isekai Ittara Honki Dasu",
//       "title_english": "Mushoku Tensei: Jobless Reincarnation",
//       "title_japanese": "無職転生 ～異世界行ったら本気だす～",
//       "title_synonyms": [
//         "Jobless Reincarnation: I Will Seriously Try If I Go To Another World"
//       ],
//       "type": "TV",
//       "source": "Light novel",
//       "episodes": 11,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2021-01-11T00:00:00+00:00",
//         "to": "2021-03-22T00:00:00+00:00",
//         "prop": {
//           "from": {
//             "day": 11,
//             "month": 1,
//             "year": 2021
//           },
//           "to": {
//             "day": 22,
//             "month": 3,
//             "year": 2021
//           }
//         },
//         "string": "Jan 11, 2021 to Mar 22, 2021"
//       },
//       "duration": "23 min per ep",
//       "rating": "R - 17+ (violence & profanity)",
//       "score": 8.36,
//       "scored_by": 852351,
//       "rank": 218,
//       "popularity": 96,
//       "members": 1385103,
//       "favorites": 35438,
//       "synopsis": "Despite being bullied, scorned, and oppressed all of his life, a 34-year-old shut-in still found the resolve to attempt something heroic—only for it to end in a tragic accident. But in a twist of fate, he awakens in another world as Rudeus Greyrat, starting life again as a baby born to two loving parents.\n\nPreserving his memories and knowledge from his previous life, Rudeus quickly adapts to his new environment. With the mind of a grown adult, he starts to display magical talent that exceeds all expectations, honing his skill with the help of a mage named Roxy Migurdia. Rudeus learns swordplay from his father, Paul, and meets Sylphiette, a girl his age who quickly becomes his closest friend.\n\nAs Rudeus' second chance at life begins, he tries to make the most of his new opportunity while conquering his traumatic past. And perhaps, one day, he may find the one thing he could not find in his old world—love.\n\n[Written by MAL Rewrite]",
//       "background": "Mushoku Tensei: Isekai Ittara Honki Dasu adapts chapters 1-26 of Yuka Fujikawa's manga series and volumes 1-3 of Rifujin na Magonote's light novel series of the same title.",
//       "season": "winter",
//       "year": 2021,
//       "broadcast": {
//         "day": "Mondays",
//         "time": "00:00",
//         "timezone": "Asia/Tokyo",
//         "string": "Mondays at 00:00 (JST)"
//       },
//       "producers": [
//         {
//           "mal_id": 61,
//           "type": "anime",
//           "name": "Frontier Works",
//           "url": "https://myanimelist.net/anime/producer/61/Frontier_Works"
//         },
//         {
//           "mal_id": 245,
//           "type": "anime",
//           "name": "TOHO",
//           "url": "https://myanimelist.net/anime/producer/245/TOHO"
//         },
//         {
//           "mal_id": 1143,
//           "type": "anime",
//           "name": "TOHO animation",
//           "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
//         },
//         {
//           "mal_id": 1333,
//           "type": "anime",
//           "name": "Hakuhodo DY Music & Pictures",
//           "url": "https://myanimelist.net/anime/producer/1333/Hakuhodo_DY_Music___Pictures"
//         },
//         {
//           "mal_id": 1416,
//           "type": "anime",
//           "name": "BS11",
//           "url": "https://myanimelist.net/anime/producer/1416/BS11"
//         },
//         {
//           "mal_id": 1444,
//           "type": "anime",
//           "name": "Egg Firm",
//           "url": "https://myanimelist.net/anime/producer/1444/Egg_Firm"
//         },
//         {
//           "mal_id": 1696,
//           "type": "anime",
//           "name": "Kadokawa",
//           "url": "https://myanimelist.net/anime/producer/1696/Kadokawa"
//         },
//         {
//           "mal_id": 1815,
//           "type": "anime",
//           "name": "GREE",
//           "url": "https://myanimelist.net/anime/producer/1815/GREE"
//         },
//         {
//           "mal_id": 2229,
//           "type": "anime",
//           "name": "Toho Music",
//           "url": "https://myanimelist.net/anime/producer/2229/Toho_Music"
//         }
//       ],
//       "licensors": [
//         {
//           "mal_id": 102,
//           "type": "anime",
//           "name": "Funimation",
//           "url": "https://myanimelist.net/anime/producer/102/Funimation"
//         }
//       ],
//       "studios": [
//         {
//           "mal_id": 1993,
//           "type": "anime",
//           "name": "Studio Bind",
//           "url": "https://myanimelist.net/anime/producer/1993/Studio_Bind"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 8,
//           "type": "anime",
//           "name": "Drama",
//           "url": "https://myanimelist.net/anime/genre/8/Drama"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         },
//         {
//           "mal_id": 9,
//           "type": "anime",
//           "name": "Ecchi",
//           "url": "https://myanimelist.net/anime/genre/9/Ecchi"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 51179,
//       "url": "https://myanimelist.net/anime/51179/Mushoku_Tensei_II__Isekai_Ittara_Honki_Dasu",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1898/138005.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1898/138005t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1898/138005l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1898/138005.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1898/138005t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1898/138005l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "keti2rbgI6c",
//         "url": "https://www.youtube.com/watch?v=keti2rbgI6c",
//         "embed_url": "https://www.youtube.com/embed/keti2rbgI6c?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/keti2rbgI6c/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/keti2rbgI6c/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/keti2rbgI6c/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/keti2rbgI6c/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/keti2rbgI6c/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu"
//         },
//         {
//           "type": "Synonym",
//           "title": "Jobless Reincarnation: I Will Seriously Try If I Go To Another World"
//         },
//         {
//           "type": "Synonym",
//           "title": "Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season"
//         },
//         {
//           "type": "Japanese",
//           "title": "無職転生 II ～異世界行ったら本気だす～"
//         },
//         {
//           "type": "English",
//           "title": "Mushoku Tensei: Jobless Reincarnation Season 2"
//         }
//       ],
//       "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu",
//       "title_english": "Mushoku Tensei: Jobless Reincarnation Season 2",
//       "title_japanese": "無職転生 II ～異世界行ったら本気だす～",
//       "title_synonyms": [
//         "Jobless Reincarnation: I Will Seriously Try If I Go To Another World",
//         "Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season"
//       ],
//       "type": "TV",
//       "source": "Light novel",
//       "episodes": 12,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2023-07-10T00:00:00+00:00",
//         "to": "2023-09-25T00:00:00+00:00",
//         "prop": {
//           "from": {
//             "day": 10,
//             "month": 7,
//             "year": 2023
//           },
//           "to": {
//             "day": 25,
//             "month": 9,
//             "year": 2023
//           }
//         },
//         "string": "Jul 10, 2023 to Sep 25, 2023"
//       },
//       "duration": "23 min per ep",
//       "rating": "R - 17+ (violence & profanity)",
//       "score": 8.24,
//       "scored_by": 338405,
//       "rank": 328,
//       "popularity": 369,
//       "members": 609055,
//       "favorites": 7181,
//       "synopsis": "After his relationship with Eris Boreas Greyrat reaches new heights, Rudeus Greyrat is ecstatic. Unfortunately, his joy is short-lived, as Eris suddenly abandons him to embark on her own journey. Believing that Eris has lost all interest in him, a heartbroken and depressed Rudeus sets forth to the Northern Territories. With his sole goal being to locate his mother on the vast continent, Rudeus wonders if persisting through daily life is worth the pain, falling into a robotic routine as he endlessly ruminates on his lost love.\n\nHowever, the dangers of the North soon prove that one cannot survive with a dulled mind. While on a quest with the party Counter Arrow, with whom he recently became acquainted, Rudeus has a brush with death—an experience that forces him to finally snap out of his despair. With his newfound teammates, Rudeus rediscovers the pleasure of daily adventuring and moves forward with his original goal of living his second lease on life to the fullest.\n\n[Written by MAL Rewrite]",
//       "background": "Mushoku Tensei II: Isekai Ittara Honki Dasu was released on Blu-ray in two volumes from October 18, 2023, to December 20, 2023.",
//       "season": "summer",
//       "year": 2023,
//       "broadcast": {
//         "day": "Mondays",
//         "time": "00:00",
//         "timezone": "Asia/Tokyo",
//         "string": "Mondays at 00:00 (JST)"
//       },
//       "producers": [
//         {
//           "mal_id": 61,
//           "type": "anime",
//           "name": "Frontier Works",
//           "url": "https://myanimelist.net/anime/producer/61/Frontier_Works"
//         },
//         {
//           "mal_id": 245,
//           "type": "anime",
//           "name": "TOHO",
//           "url": "https://myanimelist.net/anime/producer/245/TOHO"
//         },
//         {
//           "mal_id": 1143,
//           "type": "anime",
//           "name": "TOHO animation",
//           "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
//         },
//         {
//           "mal_id": 1333,
//           "type": "anime",
//           "name": "Hakuhodo DY Music & Pictures",
//           "url": "https://myanimelist.net/anime/producer/1333/Hakuhodo_DY_Music___Pictures"
//         },
//         {
//           "mal_id": 1416,
//           "type": "anime",
//           "name": "BS11",
//           "url": "https://myanimelist.net/anime/producer/1416/BS11"
//         },
//         {
//           "mal_id": 1444,
//           "type": "anime",
//           "name": "Egg Firm",
//           "url": "https://myanimelist.net/anime/producer/1444/Egg_Firm"
//         },
//         {
//           "mal_id": 1696,
//           "type": "anime",
//           "name": "Kadokawa",
//           "url": "https://myanimelist.net/anime/producer/1696/Kadokawa"
//         },
//         {
//           "mal_id": 2289,
//           "type": "anime",
//           "name": "GREE Entertainment",
//           "url": "https://myanimelist.net/anime/producer/2289/GREE_Entertainment"
//         }
//       ],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 1993,
//           "type": "anime",
//           "name": "Studio Bind",
//           "url": "https://myanimelist.net/anime/producer/1993/Studio_Bind"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 8,
//           "type": "anime",
//           "name": "Drama",
//           "url": "https://myanimelist.net/anime/genre/8/Drama"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         },
//         {
//           "mal_id": 9,
//           "type": "anime",
//           "name": "Ecchi",
//           "url": "https://myanimelist.net/anime/genre/9/Ecchi"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 50360,
//       "url": "https://myanimelist.net/anime/50360/Mushoku_Tensei__Isekai_Ittara_Honki_Dasu_-_Eris_no_Goblin_Toubatsu",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1094/120148.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1094/120148t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1094/120148l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1094/120148.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1094/120148t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1094/120148l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "D_u6BZYp93U",
//         "url": "https://www.youtube.com/watch?v=D_u6BZYp93U",
//         "embed_url": "https://www.youtube.com/embed/D_u6BZYp93U?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/D_u6BZYp93U/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/D_u6BZYp93U/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/D_u6BZYp93U/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/D_u6BZYp93U/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/D_u6BZYp93U/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Mushoku Tensei: Isekai Ittara Honki Dasu - Eris no Goblin Toubatsu"
//         },
//         {
//           "type": "Synonym",
//           "title": "Mushoku Tensei: Jobless Reincarnation Special"
//         },
//         {
//           "type": "Synonym",
//           "title": "Mushoku Tensei: Isekai Ittara Honki Dasu Special"
//         },
//         {
//           "type": "Japanese",
//           "title": "無職転生 ～異世界行ったら本気だす～ エリスのゴブリン討伐"
//         },
//         {
//           "type": "English",
//           "title": "Mushoku Tensei: Jobless Reincarnation - Eris the Goblin Slayer"
//         }
//       ],
//       "title": "Mushoku Tensei: Isekai Ittara Honki Dasu - Eris no Goblin Toubatsu",
//       "title_english": "Mushoku Tensei: Jobless Reincarnation - Eris the Goblin Slayer",
//       "title_japanese": "無職転生 ～異世界行ったら本気だす～ エリスのゴブリン討伐",
//       "title_synonyms": [
//         "Mushoku Tensei: Jobless Reincarnation Special",
//         "Mushoku Tensei: Isekai Ittara Honki Dasu Special"
//       ],
//       "type": "Special",
//       "source": "Light novel",
//       "episodes": 1,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2022-03-16T00:00:00+00:00",
//         "to": null,
//         "prop": {
//           "from": {
//             "day": 16,
//             "month": 3,
//             "year": 2022
//           },
//           "to": {
//             "day": null,
//             "month": null,
//             "year": null
//           }
//         },
//         "string": "Mar 16, 2022"
//       },
//       "duration": "23 min",
//       "rating": "R - 17+ (violence & profanity)",
//       "score": 7.81,
//       "scored_by": 101446,
//       "rank": 979,
//       "popularity": 1319,
//       "members": 187437,
//       "favorites": 600,
//       "synopsis": "During their stay in the capital of Milishion, the adventurers of Dead End decide to split up for a day to run their errands. While Rudeus Greyrat has his plans derailed by a troublesome scene, the party's swordswoman, Eris Boreas Greyrat, finds herself with nothing to do. Deciding to embark on an adventure to slay goblins, Eris crosses paths with a cocky but talented mage named Cliff Grimoire. Though Eris refuses his company, Cliff stubbornly ignores her wishes and dares her to explore the perilous forest surrounding the city. Accepting his challenge, Eris ventures into the forest with the mage, where the two encounter something far more repulsive than mere goblins.\n\n[Written by MAL Rewrite]",
//       "background": "Mushoku Tensei: Isekai Ittara Honki Dasu - Eris no Goblin Toubatsu is an unaired episode bundled with the fourth Mushoku Tensei: Isekai Ittara Honki Dasu Blu-ray volume.",
//       "season": null,
//       "year": null,
//       "broadcast": {
//         "day": null,
//         "time": null,
//         "timezone": null,
//         "string": null
//       },
//       "producers": [
//         {
//           "mal_id": 61,
//           "type": "anime",
//           "name": "Frontier Works",
//           "url": "https://myanimelist.net/anime/producer/61/Frontier_Works"
//         },
//         {
//           "mal_id": 1143,
//           "type": "anime",
//           "name": "TOHO animation",
//           "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
//         },
//         {
//           "mal_id": 1333,
//           "type": "anime",
//           "name": "Hakuhodo DY Music & Pictures",
//           "url": "https://myanimelist.net/anime/producer/1333/Hakuhodo_DY_Music___Pictures"
//         },
//         {
//           "mal_id": 1416,
//           "type": "anime",
//           "name": "BS11",
//           "url": "https://myanimelist.net/anime/producer/1416/BS11"
//         },
//         {
//           "mal_id": 1444,
//           "type": "anime",
//           "name": "Egg Firm",
//           "url": "https://myanimelist.net/anime/producer/1444/Egg_Firm"
//         },
//         {
//           "mal_id": 1696,
//           "type": "anime",
//           "name": "Kadokawa",
//           "url": "https://myanimelist.net/anime/producer/1696/Kadokawa"
//         },
//         {
//           "mal_id": 2289,
//           "type": "anime",
//           "name": "GREE Entertainment",
//           "url": "https://myanimelist.net/anime/producer/2289/GREE_Entertainment"
//         }
//       ],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 1993,
//           "type": "anime",
//           "name": "Studio Bind",
//           "url": "https://myanimelist.net/anime/producer/1993/Studio_Bind"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 8,
//           "type": "anime",
//           "name": "Drama",
//           "url": "https://myanimelist.net/anime/genre/8/Drama"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": []
//     },
//     {
//       "mal_id": 55888,
//       "url": "https://myanimelist.net/anime/55888/Mushoku_Tensei_II__Isekai_Ittara_Honki_Dasu_Part_2",
//       "images": {
//         "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1876/141251.jpg",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1876/141251t.jpg",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1876/141251l.jpg"
//         },
//         "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/anime/1876/141251.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/anime/1876/141251t.webp",
//           "large_image_url": "https://cdn.myanimelist.net/images/anime/1876/141251l.webp"
//         }
//       },
//       "trailer": {
//         "youtube_id": "L5broLUI1m4",
//         "url": "https://www.youtube.com/watch?v=L5broLUI1m4",
//         "embed_url": "https://www.youtube.com/embed/L5broLUI1m4?enablejsapi=1&wmode=opaque&autoplay=1",
//         "images": {
//           "image_url": "https://img.youtube.com/vi/L5broLUI1m4/default.jpg",
//           "small_image_url": "https://img.youtube.com/vi/L5broLUI1m4/sddefault.jpg",
//           "medium_image_url": "https://img.youtube.com/vi/L5broLUI1m4/mqdefault.jpg",
//           "large_image_url": "https://img.youtube.com/vi/L5broLUI1m4/hqdefault.jpg",
//           "maximum_image_url": "https://img.youtube.com/vi/L5broLUI1m4/maxresdefault.jpg"
//         }
//       },
//       "approved": true,
//       "titles": [
//         {
//           "type": "Default",
//           "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2"
//         },
//         {
//           "type": "Synonym",
//           "title": "Jobless Reincarnation: I Will Seriously Try If I Go To Another World"
//         },
//         {
//           "type": "Synonym",
//           "title": "Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season Part 2"
//         },
//         {
//           "type": "Japanese",
//           "title": "無職転生 II ～異世界行ったら本気だす～ (第2クール)"
//         },
//         {
//           "type": "English",
//           "title": "Mushoku Tensei: Jobless Reincarnation Season 2 Part 2"
//         }
//       ],
//       "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
//       "title_english": "Mushoku Tensei: Jobless Reincarnation Season 2 Part 2",
//       "title_japanese": "無職転生 II ～異世界行ったら本気だす～ (第2クール)",
//       "title_synonyms": [
//         "Jobless Reincarnation: I Will Seriously Try If I Go To Another World",
//         "Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season Part 2"
//       ],
//       "type": "TV",
//       "source": "Light novel",
//       "episodes": 12,
//       "status": "Finished Airing",
//       "airing": false,
//       "aired": {
//         "from": "2024-04-08T00:00:00+00:00",
//         "to": "2024-07-01T00:00:00+00:00",
//         "prop": {
//           "from": {
//             "day": 8,
//             "month": 4,
//             "year": 2024
//           },
//           "to": {
//             "day": 1,
//             "month": 7,
//             "year": 2024
//           }
//         },
//         "string": "Apr 8, 2024 to Jul 1, 2024"
//       },
//       "duration": "23 min per ep",
//       "rating": "R - 17+ (violence & profanity)",
//       "score": 8.46,
//       "scored_by": 205688,
//       "rank": 154,
//       "popularity": 577,
//       "members": 409706,
//       "favorites": 3480,
//       "synopsis": "Following the faceless god Hitogami's advice seems to have worked wonders for Rudeus Greyrat. After enrolling into the University of Magic as he was told, Rudeus reunites with his childhood friend Sylphiette, who put a valiant effort into curing his condition. The two grow ever closer together and decide to host a wedding party, inviting the friends they have made over the years to announce and formalize their relationship.\n\nFor all his recent blessings, however, Rudeus' troubles are far from over. The research he is helping Shizuka Nanahoshi conduct hits a bottleneck, sending her into a deep slump much like he experienced in his previous life. Furthermore, a letter from his father, Paul, brings complications to Rudeus' relationships, and Sylphiette still knows next to nothing about his real background. In the face of these issues, Rudeus will have to apply the lessons he has learned in this new world to navigate through the challenges that come with living a life to its fullest.\n\n[Written by MAL Rewrite]",
//       "background": "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2 was released on Blu-ray in two volumes from July 17, 2024, to September 18, 2024.",
//       "season": "spring",
//       "year": 2024,
//       "broadcast": {
//         "day": "Mondays",
//         "time": "00:00",
//         "timezone": "Asia/Tokyo",
//         "string": "Mondays at 00:00 (JST)"
//       },
//       "producers": [
//         {
//           "mal_id": 61,
//           "type": "anime",
//           "name": "Frontier Works",
//           "url": "https://myanimelist.net/anime/producer/61/Frontier_Works"
//         },
//         {
//           "mal_id": 1143,
//           "type": "anime",
//           "name": "TOHO animation",
//           "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
//         },
//         {
//           "mal_id": 1333,
//           "type": "anime",
//           "name": "Hakuhodo DY Music & Pictures",
//           "url": "https://myanimelist.net/anime/producer/1333/Hakuhodo_DY_Music___Pictures"
//         },
//         {
//           "mal_id": 1416,
//           "type": "anime",
//           "name": "BS11",
//           "url": "https://myanimelist.net/anime/producer/1416/BS11"
//         },
//         {
//           "mal_id": 1444,
//           "type": "anime",
//           "name": "Egg Firm",
//           "url": "https://myanimelist.net/anime/producer/1444/Egg_Firm"
//         },
//         {
//           "mal_id": 1696,
//           "type": "anime",
//           "name": "Kadokawa",
//           "url": "https://myanimelist.net/anime/producer/1696/Kadokawa"
//         },
//         {
//           "mal_id": 2289,
//           "type": "anime",
//           "name": "GREE Entertainment",
//           "url": "https://myanimelist.net/anime/producer/2289/GREE_Entertainment"
//         }
//       ],
//       "licensors": [],
//       "studios": [
//         {
//           "mal_id": 1993,
//           "type": "anime",
//           "name": "Studio Bind",
//           "url": "https://myanimelist.net/anime/producer/1993/Studio_Bind"
//         }
//       ],
//       "genres": [
//         {
//           "mal_id": 2,
//           "type": "anime",
//           "name": "Adventure",
//           "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//           "mal_id": 8,
//           "type": "anime",
//           "name": "Drama",
//           "url": "https://myanimelist.net/anime/genre/8/Drama"
//         },
//         {
//           "mal_id": 10,
//           "type": "anime",
//           "name": "Fantasy",
//           "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         },
//         {
//           "mal_id": 9,
//           "type": "anime",
//           "name": "Ecchi",
//           "url": "https://myanimelist.net/anime/genre/9/Ecchi"
//         }
//       ],
//       "explicit_genres": [],
//       "themes": [
//         {
//           "mal_id": 62,
//           "type": "anime",
//           "name": "Isekai",
//           "url": "https://myanimelist.net/anime/genre/62/Isekai"
//         },
//         {
//           "mal_id": 72,
//           "type": "anime",
//           "name": "Reincarnation",
//           "url": "https://myanimelist.net/anime/genre/72/Reincarnation"
//         }
//       ],
//       "demographics": []
//     }
//   ],
//      airing: function () {
//         return this.data.filter(function(element, index) {
//         return element.airing === true
//         })
//      },
//     notAiring: function () {
//         return this.data.filter(function(element, index) {
//             return element.airing === false
//         })
//     },
// }

// console.log(slimeAnime.airing())

const footballs = {
    "league": {
                    "id": 39,
                    "name": "Premier League",
                    "country": "England",
                    "logo": "https://media.api-sports.io/football/leagues/39.png",
                    "flag": "https://media.api-sports.io/flags/gb.svg",
                    "season": 2022,
                    "standings": [
                        
                            {
                                "rank": 1,
                                "team": {
                                    "id": 50,
                                    "name": "Manchester City",
                                    "logo": "https://media.api-sports.io/football/teams/50.png"
                                },
                                "points": 89,
                                "goalsDiff": 61,
                                "group": "Premier League",
                                "form": "LDWWW",
                                "status": "same",
                                "description": "Promotion - Champions League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 28,
                                    "draw": 5,
                                    "lose": 5,
                                    "goals": {
                                        "for": 94,
                                        "against": 33
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 17,
                                    "draw": 1,
                                    "lose": 1,
                                    "goals": {
                                        "for": 60,
                                        "against": 17
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 11,
                                    "draw": 4,
                                    "lose": 4,
                                    "goals": {
                                        "for": 34,
                                        "against": 16
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 2,
                                "team": {
                                    "id": 42,
                                    "name": "Arsenal",
                                    "logo": "https://media.api-sports.io/football/teams/42.png"
                                },
                                "points": 84,
                                "goalsDiff": 45,
                                "group": "Premier League",
                                "form": "WLLWW",
                                "status": "same",
                                "description": "Promotion - Champions League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 26,
                                    "draw": 6,
                                    "lose": 6,
                                    "goals": {
                                        "for": 88,
                                        "against": 43
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 14,
                                    "draw": 3,
                                    "lose": 2,
                                    "goals": {
                                        "for": 53,
                                        "against": 25
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 12,
                                    "draw": 3,
                                    "lose": 4,
                                    "goals": {
                                        "for": 35,
                                        "against": 18
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 3,
                                "team": {
                                    "id": 33,
                                    "name": "Manchester United",
                                    "logo": "https://media.api-sports.io/football/teams/33.png"
                                },
                                "points": 75,
                                "goalsDiff": 15,
                                "group": "Premier League",
                                "form": "WWWWL",
                                "status": "same",
                                "description": "Promotion - Champions League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 23,
                                    "draw": 6,
                                    "lose": 9,
                                    "goals": {
                                        "for": 58,
                                        "against": 43
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 15,
                                    "draw": 3,
                                    "lose": 1,
                                    "goals": {
                                        "for": 36,
                                        "against": 10
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 3,
                                    "lose": 8,
                                    "goals": {
                                        "for": 22,
                                        "against": 33
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 4,
                                "team": {
                                    "id": 34,
                                    "name": "Newcastle",
                                    "logo": "https://media.api-sports.io/football/teams/34.png"
                                },
                                "points": 71,
                                "goalsDiff": 35,
                                "group": "Premier League",
                                "form": "DDWDL",
                                "status": "same",
                                "description": "Promotion - Champions League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 19,
                                    "draw": 14,
                                    "lose": 5,
                                    "goals": {
                                        "for": 68,
                                        "against": 33
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 11,
                                    "draw": 6,
                                    "lose": 2,
                                    "goals": {
                                        "for": 36,
                                        "against": 14
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 8,
                                    "lose": 3,
                                    "goals": {
                                        "for": 32,
                                        "against": 19
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 5,
                                "team": {
                                    "id": 40,
                                    "name": "Liverpool",
                                    "logo": "https://media.api-sports.io/football/teams/40.png"
                                },
                                "points": 67,
                                "goalsDiff": 28,
                                "group": "Premier League",
                                "form": "DDWWW",
                                "status": "same",
                                "description": "Promotion - Europa League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 19,
                                    "draw": 10,
                                    "lose": 9,
                                    "goals": {
                                        "for": 75,
                                        "against": 47
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 13,
                                    "draw": 5,
                                    "lose": 1,
                                    "goals": {
                                        "for": 46,
                                        "against": 17
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 5,
                                    "lose": 8,
                                    "goals": {
                                        "for": 29,
                                        "against": 30
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 6,
                                "team": {
                                    "id": 51,
                                    "name": "Brighton",
                                    "logo": "https://media.api-sports.io/football/teams/51.png"
                                },
                                "points": 62,
                                "goalsDiff": 19,
                                "group": "Premier League",
                                "form": "LDWLW",
                                "status": "same",
                                "description": "Promotion - Europa League (Group Stage: )",
                                "all": {
                                    "played": 38,
                                    "win": 18,
                                    "draw": 8,
                                    "lose": 12,
                                    "goals": {
                                        "for": 72,
                                        "against": 53
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 10,
                                    "draw": 4,
                                    "lose": 5,
                                    "goals": {
                                        "for": 37,
                                        "against": 21
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 4,
                                    "lose": 7,
                                    "goals": {
                                        "for": 35,
                                        "against": 32
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 7,
                                "team": {
                                    "id": 66,
                                    "name": "Aston Villa",
                                    "logo": "https://media.api-sports.io/football/teams/66.png"
                                },
                                "points": 61,
                                "goalsDiff": 5,
                                "group": "Premier League",
                                "form": "WDWLL",
                                "status": "same",
                                "description": "Promotion - Europa Conference League (Qualification: )",
                                "all": {
                                    "played": 38,
                                    "win": 18,
                                    "draw": 7,
                                    "lose": 13,
                                    "goals": {
                                        "for": 51,
                                        "against": 46
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 12,
                                    "draw": 2,
                                    "lose": 5,
                                    "goals": {
                                        "for": 33,
                                        "against": 21
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 5,
                                    "lose": 8,
                                    "goals": {
                                        "for": 18,
                                        "against": 25
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 8,
                                "team": {
                                    "id": 47,
                                    "name": "Tottenham",
                                    "logo": "https://media.api-sports.io/football/teams/47.png"
                                },
                                "points": 60,
                                "goalsDiff": 7,
                                "group": "Premier League",
                                "form": "WLLWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 18,
                                    "draw": 6,
                                    "lose": 14,
                                    "goals": {
                                        "for": 70,
                                        "against": 63
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 12,
                                    "draw": 1,
                                    "lose": 6,
                                    "goals": {
                                        "for": 37,
                                        "against": 25
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 5,
                                    "lose": 8,
                                    "goals": {
                                        "for": 33,
                                        "against": 38
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 9,
                                "team": {
                                    "id": 55,
                                    "name": "Brentford",
                                    "logo": "https://media.api-sports.io/football/teams/55.png"
                                },
                                "points": 59,
                                "goalsDiff": 12,
                                "group": "Premier League",
                                "form": "WWWLW",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 15,
                                    "draw": 14,
                                    "lose": 9,
                                    "goals": {
                                        "for": 58,
                                        "against": 46
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 10,
                                    "draw": 7,
                                    "lose": 2,
                                    "goals": {
                                        "for": 35,
                                        "against": 18
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 7,
                                    "lose": 7,
                                    "goals": {
                                        "for": 23,
                                        "against": 28
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 10,
                                "team": {
                                    "id": 36,
                                    "name": "Fulham",
                                    "logo": "https://media.api-sports.io/football/teams/36.png"
                                },
                                "points": 52,
                                "goalsDiff": 2,
                                "group": "Premier League",
                                "form": "LDWWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 15,
                                    "draw": 7,
                                    "lose": 16,
                                    "goals": {
                                        "for": 55,
                                        "against": 53
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 5,
                                    "lose": 6,
                                    "goals": {
                                        "for": 31,
                                        "against": 29
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 7,
                                    "draw": 2,
                                    "lose": 10,
                                    "goals": {
                                        "for": 24,
                                        "against": 24
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 11,
                                "team": {
                                    "id": 52,
                                    "name": "Crystal Palace",
                                    "logo": "https://media.api-sports.io/football/teams/52.png"
                                },
                                "points": 45,
                                "goalsDiff": -9,
                                "group": "Premier League",
                                "form": "DDWLW",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 12,
                                    "lose": 15,
                                    "goals": {
                                        "for": 40,
                                        "against": 49
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 7,
                                    "draw": 7,
                                    "lose": 5,
                                    "goals": {
                                        "for": 21,
                                        "against": 23
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 4,
                                    "draw": 5,
                                    "lose": 10,
                                    "goals": {
                                        "for": 19,
                                        "against": 26
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 12,
                                "team": {
                                    "id": 49,
                                    "name": "Chelsea",
                                    "logo": "https://media.api-sports.io/football/teams/49.png"
                                },
                                "points": 44,
                                "goalsDiff": -9,
                                "group": "Premier League",
                                "form": "DLLDW",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 11,
                                    "lose": 16,
                                    "goals": {
                                        "for": 38,
                                        "against": 47
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 7,
                                    "lose": 6,
                                    "goals": {
                                        "for": 20,
                                        "against": 19
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 4,
                                    "lose": 10,
                                    "goals": {
                                        "for": 18,
                                        "against": 28
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 13,
                                "team": {
                                    "id": 39,
                                    "name": "Wolves",
                                    "logo": "https://media.api-sports.io/football/teams/39.png"
                                },
                                "points": 41,
                                "goalsDiff": -27,
                                "group": "Premier League",
                                "form": "LDLWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 8,
                                    "lose": 19,
                                    "goals": {
                                        "for": 31,
                                        "against": 58
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 9,
                                    "draw": 3,
                                    "lose": 7,
                                    "goals": {
                                        "for": 19,
                                        "against": 20
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 2,
                                    "draw": 5,
                                    "lose": 12,
                                    "goals": {
                                        "for": 12,
                                        "against": 38
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 14,
                                "team": {
                                    "id": 48,
                                    "name": "West Ham",
                                    "logo": "https://media.api-sports.io/football/teams/48.png"
                                },
                                "points": 40,
                                "goalsDiff": -13,
                                "group": "Premier League",
                                "form": "LWLWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 7,
                                    "lose": 20,
                                    "goals": {
                                        "for": 42,
                                        "against": 55
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 4,
                                    "lose": 7,
                                    "goals": {
                                        "for": 26,
                                        "against": 24
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 3,
                                    "draw": 3,
                                    "lose": 13,
                                    "goals": {
                                        "for": 16,
                                        "against": 31
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 15,
                                "team": {
                                    "id": 35,
                                    "name": "Bournemouth",
                                    "logo": "https://media.api-sports.io/football/teams/35.png"
                                },
                                "points": 39,
                                "goalsDiff": -34,
                                "group": "Premier League",
                                "form": "LLLLW",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 11,
                                    "draw": 6,
                                    "lose": 21,
                                    "goals": {
                                        "for": 37,
                                        "against": 71
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 4,
                                    "lose": 9,
                                    "goals": {
                                        "for": 20,
                                        "against": 28
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 2,
                                    "lose": 12,
                                    "goals": {
                                        "for": 17,
                                        "against": 43
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 16,
                                "team": {
                                    "id": 65,
                                    "name": "Nottingham Forest",
                                    "logo": "https://media.api-sports.io/football/teams/65.png"
                                },
                                "points": 38,
                                "goalsDiff": -30,
                                "group": "Premier League",
                                "form": "DWDWL",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 9,
                                    "draw": 11,
                                    "lose": 18,
                                    "goals": {
                                        "for": 38,
                                        "against": 68
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 8,
                                    "draw": 6,
                                    "lose": 5,
                                    "goals": {
                                        "for": 27,
                                        "against": 24
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 1,
                                    "draw": 5,
                                    "lose": 13,
                                    "goals": {
                                        "for": 11,
                                        "against": 44
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 17,
                                "team": {
                                    "id": 45,
                                    "name": "Everton",
                                    "logo": "https://media.api-sports.io/football/teams/45.png"
                                },
                                "points": 36,
                                "goalsDiff": -23,
                                "group": "Premier League",
                                "form": "WDLWD",
                                "status": "same",
                                "description": null,
                                "all": {
                                    "played": 38,
                                    "win": 8,
                                    "draw": 12,
                                    "lose": 18,
                                    "goals": {
                                        "for": 34,
                                        "against": 57
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 6,
                                    "draw": 3,
                                    "lose": 10,
                                    "goals": {
                                        "for": 16,
                                        "against": 27
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 2,
                                    "draw": 9,
                                    "lose": 8,
                                    "goals": {
                                        "for": 18,
                                        "against": 30
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 18,
                                "team": {
                                    "id": 46,
                                    "name": "Leicester",
                                    "logo": "https://media.api-sports.io/football/teams/46.png"
                                },
                                "points": 34,
                                "goalsDiff": -17,
                                "group": "Premier League",
                                "form": "WDLLD",
                                "status": "same",
                                "description": "Relegation - Championship",
                                "all": {
                                    "played": 38,
                                    "win": 9,
                                    "draw": 7,
                                    "lose": 22,
                                    "goals": {
                                        "for": 51,
                                        "against": 68
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 4,
                                    "lose": 10,
                                    "goals": {
                                        "for": 23,
                                        "against": 27
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 4,
                                    "draw": 3,
                                    "lose": 12,
                                    "goals": {
                                        "for": 28,
                                        "against": 41
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 19,
                                "team": {
                                    "id": 63,
                                    "name": "Leeds",
                                    "logo": "https://media.api-sports.io/football/teams/63.png"
                                },
                                "points": 31,
                                "goalsDiff": -30,
                                "group": "Premier League",
                                "form": "LLDLL",
                                "status": "same",
                                "description": "Relegation - Championship",
                                "all": {
                                    "played": 38,
                                    "win": 7,
                                    "draw": 10,
                                    "lose": 21,
                                    "goals": {
                                        "for": 48,
                                        "against": 78
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 5,
                                    "draw": 7,
                                    "lose": 7,
                                    "goals": {
                                        "for": 26,
                                        "against": 37
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 2,
                                    "draw": 3,
                                    "lose": 14,
                                    "goals": {
                                        "for": 22,
                                        "against": 41
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            },
                            {
                                "rank": 20,
                                "team": {
                                    "id": 41,
                                    "name": "Southampton",
                                    "logo": "https://media.api-sports.io/football/teams/41.png"
                                },
                                "points": 25,
                                "goalsDiff": -37,
                                "group": "Premier League",
                                "form": "DLLLL",
                                "status": "same",
                                "description": "Relegation - Championship",
                                "all": {
                                    "played": 38,
                                    "win": 6,
                                    "draw": 7,
                                    "lose": 25,
                                    "goals": {
                                        "for": 36,
                                        "against": 73
                                    }
                                },
                                "home": {
                                    "played": 19,
                                    "win": 2,
                                    "draw": 5,
                                    "lose": 12,
                                    "goals": {
                                        "for": 19,
                                        "against": 37
                                    }
                                },
                                "away": {
                                    "played": 19,
                                    "win": 4,
                                    "draw": 2,
                                    "lose": 13,
                                    "goals": {
                                        "for": 17,
                                        "against": 36
                                    }
                                },
                                "update": "2023-05-28T00:00:00+00:00"
                            }
                           ]
                },
                champion: function () {
                            return this.league.standings.filter(function(element, index) {
                             return element.rank === 1 
                            })
                        },
                topFour: function () {
                        return this.league.standings.filter(function(element, index) {
                            return element.rank < 5
                        })
                    },
                goHome: function () {
                    return this.league.standings.filter(function(element, index) {
                        return element.rank > 17
                    })
                },
                unlike: function () {
                    return this.league.standings.filter(function(element, index) {
                        return element.rank === 3
                    })
                }
             }
    
    console.log(footballs.goHome())
    