// Local SEO landing pages. Internal links use the {L} token = /<lang>.
export const landings: Record<string, any> = {
  'ha-giang-loop-tour': {
    en: {
      seoTitle: 'Ha Giang Loop Tour 2026 — Guided by Local Riders | Tien Tour',
      seoDesc: 'Book a Ha Giang Loop tour with a trusted 100% local team. 3–5 day guided motorbike tours, easy rider or self-drive, homestays, small groups. 5.0★. Book direct.',
      eyebrow: 'Ha Giang Loop Tour',
      h1: 'The Ha Giang Loop tour, guided by local riders',
      intro: 'The <strong>Ha Giang Loop</strong> is northern Vietnam’s most spectacular motorbike journey — a 3 to 5 day ride through limestone mountains, terraced valleys and ethnic-minority villages. We run <strong>guided Ha Giang Loop tours</strong> with a 100% local team, so you get the real story behind every pass.',
      sections: [
        { id:'what', h:'What is the Ha Giang Loop?', html:'<p>The Ha Giang Loop is a roughly 350&nbsp;km circular route through Vietnam’s far north, near the Chinese border. It climbs some of the country’s highest passes and drops into deep river gorges.</p><p>The highlights are the legendary <strong>Ma Pi Leng Pass</strong>, a boat on the turquoise <strong>Nho Que river</strong>, the <strong>Dong Van karst plateau</strong>, and nights in <strong>homestays</strong> with Hmong, Tay and Dao families.</p>' },
        { id:'included', h:'What’s included in our Ha Giang Loop tours', html:'<ul><li>A local rider/guide (easy rider) or a well-maintained bike (self-drive)</li><li>Homestay nights with local families</li><li>Meals on tour, fuel, permits and insurance during the tour</li></ul><p>Not included: transport to Ha Giang, personal travel insurance and drinks. See all <a href="{L}/tours">Ha Giang Loop tours and prices</a>.</p>' },
        { id:'easy-vs-self', h:'Easy rider or self-drive?', html:'<p>If you don’t hold a motorbike licence or simply want to enjoy the views, choose an <a href="{L}/ha-giang-easy-rider">easy rider tour</a> — a local pilot drives and you ride pillion. Experienced riders can pick <a href="{L}/ha-giang-motorbike-rental">self-drive motorbike rental</a> and ride in convoy with our guides.</p>' },
        { id:'why-local', h:'Why book with a local team', html:'<p>We were born and raised in Ha Giang. That means real homestays (not hotels), honest safety advice, and the flexibility to change plans with the weather. Small groups — maximum 6 riders per guide.</p>' },
      ],
      faq: [
        { q:'How many days do you need for the Ha Giang Loop?', a:'Three days covers the classic highlights; 4–5 days let you reach the quieter far-north border and ride at a relaxed pace.' },
        { q:'How much does a Ha Giang Loop tour cost?', a:'Our guided tours start from $220 per person. Use the <a href="{L}/book">live quote</a> to price your exact trip.' },
        { q:'Do I need a licence for the Ha Giang Loop?', a:'Not with the easy-rider option — a local pilot drives. To self-drive legally you need a valid motorbike licence.' },
        { q:'When is the best time to ride?', a:'September–November and March–May offer the clearest roads and best scenery. Read our <a href="{L}/guide/best-time-to-visit-ha-giang">best time to visit guide</a>.' },
      ],
      related: [ {label:'All tours', path:'/tours'}, {label:'Easy rider', path:'/ha-giang-easy-rider'}, {label:'Motorbike rental', path:'/ha-giang-motorbike-rental'}, {label:'Travel guide', path:'/guide'} ],
    },
    fr: {
      seoTitle: 'Boucle de Ha Giang — circuit moto avec pilotes locaux 2026 | Tien Tour',
      seoDesc: 'Réservez un circuit de la boucle de Ha Giang avec une équipe 100% locale. Tours moto guidés 3–5 jours, easy rider ou self-drive, chez l’habitant, petits groupes. 5,0★.',
      eyebrow: 'Circuit boucle de Ha Giang',
      h1: 'La boucle de Ha Giang à moto, guidée par des pilotes locaux',
      intro: 'La <strong>boucle de Ha Giang</strong> est le plus beau voyage à moto du nord Vietnam — 3 à 5 jours à travers montagnes calcaires, rizières en terrasses et villages des minorités. Nous opérons des <strong>circuits guidés</strong> avec une équipe 100% locale.',
      sections: [
        { id:'what', h:'Qu’est-ce que la boucle de Ha Giang ?', html:'<p>La boucle de Ha Giang est un itinéraire circulaire d’environ 350&nbsp;km dans l’extrême nord du Vietnam, près de la frontière chinoise. Elle grimpe certains des plus hauts cols du pays.</p><p>Les temps forts : le légendaire <strong>col de Ma Pi Leng</strong>, un bateau sur la rivière turquoise <strong>Nho Què</strong>, le <strong>plateau karstique de Dong Van</strong> et les nuits <strong>chez l’habitant</strong> avec les familles Hmong, Tay et Dao.</p>' },
        { id:'included', h:'Ce qui est inclus dans nos circuits', html:'<ul><li>Un pilote/guide local (easy rider) ou une moto bien entretenue (self-drive)</li><li>Les nuits chez l’habitant</li><li>Les repas pendant le tour, l’essence, les permis et l’assurance pendant le tour</li></ul><p>Non inclus : le transport jusqu’à Ha Giang, l’assurance voyage et les boissons. Voir tous nos <a href="{L}/tours">circuits et tarifs</a>.</p>' },
        { id:'easy-vs-self', h:'Easy rider ou self-drive ?', html:'<p>Sans permis moto ou pour profiter des paysages, choisissez un <a href="{L}/ha-giang-easy-rider">tour easy rider</a> — un pilote local conduit, vous êtes passager. Les pilotes expérimentés peuvent opter pour la <a href="{L}/ha-giang-motorbike-rental">location de moto</a> et rouler en convoi avec nos guides.</p>' },
        { id:'why-local', h:'Pourquoi réserver avec une équipe locale', html:'<p>Nous sommes nés à Ha Giang. Cela veut dire de vrais homestays (pas des hôtels), des conseils de sécurité honnêtes et la souplesse de s’adapter à la météo. Petits groupes — maximum 6 motos par guide.</p>' },
      ],
      faq: [
        { q:'Combien de jours pour la boucle de Ha Giang ?', a:'Trois jours couvrent les incontournables ; 4–5 jours permettent d’atteindre le grand nord plus calme, à un rythme détendu.' },
        { q:'Combien coûte un circuit de la boucle de Ha Giang ?', a:'Nos circuits guidés démarrent à 220 $ par personne. Utilisez le <a href="{L}/book">devis en direct</a> pour chiffrer votre voyage.' },
        { q:'Faut-il un permis pour la boucle de Ha Giang ?', a:'Pas avec l’option easy rider — un pilote local conduit. Pour conduire vous-même, un permis moto valide est requis.' },
        { q:'Quelle est la meilleure période ?', a:'Septembre–novembre et mars–mai offrent les routes les plus dégagées. Lisez notre <a href="{L}/guide/best-time-to-visit-ha-giang">guide des meilleures périodes</a>.' },
      ],
      related: [ {label:'Tous les circuits', path:'/tours'}, {label:'Easy rider', path:'/ha-giang-easy-rider'}, {label:'Location de moto', path:'/ha-giang-motorbike-rental'}, {label:'Guide', path:'/guide'} ],
    },
    vi: {
      seoTitle: 'Tour cung đường Hà Giang 2026 — cùng người lái bản địa | Tien Tour',
      seoDesc: 'Đặt tour cung đường Hà Giang cùng đội ngũ 100% địa phương. Tour xe máy 3–5 ngày, easy rider hoặc tự lái, homestay, nhóm nhỏ. 5,0★.',
      eyebrow: 'Tour cung đường Hà Giang',
      h1: 'Tour cung đường Hà Giang, dẫn đường bởi người bản địa',
      intro: '<strong>Cung đường Hà Giang</strong> là hành trình xe máy ngoạn mục nhất miền Bắc Việt Nam — 3 đến 5 ngày qua núi đá vôi, ruộng bậc thang và các bản làng dân tộc. Chúng tôi tổ chức <strong>tour có hướng dẫn</strong> với đội ngũ 100% địa phương.',
      sections: [
        { id:'what', h:'Cung đường Hà Giang là gì?', html:'<p>Cung đường Hà Giang là tuyến đường vòng khoảng 350&nbsp;km ở cực Bắc Việt Nam, gần biên giới Trung Quốc, vượt qua những con đèo cao nhất nước.</p><p>Điểm nhấn: <strong>đèo Mã Pí Lèng</strong> huyền thoại, thuyền trên sông <strong>Nho Quế</strong> xanh ngọc, <strong>cao nguyên đá Đồng Văn</strong> và những đêm <strong>homestay</strong> cùng gia đình người Mông, Tày, Dao.</p>' },
        { id:'included', h:'Tour bao gồm những gì', html:'<ul><li>Người lái/hướng dẫn địa phương (easy rider) hoặc xe được bảo dưỡng kỹ (tự lái)</li><li>Các đêm homestay</li><li>Bữa ăn trong tour, xăng, giấy phép và bảo hiểm trong tour</li></ul><p>Không bao gồm: di chuyển đến Hà Giang, bảo hiểm du lịch và đồ uống. Xem tất cả <a href="{L}/tours">tour và giá</a>.</p>' },
        { id:'easy-vs-self', h:'Easy rider hay tự lái?', html:'<p>Nếu chưa có bằng lái hoặc muốn tận hưởng cảnh, hãy chọn <a href="{L}/ha-giang-easy-rider">tour easy rider</a> — người lái địa phương cầm lái, bạn ngồi sau. Người có kinh nghiệm có thể chọn <a href="{L}/ha-giang-motorbike-rental">thuê xe tự lái</a>.</p>' },
        { id:'why-local', h:'Vì sao nên đặt với đội địa phương', html:'<p>Chúng tôi sinh ra và lớn lên ở Hà Giang. Điều đó có nghĩa là homestay thực sự, lời khuyên an toàn trung thực và sự linh hoạt theo thời tiết. Nhóm nhỏ — tối đa 6 xe mỗi hướng dẫn viên.</p>' },
      ],
      faq: [
        { q:'Cần bao nhiêu ngày cho cung đường Hà Giang?', a:'Ba ngày đủ cho các điểm kinh điển; 4–5 ngày cho phép đến vùng biên giới cực Bắc yên tĩnh hơn.' },
        { q:'Tour cung đường Hà Giang giá bao nhiêu?', a:'Tour có hướng dẫn từ 220 $/người. Dùng <a href="{L}/book">báo giá trực tiếp</a> để tính chuyến của bạn.' },
        { q:'Có cần bằng lái không?', a:'Không, nếu chọn easy rider — người địa phương cầm lái. Để tự lái bạn cần bằng lái xe máy hợp lệ.' },
        { q:'Thời điểm nào đẹp nhất?', a:'Tháng 9–11 và tháng 3–5 đường đẹp nhất. Đọc <a href="{L}/guide/best-time-to-visit-ha-giang">cẩm nang thời điểm</a>.' },
      ],
      related: [ {label:'Tất cả tour', path:'/tours'}, {label:'Easy rider', path:'/ha-giang-easy-rider'}, {label:'Thuê xe máy', path:'/ha-giang-motorbike-rental'}, {label:'Cẩm nang', path:'/guide'} ],
    },
  },

  'ha-giang-easy-rider': {
    en: {
      seoTitle: 'Ha Giang Easy Rider — Ride Pillion with a Local Pilot | Tien Tour',
      seoDesc: 'Ha Giang easy rider tours: an experienced local pilot drives, you enjoy the views. No licence needed. Small groups, homestays, 5.0★. Book direct.',
      eyebrow: 'Ha Giang Easy Rider',
      h1: 'Ha Giang easy rider — you enjoy, we drive',
      intro: 'An <strong>easy rider</strong> tour is the safest and most relaxed way to ride the Ha Giang Loop. An experienced local pilot drives; you sit back, take photos and soak in the mountains — <strong>no motorbike licence required</strong>.',
      sections: [
        { id:'what', h:'What is an easy rider tour?', html:'<p>You ride pillion behind a local guide who knows every bend, market and viewpoint. It’s ideal for first-timers, photographers, and anyone who wants the adventure without the stress of driving mountain passes.</p>' },
        { id:'why', h:'Why choose easy rider in Ha Giang', html:'<ul><li>No licence, no driving stress — just the views</li><li>Free hands for photos and video</li><li>Local storytelling: culture, food and history along the way</li><li>Safer on steep, wet or foggy passes</li></ul>' },
        { id:'price', h:'How much does it cost?', html:'<p>The easy rider option adds a fixed daily rate per person on top of the tour. Get your exact figure with the <a href="{L}/book">live quote</a>, or browse <a href="{L}/tours">all Ha Giang Loop tours</a>.</p>' },
      ],
      faq: [
        { q:'Is easy rider safe?', a:'Yes — our pilots are local, experienced and ride these roads year-round, with full-spec helmets and small groups.' },
        { q:'Can two people share one pilot?', a:'No — for safety each traveler rides with their own pilot. Group rates apply.' },
        { q:'Do I still see everything a self-driver sees?', a:'Yes, and often more — your pilot knows viewpoints and stops most visitors miss.' },
      ],
      related: [ {label:'Ha Giang Loop tour', path:'/ha-giang-loop-tour'}, {label:'Motorbike rental', path:'/ha-giang-motorbike-rental'}, {label:'All tours', path:'/tours'} ],
    },
    fr: {
      seoTitle: 'Easy rider Ha Giang — passager derrière un pilote local | Tien Tour',
      seoDesc: 'Tours easy rider à Ha Giang : un pilote local expérimenté conduit, vous profitez du paysage. Sans permis. Petits groupes, chez l’habitant, 5,0★.',
      eyebrow: 'Easy rider Ha Giang',
      h1: 'Easy rider Ha Giang — vous profitez, on conduit',
      intro: 'Le tour <strong>easy rider</strong> est la façon la plus sûre et détendue de faire la boucle de Ha Giang. Un pilote local expérimenté conduit ; vous photographiez et savourez les montagnes — <strong>aucun permis moto requis</strong>.',
      sections: [
        { id:'what', h:'Qu’est-ce qu’un tour easy rider ?', html:'<p>Vous êtes passager derrière un guide local qui connaît chaque virage, marché et point de vue. Idéal pour les débutants, les photographes et tous ceux qui veulent l’aventure sans le stress des cols.</p>' },
        { id:'why', h:'Pourquoi choisir l’easy rider à Ha Giang', html:'<ul><li>Sans permis, sans stress de conduite — juste les paysages</li><li>Les mains libres pour la photo et la vidéo</li><li>Un local qui raconte : culture, cuisine et histoire</li><li>Plus sûr sur les cols raides, mouillés ou dans le brouillard</li></ul>' },
        { id:'price', h:'Combien ça coûte ?', html:'<p>L’option easy rider ajoute un forfait journalier par personne au tour. Obtenez votre montant exact avec le <a href="{L}/book">devis en direct</a>, ou parcourez <a href="{L}/tours">tous les circuits</a>.</p>' },
      ],
      faq: [
        { q:'L’easy rider est-il sûr ?', a:'Oui — nos pilotes sont locaux, expérimentés et roulent ces routes toute l’année, avec casques complets et petits groupes.' },
        { q:'Deux personnes peuvent-elles partager un pilote ?', a:'Non — par sécurité, chaque voyageur roule avec son propre pilote. Des tarifs de groupe s’appliquent.' },
        { q:'Je vois autant qu’un conducteur ?', a:'Oui, et souvent plus — votre pilote connaît des points de vue et arrêts que la plupart des visiteurs manquent.' },
      ],
      related: [ {label:'Circuit boucle de Ha Giang', path:'/ha-giang-loop-tour'}, {label:'Location de moto', path:'/ha-giang-motorbike-rental'}, {label:'Tous les circuits', path:'/tours'} ],
    },
    vi: {
      seoTitle: 'Easy rider Hà Giang — ngồi sau người lái bản địa | Tien Tour',
      seoDesc: 'Tour easy rider Hà Giang: người lái địa phương giàu kinh nghiệm cầm lái, bạn tận hưởng cảnh. Không cần bằng lái. Nhóm nhỏ, homestay, 5,0★.',
      eyebrow: 'Easy rider Hà Giang',
      h1: 'Easy rider Hà Giang — bạn tận hưởng, chúng tôi cầm lái',
      intro: 'Tour <strong>easy rider</strong> là cách an toàn và thư giãn nhất để chinh phục cung đường Hà Giang. Người lái địa phương giàu kinh nghiệm cầm lái; bạn chụp ảnh và ngắm núi non — <strong>không cần bằng lái xe máy</strong>.',
      sections: [
        { id:'what', h:'Tour easy rider là gì?', html:'<p>Bạn ngồi sau một hướng dẫn viên địa phương thuộc từng khúc cua, phiên chợ và điểm ngắm cảnh. Lý tưởng cho người mới, người mê chụp ảnh và những ai muốn phiêu lưu mà không căng thẳng khi qua đèo.</p>' },
        { id:'why', h:'Vì sao chọn easy rider ở Hà Giang', html:'<ul><li>Không bằng lái, không căng thẳng — chỉ có cảnh đẹp</li><li>Rảnh tay để chụp ảnh, quay video</li><li>Người địa phương kể chuyện: văn hóa, ẩm thực, lịch sử</li><li>An toàn hơn trên đèo dốc, ướt hay sương mù</li></ul>' },
        { id:'price', h:'Chi phí bao nhiêu?', html:'<p>Lựa chọn easy rider cộng thêm một mức phí theo ngày mỗi người vào tour. Nhận con số chính xác với <a href="{L}/book">báo giá trực tiếp</a>, hoặc xem <a href="{L}/tours">tất cả tour</a>.</p>' },
      ],
      faq: [
        { q:'Easy rider có an toàn không?', a:'Có — người lái của chúng tôi là dân địa phương, giàu kinh nghiệm, chạy quanh năm, mũ bảo hiểm đạt chuẩn và nhóm nhỏ.' },
        { q:'Hai người đi chung một người lái được không?', a:'Không — vì an toàn, mỗi khách đi với một người lái riêng. Có giá theo nhóm.' },
        { q:'Tôi có thấy hết như người tự lái không?', a:'Có, thường là nhiều hơn — người lái biết những điểm ngắm và điểm dừng mà đa số du khách bỏ lỡ.' },
      ],
      related: [ {label:'Tour cung đường Hà Giang', path:'/ha-giang-loop-tour'}, {label:'Thuê xe máy', path:'/ha-giang-motorbike-rental'}, {label:'Tất cả tour', path:'/tours'} ],
    },
  },

  'ha-giang-motorbike-rental': {
    en: {
      seoTitle: 'Ha Giang Motorbike Rental — Well-Maintained Bikes | Tien Tour',
      seoDesc: 'Ha Giang motorbike rental for the Loop: reliable semi-automatic and manual bikes, helmets, route advice and support. Self-drive with local guides. Book direct.',
      eyebrow: 'Ha Giang Motorbike Rental',
      h1: 'Ha Giang motorbike rental for the Loop',
      intro: 'Prefer to drive yourself? We rent <strong>well-maintained motorbikes</strong> suited to the Ha Giang Loop, with helmets, route advice and roadside support — and you can ride in convoy with a local guide for extra safety.',
      sections: [
        { id:'bikes', h:'What bikes do we rent?', html:'<p>Reliable <strong>semi-automatic</strong> and <strong>manual</strong> bikes matched to the mountain terrain. Each rental includes a full-spec helmet; luggage straps and a second helmet are available.</p>' },
        { id:'who', h:'Who is self-drive for?', html:'<p>Self-drive suits <strong>experienced riders</strong> comfortable on steep, winding roads. If you’re unsure, our <a href="{L}/ha-giang-easy-rider">easy rider option</a> is safer. Legally, self-driving requires a valid motorbike licence.</p>' },
        { id:'support', h:'Rental with support', html:'<ul><li>Well-maintained, pre-checked bikes</li><li>Helmet included, route map and safety briefing</li><li>Option to ride in convoy with a local guide</li></ul><p>Get pricing on the <a href="{L}/book">booking page</a> or see <a href="{L}/tours">all tours</a>.</p>' },
      ],
      faq: [
        { q:'How much is motorbike rental in Ha Giang?', a:'Rental starts from about $10 per day depending on the bike. Get your exact price on the <a href="{L}/book">booking page</a>.' },
        { q:'Do I need a licence to rent?', a:'To ride legally you need a valid motorbike licence. Without one, choose the easy rider option.' },
        { q:'What if the bike breaks down?', a:'We provide roadside support and, on guided convoys, a mechanic-trained guide rides with the group.' },
      ],
      related: [ {label:'Easy rider', path:'/ha-giang-easy-rider'}, {label:'Ha Giang Loop tour', path:'/ha-giang-loop-tour'}, {label:'All tours', path:'/tours'} ],
    },
    fr: {
      seoTitle: 'Location de moto à Ha Giang — motos fiables | Tien Tour',
      seoDesc: 'Location de moto à Ha Giang pour la Boucle : motos semi-automatiques et manuelles fiables, casques, conseils d’itinéraire et assistance. Self-drive avec guides locaux.',
      eyebrow: 'Location de moto Ha Giang',
      h1: 'Location de moto à Ha Giang pour la Boucle',
      intro: 'Vous préférez conduire ? Nous louons des <strong>motos bien entretenues</strong> adaptées à la boucle de Ha Giang, avec casques, conseils d’itinéraire et assistance — et vous pouvez rouler en convoi avec un guide local.',
      sections: [
        { id:'bikes', h:'Quelles motos louons-nous ?', html:'<p>Des motos <strong>semi-automatiques</strong> et <strong>manuelles</strong> fiables, adaptées au terrain de montagne. Chaque location inclut un casque complet ; sangles à bagages et second casque disponibles.</p>' },
        { id:'who', h:'À qui s’adresse le self-drive ?', html:'<p>Le self-drive convient aux <strong>pilotes expérimentés</strong> à l’aise sur les routes sinueuses. En cas de doute, notre <a href="{L}/ha-giang-easy-rider">option easy rider</a> est plus sûre. Légalement, conduire soi-même requiert un permis moto valide.</p>' },
        { id:'support', h:'Une location avec assistance', html:'<ul><li>Motos vérifiées et bien entretenues</li><li>Casque inclus, carte d’itinéraire et briefing sécurité</li><li>Possibilité de rouler en convoi avec un guide local</li></ul><p>Tarifs sur la <a href="{L}/book">page de réservation</a> ou voir <a href="{L}/tours">tous les circuits</a>.</p>' },
      ],
      faq: [
        { q:'Combien coûte la location de moto à Ha Giang ?', a:'La location démarre à environ 10 $ par jour selon la moto. Obtenez votre prix exact sur la <a href="{L}/book">page de réservation</a>.' },
        { q:'Faut-il un permis pour louer ?', a:'Pour conduire légalement, un permis moto valide est nécessaire. Sinon, choisissez l’option easy rider.' },
        { q:'Et si la moto tombe en panne ?', a:'Nous assurons une assistance ; en convoi guidé, un guide formé à la mécanique roule avec le groupe.' },
      ],
      related: [ {label:'Easy rider', path:'/ha-giang-easy-rider'}, {label:'Circuit boucle de Ha Giang', path:'/ha-giang-loop-tour'}, {label:'Tous les circuits', path:'/tours'} ],
    },
    vi: {
      seoTitle: 'Thuê xe máy Hà Giang — xe bảo dưỡng kỹ | Tien Tour',
      seoDesc: 'Thuê xe máy Hà Giang cho cung đường: xe số tự động và xe côn đáng tin cậy, mũ bảo hiểm, tư vấn lộ trình và hỗ trợ. Tự lái cùng hướng dẫn viên địa phương.',
      eyebrow: 'Thuê xe máy Hà Giang',
      h1: 'Thuê xe máy Hà Giang cho cung đường',
      intro: 'Bạn thích tự lái? Chúng tôi cho thuê <strong>xe máy được bảo dưỡng kỹ</strong> phù hợp cung đường Hà Giang, kèm mũ bảo hiểm, tư vấn lộ trình và hỗ trợ dọc đường — và bạn có thể đi theo đoàn cùng hướng dẫn viên địa phương.',
      sections: [
        { id:'bikes', h:'Chúng tôi cho thuê loại xe nào?', html:'<p>Xe <strong>số tự động</strong> và <strong>xe côn</strong> đáng tin cậy, phù hợp địa hình núi. Mỗi lượt thuê kèm mũ bảo hiểm đạt chuẩn; có dây buộc hành lý và mũ thứ hai.</p>' },
        { id:'who', h:'Tự lái phù hợp với ai?', html:'<p>Tự lái phù hợp với <strong>người có kinh nghiệm</strong>, tự tin trên đường đèo quanh co. Nếu chưa chắc, <a href="{L}/ha-giang-easy-rider">easy rider</a> an toàn hơn. Về pháp lý, tự lái cần bằng lái xe máy hợp lệ.</p>' },
        { id:'support', h:'Thuê xe kèm hỗ trợ', html:'<ul><li>Xe được kiểm tra và bảo dưỡng kỹ</li><li>Kèm mũ bảo hiểm, bản đồ lộ trình và hướng dẫn an toàn</li><li>Có thể đi theo đoàn cùng hướng dẫn viên địa phương</li></ul><p>Xem giá tại <a href="{L}/book">trang đặt chỗ</a> hoặc xem <a href="{L}/tours">tất cả tour</a>.</p>' },
      ],
      faq: [
        { q:'Thuê xe máy ở Hà Giang giá bao nhiêu?', a:'Thuê xe từ khoảng 10 $/ngày tùy loại xe. Xem giá chính xác tại <a href="{L}/book">trang đặt chỗ</a>.' },
        { q:'Có cần bằng lái để thuê không?', a:'Để chạy hợp pháp bạn cần bằng lái xe máy hợp lệ. Nếu không, hãy chọn easy rider.' },
        { q:'Nếu xe hỏng thì sao?', a:'Chúng tôi hỗ trợ dọc đường; trong đoàn có hướng dẫn viên biết sửa xe đi cùng.' },
      ],
      related: [ {label:'Easy rider', path:'/ha-giang-easy-rider'}, {label:'Tour cung đường Hà Giang', path:'/ha-giang-loop-tour'}, {label:'Tất cả tour', path:'/tours'} ],
    },
  },
};
