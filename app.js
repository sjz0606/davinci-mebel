/* Davinci Mebel — concept site logic. Facts only from IG bio + post captions (@mebeldavinci). */
(() => {
'use strict';
const P = p => 'media/p/' + p + '.jpg';
const VP = p => 'media/vp/' + p + '.jpg';
const V = p => 'media/v/' + p + '.mp4';
const IG = 'mebeldavinci';
const TEL = '+998990200101';

/* ---------- i18n ---------- */
const T = {
  ru: {
    skip:'Перейти к моделям', brandSub:'мебель · Ташкент', navModels:'Модели', navSet:'Узнать цену', navClients:'У клиентов', navShowroom:'Шоурум',
    h1:'Спальни и мягкая мебель премиум-сегмента',
    lead:'Бренд с 10-летним опытом. Листайте вниз и идите по залу: в каждом проёме модель, которую можно увидеть вживую на Шота Руставели, 73.',
    roomBed:'Спальни', roomLiving:'Гостиная', roomShowroom:'Шоурум',
    hudOpen:'Смотреть модель', hudPrice:'Узнать цену', hallSkip:'Все модели списком', hudShowroom:'Как добраться', hudBook:'Записаться на визит',
    modelsH:'Модели в шоуруме', modelsP:'Названия, материалы и механизмы взяты из описаний бренда. Цену большинства моделей называют по запросу: она зависит от состава комплекта.',
    fAll:'Все', fBed:'Спальни', fLiving:'Гостиная и диваны', fClient:'Есть фото у клиента',
    craftH:'Из чего собраны модели', craftNote:'Только то, что бренд сам указывает в описаниях моделей.', craftAlt:'Резной декор шкафа модели Aurora',
    setH:'Соберите комплект и узнайте цену', setP:'Отметьте модель и предметы. Мы составим сообщение, а вы отправите его в Direct или позвоните.',
    fModel:'Модель', fItems:'Что входит', fExtra:'Дополнительно', optColor:'Нужен другой цвет или размер', optMeasure:'Хочу обсудить замер комнаты', optDelivery:'Интересует доставка и сборка',
    fName:'Имя', fPhone:'Телефон', fNote:'Комментарий', msgLabel:'Ваше сообщение', fWant:'Что хотите посмотреть', anyModel:'Пока не знаю, подскажите',
    clientsH:'Как это выглядит у клиентов', clientsP:'Видео и фото из квартир, куда бренд поставил мебель.',
    showH:'Приходите в шоурум', addrT:'Адрес', addr:'Ташкент, ул. Шота Руставели, 73', mapLink:'Открыть на карте', hoursT:'Время работы', phonesT:'Телефоны', catT:'Каталог и цены',
    visitH:'Записаться на визит', concept:'Концепт сайта · Lumagen', sheetVisit:'Посмотреть в шоуруме',
    call:'Позвонить', copy:'Скопировать', direct:'Написать в Direct', tg:'Каталог в Telegram',
    copied:'Текст скопирован', copiedOpen:'Текст скопирован, вставьте его в чат',
    openNow:'Сейчас открыто, до 19:00', closedNow:'Сейчас закрыто, откроемся в 10:00',
    today:'Сегодня', tomorrow:'Завтра', days:['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], months:['янв','фев','мар','апр','мая','июн','июл','авг','сен','окт','ноя','дек'],
    roomBedOne:'Спальня', roomLivingOne:'Гостиная', fMech:'Механизмы', fPaint:'Краска и лак', fMat:'Материалы', fSize:'Размеры', fSet:'Состав', fNoteF:'Особенности',
    priceAsk:'Цена по запросу', priceAskSmall:'Зависит от состава комплекта и размеров',
    priceRestart:'1250 $ (15 100 000 сум)', priceRestartSmall:'Цена из публикации 17.07.2026. Актуальную уточняйте в шоуруме.',
    srcNote:'Источник: описания публикаций Instagram @mebeldavinci',
    m_hello:'Здравствуйте!', m_want:'Хочу узнать цену на модель «{m}».', m_wantAny:'Хочу подобрать мебель и узнать цены.',
    m_items:'Состав: {i}.', m_color:'Нужен другой цвет или размер.', m_measure:'Хочу обсудить замер комнаты.', m_delivery:'Интересует доставка и сборка.',
    m_name:'Имя: {n}', m_phone:'Телефон: {p}', m_note:'Комментарий: {c}',
    v_text:'Хочу прийти в шоурум Davinci на Шота Руставели, 73: {d} в {t}.', v_model:'Хочу посмотреть: {m}.',
    it_bed:'кровать', it_wardrobe:'шкаф', it_vanity:'трюмо', it_nightstands:'тумбы', it_dresser:'комод', it_pouf:'пуф', it_mirror:'зеркало', it_sofa:'диван', it_armchairs:'кресла', it_table:'журнальный столик',
    hallClients:'фото и видео у клиентов', vClient:'у клиента',
  },
  uz: {
    skip:'Modellarga oʻtish', brandSub:'mebel · Toshkent', navModels:'Modellar', navSet:'Narxini bilish', navClients:'Mijozlarda', navShowroom:'Shourum',
    h1:'Premium segmentdagi yotoqxona va yumshoq mebellar',
    lead:'10 yillik tajribaga ega brend. Pastga aylantiring va zal boʻylab yuring: har bir ravoqda Shota Rustaveli, 73 dagi shourumda jonli koʻrish mumkin boʻlgan model.',
    roomBed:'Yotoqxonalar', roomLiving:'Mehmonxona', roomShowroom:'Shourum',
    hudOpen:'Modelni koʻrish', hudPrice:'Narxini bilish', hallSkip:'Barcha modellar roʻyxati', hudShowroom:'Qanday borish mumkin', hudBook:'Tashrifga yozilish',
    modelsH:'Shourumdagi modellar', modelsP:'Nomlar, materiallar va mexanizmlar brend tavsiflaridan olingan. Koʻp modellarning narxi soʻrov boʻyicha aytiladi: u komplekt tarkibiga bogʻliq.',
    fAll:'Hammasi', fBed:'Yotoqxonalar', fLiving:'Mehmonxona va divanlar', fClient:'Mijoz uyidagi surati bor',
    craftH:'Modellar nimadan yigʻilgan', craftNote:'Faqat brendning oʻzi model tavsiflarida koʻrsatgan maʼlumotlar.', craftAlt:'Aurora modeli shkafidagi oʻymakor bezak',
    setH:'Komplektni yigʻing va narxini biling', setP:'Model va buyumlarni belgilang. Biz xabar tuzib beramiz, siz uni Direct’ga yuborasiz yoki qoʻngʻiroq qilasiz.',
    fModel:'Model', fItems:'Tarkibi', fExtra:'Qoʻshimcha', optColor:'Boshqa rang yoki oʻlcham kerak', optMeasure:'Xona oʻlchovini muhokama qilmoqchiman', optDelivery:'Yetkazib berish va yigʻish qiziqtiradi',
    fName:'Ism', fPhone:'Telefon', fNote:'Izoh', msgLabel:'Sizning xabaringiz', fWant:'Nimani koʻrmoqchisiz', anyModel:'Hali bilmayman, maslahat bering',
    clientsH:'Mijozlar uyida qanday koʻrinadi', clientsP:'Brend mebel oʻrnatgan xonadonlardan video va suratlar.',
    showH:'Shourumga keling', addrT:'Manzil', addr:'Toshkent, Shota Rustaveli koʻchasi, 73', mapLink:'Xaritada ochish', hoursT:'Ish vaqti', phonesT:'Telefonlar', catT:'Katalog va narxlar',
    visitH:'Tashrifga yozilish', concept:'Sayt konsepti · Lumagen', sheetVisit:'Shourumda koʻrish',
    call:'Qoʻngʻiroq qilish', copy:'Nusxa olish', direct:'Direct’ga yozish', tg:'Telegram’dagi katalog',
    copied:'Matn nusxalandi', copiedOpen:'Matn nusxalandi, uni chatga joylang',
    openNow:'Hozir ochiq, 19:00 gacha', closedNow:'Hozir yopiq, 10:00 da ochiladi',
    today:'Bugun', tomorrow:'Ertaga', days:['Yak','Dush','Sesh','Chor','Pay','Jum','Shan'], months:['yan','fev','mar','apr','may','iyn','iyl','avg','sen','okt','noy','dek'],
    roomBedOne:'Yotoqxona', roomLivingOne:'Mehmonxona', fMech:'Mexanizmlar', fPaint:'Boʻyoq va lak', fMat:'Materiallar', fSize:'Oʻlchamlar', fSet:'Tarkibi', fNoteF:'Xususiyatlari',
    priceAsk:'Narxi soʻrov boʻyicha', priceAskSmall:'Komplekt tarkibi va oʻlchamlarga bogʻliq',
    priceRestart:'1250 $ (15 100 000 soʻm)', priceRestartSmall:'Narx 17.07.2026 dagi postdan. Amaldagi narxni shourumda aniqlang.',
    srcNote:'Manba: Instagram @mebeldavinci post tavsiflari',
    m_hello:'Assalomu alaykum!', m_want:'«{m}» modelining narxini bilmoqchiman.', m_wantAny:'Mebel tanlab, narxlarini bilmoqchiman.',
    m_items:'Tarkibi: {i}.', m_color:'Boshqa rang yoki oʻlcham kerak.', m_measure:'Xona oʻlchovini muhokama qilmoqchiman.', m_delivery:'Yetkazib berish va yigʻish qiziqtiradi.',
    m_name:'Ism: {n}', m_phone:'Telefon: {p}', m_note:'Izoh: {c}',
    v_text:'Shota Rustaveli, 73 dagi Davinci shourumiga kelmoqchiman: {d}, soat {t}.', v_model:'Koʻrmoqchiman: {m}.',
    it_bed:'karavot', it_wardrobe:'shkaf', it_vanity:'tryumo', it_nightstands:'tumbalar', it_dresser:'komod', it_pouf:'pufik', it_mirror:'oyna', it_sofa:'divan', it_armchairs:'kreslolar', it_table:'jurnal stoli',
    hallClients:'mijozlardagi foto va video', vClient:'mijoz uyida',
  }
};

/* ---------- Models (from captions + photos) ---------- */
// room: bed | living. mech/paint/mat: [ru, uz]
const HET = ['Hettich, Германия', 'Hettich, Germaniya'];
const BLUM = ['Blum, Австрия', 'Blum, Avstriya'];
const DE = ['немецкие механизмы', 'nemis mexanizmlari'];
const IT = ['Италия', 'Italiya'];
const BED_ITEMS = ['bed','wardrobe','vanity','nightstands','dresser','pouf','mirror'];
const LIV_ITEMS = ['sofa','armchairs','table','pouf'];
const MODELS = [
  { id:'graf', name:'Graf', room:'bed', client:true, mech:BLUM,
    note:['Есть в цвете Ivory: у клиента собрали 2 комплекта', 'Ivory rangida bor: mijoz uyiga 2 komplekt oʻrnatilgan'],
    cover:P('DdYTpo7DWt5_1'),
    media:[P('DdYTpo7DWt5_1'),P('DdYTpo7DWt5_0'),P('DdYTpo7DWt5_3'),P('DdYTpo7DWt5_4'),P('DdYTpo7DWt5_2'),P('DdYTpo7DWt5_5'),P('DZUJlBODZXl_2'),P('DZUJlBODZXl_4'),{v:V('DXwcPPHsDis'),p:VP('DXwcPPHsDis_5')},{v:V('Dac9vJkNcNm'),p:VP('Dac9vJkNcNm_5')}] },
  { id:'prag', name:'Prag', room:'bed', paint:IT, mech:HET,
    note:['Делали и по индивидуальному заказу', 'Buyurtma asosida ham tayyorlangan'],
    cover:P('DemJWqNCOvo_1'),
    media:[P('DemJWqNCOvo_1'),P('DemJWqNCOvo_0'),P('DemJWqNCOvo_2'),P('DemJWqNCOvo_4'),P('DemJWqNCOvo_3'),P('DemJWqNCOvo_5'),P('DXhF7CLDJ3j'),{v:V('DYJuGAGtIh3'),p:VP('DYJuGAGtIh3_5')}] },
  { id:'maximus', name:'Maximus', room:'bed', mech:HET,
    note:['Шкаф со стеклом и подсветкой, комод с выдвижными ящиками', 'Oynali va yoritgichli shkaf, tortmali komod'],
    cover:P('DdoGVNiDf_p_0'),
    media:[P('DdoGVNiDf_p_0'),P('DdoGVNiDf_p_1'),P('DdoGVNiDf_p_3'),P('DdoGVNiDf_p_4'),P('DdoGVNiDf_p_5'),{v:V('DXmHCCKjS_r'),p:VP('DXmHCCKjS_r_1')}] },
  { id:'bonito', name:'Bonito', room:'bed', paint:IT, mech:HET,
    note:['Изготавливали по заказу клиента', 'Mijoz buyurtmasi asosida tayyorlangan'],
    cover:P('DdEHb_VDYm6_1'),
    media:[P('DdEHb_VDYm6_1'),P('DdEHb_VDYm6_5'),P('DdEHb_VDYm6_2'),P('DdEHb_VDYm6_4'),P('Db8QmpajbMY_0'),P('Db8QmpajbMY_1'),P('Db8QmpajbMY_2'),P('Db8QmpajbMY_4'),P('Ddv97B8Nsv2'),{v:V('DdB2tEeIqtb'),p:VP('DdB2tEeIqtb_9')}] },
  { id:'aurora', name:'Aurora', room:'bed', client:true,
    mat:['МДФ в сочетании с массивом чинара', '100% MDF va chinor uygʻunligi'],
    note:['Резной декор на фасадах', 'Fasadlarda oʻymakor bezak'],
    cover:P('DZb9aW_DSah_0'),
    media:[P('DZb9aW_DSah_0'),P('DZb9aW_DSah_2'),P('DZb9aW_DSah_1'),P('DZb9aW_DSah_3'),P('DZb9aW_DSah_4'),P('DZb9aW_DSah_5'),{v:V('DZNDlS3tJJh'),p:VP('DZNDlS3tJJh_9')}] },
  { id:'restart', name:'Restart', room:'bed', price:true,
    set:['8 предметов', '8 ta predmet'],
    sizes:[['Шкаф','Shkaf','220 × 270 × 60'],['Трюмо','Tryumo','181 × 128 × 47'],['Пуф','Pufik','47 × 38 × 38'],['Тумба','Tumba','47,5 × 50 × 42'],['Кровать','Karavot','130 × 188 × 221'],['Честер','Chester','95 × 70 × 46,5'],['Зеркало в рост','Boʻy oynasi','181 × 56 × 36,5']],
    cover:P('Da41SpvDbwW_4'),
    media:[P('Da41SpvDbwW_4'),P('Da41SpvDbwW_3'),P('Da41SpvDbwW_5'),P('Da41SpvDbwW_0'),P('Da41SpvDbwW_1'),P('Da41SpvDbwW_2'),{v:V('Dau1EtXNjUK'),p:VP('Dau1EtXNjUK_9')}] },
  { id:'bella', name:'Bella', room:'bed', client:true, paint:IT, mech:HET,
    note:['Доводчики с гарантией 10 лет', 'Dovodchik mexanizmlariga 10 yil kafolat'],
    cover:P('DejprKINSB-'),
    media:[P('DejprKINSB-'),VP('DaIe8d3NiTu_1'),VP('DaIe8d3NiTu_5'),VP('DaIe8d3NiTu_9'),{v:V('DaIe8d3NiTu'),p:VP('DaIe8d3NiTu_1')},P('DYRljhHt9Ls')] },
  { id:'inter', name:'Inter', room:'bed', client:true, mech:HET,
    note:['Кровать с подъёмным механизмом', 'Karavot koʻtarish mexanizmi bilan'],
    cover:P('DX_8Ozts-Yo'),
    media:[P('DX_8Ozts-Yo'),{v:V('DbvTMQUNpyG'),p:VP('DbvTMQUNpyG_1')},P('DZKcnADNk8G')] },
  { id:'eyfel', name:'Eyfel', room:'bed', mech:HET,
    cover:VP('DZugKI6t23V_5'),
    media:[VP('DZugKI6t23V_5'),VP('DZugKI6t23V_1'),VP('DZugKI6t23V_9'),{v:V('DZugKI6t23V'),p:VP('DZugKI6t23V_1')},{v:V('Dbk6fgVNgUe'),p:VP('Dbk6fgVNgUe_1')}] },
  { id:'bodrum', name:'Bodrum', room:'bed', client:true, mech:DE,
    cover:P('DZSMnsKtIX8'),
    media:[P('DZSMnsKtIX8'),VP('DXcBYNtDPp__1'),VP('DXcBYNtDPp__5'),VP('DXcBYNtDPp__9'),{v:V('DXcBYNtDPp_'),p:VP('DXcBYNtDPp__1')},P('DYZXJXaN6s8')] },
  { id:'lincoln', name:'Lincoln', room:'bed', mech:HET,
    cover:P('Da0I6kltRz_'), media:[P('Da0I6kltRz_')] },
  { id:'milan', name:'Milan', room:'bed', paint:IT, mech:DE,
    cover:VP('DYec1T6tB11_5'), media:[VP('DYec1T6tB11_5'),VP('DYec1T6tB11_9'),{v:V('DYec1T6tB11'),p:VP('DYec1T6tB11_5')}] },
  { id:'hermes', name:'Hermes', room:'bed', paint:IT, mech:BLUM,
    cover:P('DY_6PK-Nqnx'), media:[P('DY_6PK-Nqnx')] },
  { id:'luna', name:'Luna', room:'living', client:true,
    note:['Диван, кресла и пуфы одним гарнитуром', 'Divan, kreslolar va pufiklar bitta garnitur'],
    cover:P('DdgUJX1DRNv_1'),
    media:[P('DdgUJX1DRNv_1'),P('DdgUJX1DRNv_0'),P('DdgUJX1DRNv_2'),P('DdgUJX1DRNv_3'),P('DdgUJX1DRNv_4'),P('DdgUJX1DRNv_5'),{v:V('DdWHMcoNtYn'),p:VP('DdWHMcoNtYn_5')}] },
  { id:'praga', name:'Praga', room:'living', client:true,
    note:['Диван, кресла и столик в классическом стиле', 'Klassik uslubdagi divan, kreslolar va stolcha'],
    cover:P('DZkNA7DNdCu'), media:[P('DZkNA7DNdCu')] },
  { id:'elegant', name:'Elegant', room:'living',
    mat:['Каркас из фанеры, ткань Турция и Польша, поролон Россия', 'Karkas fanera, mato Turkiya va Polsha, paralon Rossiya'],
    sizeLine:'340 × 250 см',
    note:['Цвет и размер можно изменить', 'Rangi va oʻlchamini oʻzgartirish mumkin'],
    cover:P('DXjrlfxDCud'), media:[{v:V('DXjrlfxDCud'),p:P('DXjrlfxDCud')}] },
];
const byId = Object.fromEntries(MODELS.map(m => [m.id, m]));

/* Hall bays: model id + 3 real images (center, left wall, right wall) */
const BAYS = [
  { id:'graf',    imgs:['DdYTpo7DWt5_1','DdYTpo7DWt5_0','DZUJlBODZXl_4'] },
  { id:'prag',    imgs:['DemJWqNCOvo_1','DemJWqNCOvo_4','DemJWqNCOvo_5'] },
  { id:'maximus', imgs:['DdoGVNiDf_p_0','DdoGVNiDf_p_1','DdoGVNiDf_p_4'] },
  { id:'bonito',  imgs:['DdEHb_VDYm6_1','Db8QmpajbMY_0','Db8QmpajbMY_4'] },
  { id:'aurora',  imgs:['DZb9aW_DSah_0','DZb9aW_DSah_2','DZb9aW_DSah_4'] },
  { id:'restart', imgs:['Da41SpvDbwW_4','Da41SpvDbwW_3','Da41SpvDbwW_5'] },
  { id:'luna',    imgs:['DdgUJX1DRNv_1','DdgUJX1DRNv_2','DdgUJX1DRNv_4'] },
  { id:'showroom',imgs:['DYUSTjOtbvb_9','DYUSTjOtbvb_5','DYUSTjOtbvb_9'], video:V('DYUSTjOtbvb') },
].map(b => ({ ...b, src: b.imgs.map(n => 'img/' + n + '.jpg') }));

const CLIENTS = [
  { v:V('DdWHMcoNtYn'), p:VP('DdWHMcoNtYn_5'), m:'Luna', t:['Мягкая гостиная у клиента', 'Mijoz uyidagi yumshoq mehmonxona'] },
  { v:V('DZNDlS3tJJh'), p:VP('DZNDlS3tJJh_9'), m:'Aurora', t:['Комплект для спальни у клиента', 'Mijoz uyidagi yotoqxona komplekti'] },
  { v:V('DecBt2-t3uN'), p:VP('DecBt2-t3uN_9'), m:'Под ключ / Kalit topshirish', t:['Квартира клиента, обставленная под ключ', 'Mijoz xonadoni kalit topshirish asosida jihozlandi'] },
  { i:P('DZUJlBODZXl_2'), m:'Graf', t:['Два комплекта в цвете Ivory', 'Ivory rangidagi ikki komplekt'] },
  { v:V('DVitjjdDEx1'), p:VP('DVitjjdDEx1_5'), m:'Graf + Prag', t:['Установили по индивидуальному заказу', 'Buyurtma asosida oʻrnatildi'] },
  { i:P('DZkNA7DNdCu'), m:'Praga', t:['Гостиная в классическом стиле', 'Klassik uslubdagi mehmonxona'] },
];

const FACTS = [
  { t:['Краска и лак','Boʻyoq va lak'], d:['Итальянские', 'Italiya'], s:['Prag, Bella, Bonito, Milan, Hermes','Prag, Bella, Bonito, Milan, Hermes'] },
  { t:['Механизмы','Mexanizmlar'], d:['Hettich (Германия) или Blum (Австрия)', 'Hettich (Germaniya) yoki Blum (Avstriya)'], s:['Blum: Graf и Hermes. Hettich: Prag, Bella, Bonito, Maximus, Inter, Eyfel, Lincoln','Blum: Graf va Hermes. Hettich: Prag, Bella, Bonito, Maximus, Inter, Eyfel, Lincoln'] },
  { t:['Доводчики','Dovodchiklar'], d:['Гарантия 10 лет', '10 yil kafolat'], s:['Из описания модели Bella','Bella modeli tavsifidan'] },
  { t:['Плиты','Plitalar'], d:['В моделях не используют HDF', 'Modellarda HDF ishlatilmaydi'], s:['Из публикации бренда о модели Graf','Brendning Graf modeli haqidagi postidan'] },
  { t:['Дерево','Yogʻoch'], d:['МДФ в сочетании с чинаром', 'MDF va chinor uygʻunligi'], s:['Модель Aurora','Aurora modeli'] },
  { t:['Мягкая мебель','Yumshoq mebel'], d:['Каркас из фанеры, ткань Турция и Польша, поролон Россия', 'Karkas fanera, mato Turkiya va Polsha, paralon Rossiya'], s:['Диван Elegant, 340 × 250 см','Elegant divani, 340 × 250 sm'] },
  { t:['На заказ','Buyurtma'], d:['Цвет и размер можно изменить', 'Rang va oʻlchamni oʻzgartirish mumkin'], s:['Elegant; Bonito и Prag делали по заказу клиентов','Elegant; Bonito va Prag mijoz buyurtmasi bilan tayyorlangan'] },
];

/* ---------- state / helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const qs = new URLSearchParams(location.search);
let lang = (qs.get('lang') || localStorage.getItem('dv-lang') || 'ru').toLowerCase();
if (!T[lang]) lang = 'ru';
const t = k => T[lang][k] ?? T.ru[k] ?? k;
const L = arr => Array.isArray(arr) ? arr[lang === 'uz' ? 1 : 0] : arr;
const fmt = (s, o) => s.replace(/\{(\w)\}/g, (_, k) => o[k] ?? '');
const roomName = m => m.room === 'living' ? t('roomLivingOne') : t('roomBedOne');

let toastTimer;
function toast(msg) { const el = $('#toast'); el.textContent = msg; el.classList.add('on'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('on'), 2600); }
async function copyText(txt) {
  try { await navigator.clipboard.writeText(txt); return true; }
  catch (_) { const ta = document.createElement('textarea'); ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); let ok = false; try { ok = document.execCommand('copy'); } catch (e) {} ta.remove(); return ok; }
}

/* action buttons for composed message */
function renderActs(box, getMsg) {
  box.innerHTML = '';
  const mk = (cls, label, href, fn) => { const a = document.createElement(href ? 'a' : 'button'); a.className = 'btn ' + cls; a.textContent = label; if (href) { a.href = href; if (href.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; } } else a.type = 'button'; if (fn) a.addEventListener('click', fn); box.appendChild(a); return a; };
  mk('btn--solid', t('direct'), 'https://ig.me/m/' + IG, async () => { await copyText(getMsg()); toast(t('copiedOpen')); });
  mk(box.closest('.msg') ? 'btn--line' : 'btn--dark', t('call'), 'tel:' + TEL);
  mk('btn--line', t('copy'), null, async () => { const ok = await copyText(getMsg()); toast(ok ? t('copied') : getMsg()); });
  mk('btn--line', t('tg'), 'https://t.me/davincimebel', async () => { await copyText(getMsg()); toast(t('copiedOpen')); });
}

/* ---------- static i18n ---------- */
function applyStatic() {
  document.documentElement.lang = lang === 'uz' ? 'uz' : 'ru';
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('[data-alt]').forEach(el => { el.alt = t(el.dataset.alt); });
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  document.title = lang === 'uz' ? 'Davinci Mebel — mebel shourumi, Shota Rustaveli 73, Toshkent' : 'Davinci Mebel — шоурум мебели, Шота Руставели 73, Ташкент';
}

/* ---------- catalog ---------- */
function renderGrid() {
  const g = $('#grid'); g.innerHTML = '';
  MODELS.forEach(m => {
    const li = document.createElement('li'); li.dataset.room = m.room; li.dataset.client = m.client ? '1' : '';
    const mech = m.mech ? L(m.mech) : (m.mat ? L(m.mat).split(',')[0] : (m.sizeLine || ''));
    li.innerHTML = `<button type="button" class="card" data-open="${m.id}">
      <span class="card__img tilt" data-tilt><img src="${m.cover}" alt="${m.name}, ${roomName(m).toLowerCase()}" loading="lazy">${m.client ? `<span class="card__tag">${t('vClient')}</span>` : ''}<span class="tilt__light" aria-hidden="true"></span></span>
      <span class="card__name">${m.name.toUpperCase()}</span>
      <span class="card__meta">${roomName(m)}${mech ? '. ' + mech : ''}</span></button>`;
    g.appendChild(li);
  });
  applyFilter(); bindTilt(g);
}
let filter = 'all';
function applyFilter() {
  $$('#grid li').forEach(li => { li.hidden = !(filter === 'all' || (filter === 'client' ? li.dataset.client : li.dataset.room === filter)); });
  $$('.filters button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.f === filter)));
}
$$('.filters button').forEach(b => b.addEventListener('click', () => { filter = b.dataset.f; applyFilter(); }));

/* tilt with light (pointer only; touch devices just see the photo) */
function bindTilt(root = document) {
  if (RM || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  $$('[data-tilt]', root).forEach(el => {
    if (el._tilt) return; el._tilt = 1;
    el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--ry', ((x - .5) * 9).toFixed(2) + 'deg'); el.style.setProperty('--rx', ((.5 - y) * 7).toFixed(2) + 'deg');
      el.style.setProperty('--lx', (x * 100).toFixed(1) + '%'); el.style.setProperty('--ly', (y * 100).toFixed(1) + '%'); el.style.setProperty('--lo', '1'); });
    el.addEventListener('pointerleave', () => { el.style.setProperty('--ry', '0deg'); el.style.setProperty('--rx', '0deg'); el.style.setProperty('--lo', '0'); });
  });
}

/* ---------- model sheet ---------- */
const sheet = $('#sheet'); let sheetModel = null;
function openSheet(id) {
  const m = byId[id]; if (!m) return; sheetModel = m;
  const gal = $('#sheetGal'); gal.innerHTML = '';
  m.media.forEach((it, i) => {
    if (typeof it === 'string') { const im = new Image(); im.src = it; im.alt = `${m.name}, ${i + 1}`; im.loading = i ? 'lazy' : 'eager'; gal.appendChild(im); }
    else { const v = document.createElement('video'); v.muted = true; v.playsInline = true; v.loop = true; v.preload = 'none'; v.poster = it.p; v.src = it.v; v.controls = true; v.setAttribute('aria-label', m.name + ' video'); gal.appendChild(v); }
  });
  $('#sheetRoom').textContent = roomName(m);
  $('#sheetName').textContent = m.name.toUpperCase();
  const rows = [];
  if (m.set) rows.push([t('fSet'), L(m.set)]);
  if (m.paint) rows.push([t('fPaint'), L(m.paint)]);
  if (m.mech) rows.push([t('fMech'), L(m.mech)]);
  if (m.mat) rows.push([t('fMat'), L(m.mat)]);
  if (m.sizeLine) rows.push([t('fSize'), lang === 'uz' ? m.sizeLine.replace('см', 'sm') : m.sizeLine]);
  if (m.sizes) rows.push([t('fSize'), m.sizes.map(s => `${lang === 'uz' ? s[1] : s[0]}: ${s[2]}`).join('<br>') + (lang === 'uz' ? ' (sm)' : ' (см)')]);
  if (m.note) rows.push([t('fNoteF'), L(m.note)]);
  $('#sheetFacts').innerHTML = rows.map(r => `<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join('');
  $('#sheetPrice').innerHTML = m.price ? `<b>${t('priceRestart')}</b><small>${t('priceRestartSmall')}</small>` : `<b>${t('priceAsk')}</b><small>${t('priceAskSmall')}</small>`;
  $('#sheetSrc').textContent = t('srcNote');
  if (!sheet.open) { sheet.showModal(); document.documentElement.style.overflow = 'hidden'; }
  gal.scrollLeft = 0; galUpd();
}
function galIdx() { const g = $('#sheetGal'); return Math.round(g.scrollLeft / Math.max(1, g.clientWidth)); }
function galUpd() { const g = $('#sheetGal'); const n = g.children.length, i = galIdx(); $('#galCount').textContent = `${i + 1} / ${n}`; $('#galPrev').disabled = i <= 0; $('#galNext').disabled = i >= n - 1; $('.gal-nav').hidden = n < 2;
  [...g.querySelectorAll('video')].forEach(v => { if (v !== g.children[i]) v.pause(); }); }
$('#sheetGal').addEventListener('scroll', () => requestAnimationFrame(galUpd), { passive: true });
const galGo = d => { const g = $('#sheetGal'); g.scrollTo({ left: (galIdx() + d) * g.clientWidth, behavior: RM ? 'auto' : 'smooth' }); };
$('#galPrev').addEventListener('click', () => galGo(-1)); $('#galNext').addEventListener('click', () => galGo(1));
function closeSheet() { $$('#sheetGal video').forEach(v => v.pause()); sheet.close(); }
sheet.addEventListener('close', () => { document.documentElement.style.overflow = ''; $$('#sheetGal video').forEach(v => v.pause()); });
$('#sheetClose').addEventListener('click', closeSheet);
sheet.addEventListener('click', e => { if (e.target === sheet) closeSheet(); });
$('#sheetAsk').addEventListener('click', () => { const id = sheetModel?.id; closeSheet(); pickModel(id); });
$('#sheetVisit').addEventListener('click', () => { const id = sheetModel?.id; closeSheet(); $('#visitModel').value = id; updVisit(); $('#showroom').scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); });
document.addEventListener('click', e => { const b = e.target.closest('[data-open]'); if (b) openSheet(b.dataset.open); });

/* ---------- set builder ---------- */
const selItems = new Set(['bed', 'wardrobe']);
function fillModelSelects() {
  const opts = MODELS.map(m => `<option value="${m.id}">${m.name} (${roomName(m).toLowerCase()})</option>`).join('');
  const s1 = $('#setModel'), v1 = s1.value || 'graf'; s1.innerHTML = `<option value="">${t('anyModel')}</option>` + opts; s1.value = v1;
  const s2 = $('#visitModel'), v2 = s2.value; s2.innerHTML = `<option value="">${t('anyModel')}</option>` + opts; s2.value = v2;
}
function renderItems() {
  const m = byId[$('#setModel').value];
  const list = m && m.room === 'living' ? LIV_ITEMS : BED_ITEMS;
  [...selItems].forEach(k => { if (!list.includes(k)) selItems.delete(k); });
  if (!selItems.size) selItems.add(list[0]);
  $('#setItems').innerHTML = list.map(k => `<label class="chk"><input type="checkbox" value="${k}" ${selItems.has(k) ? 'checked' : ''}><span>${cap(t('it_' + k))}</span></label>`).join('');
}
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
$('#setItems').addEventListener('change', e => { if (e.target.checked) selItems.add(e.target.value); else selItems.delete(e.target.value); updSet(); });
$('#setModel').addEventListener('change', () => { renderItems(); updSet(); });
['#optColor', '#optMeasure', '#optDelivery', '#setName', '#setPhone', '#setNote'].forEach(s => $(s).addEventListener('input', updSet));
function setMsg() {
  const m = byId[$('#setModel').value]; const lines = [t('m_hello')];
  lines.push(m ? fmt(t('m_want'), { m: m.name }) : t('m_wantAny'));
  if (selItems.size) { const list = (m && m.room === 'living' ? LIV_ITEMS : BED_ITEMS).filter(k => selItems.has(k)).map(k => t('it_' + k)); lines.push(fmt(t('m_items'), { i: list.join(', ') })); }
  if ($('#optColor').checked) lines.push(t('m_color'));
  if ($('#optMeasure').checked) lines.push(t('m_measure'));
  if ($('#optDelivery').checked) lines.push(t('m_delivery'));
  const n = $('#setName').value.trim(), p = $('#setPhone').value.trim(), c = $('#setNote').value.trim();
  if (n) lines.push(fmt(t('m_name'), { n })); if (p) lines.push(fmt(t('m_phone'), { p })); if (c) lines.push(fmt(t('m_note'), { c }));
  return lines.join('\n');
}
function updSet() { $('#setMsg').textContent = setMsg(); }
function pickModel(id) { if (id && byId[id]) { $('#setModel').value = id; renderItems(); updSet(); } $('#komplekt').scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); }

/* ---------- visit booking ---------- */
const TZ = 'Asia/Tashkent';
function tashNow() { const p = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date()); const g = k => +p.find(x => x.type === k).value; return { y: g('year'), mo: g('month') - 1, d: g('day'), h: g('hour') % 24, mi: g('minute') }; }
let vDay = 0, vTime = null;
function renderVisit() {
  const now = tashNow(); const base = new Date(Date.UTC(now.y, now.mo, now.d));
  const startDay = now.h >= 18 ? 1 : 0;
  if (vDay < startDay) vDay = startDay;
  const days = []; for (let i = startDay; i < startDay + 7; i++) { const d = new Date(base.getTime() + i * 864e5); days.push({ i, d }); }
  $('#visitDays').innerHTML = days.map(({ i, d }) => { const top = i === 0 ? t('today') : i === 1 ? t('tomorrow') : T[lang].days[d.getUTCDay()]; return `<button type="button" role="radio" aria-checked="${i === vDay}" data-day="${i}">${top}<small>${d.getUTCDate()} ${T[lang].months[d.getUTCMonth()]}</small></button>`; }).join('');
  const times = []; for (let h = 10; h <= 18; h++) { if (vDay === 0 && h <= now.h) continue; times.push(String(h).padStart(2, '0') + ':00'); }
  if (!times.includes(vTime)) vTime = times[0] || null;
  $('#visitTimes').innerHTML = times.map(x => `<button type="button" role="radio" aria-checked="${x === vTime}" data-time="${x}">${x}</button>`).join('');
  updVisit();
}
function dayLabel() { const now = tashNow(); const d = new Date(Date.UTC(now.y, now.mo, now.d) + vDay * 864e5); const dd = `${d.getUTCDate()} ${T[lang].months[d.getUTCMonth()]}`; return vDay === 0 ? `${t('today').toLowerCase()}, ${dd}` : vDay === 1 ? `${t('tomorrow').toLowerCase()}, ${dd}` : dd; }
function visitMsg() {
  const lines = [t('m_hello'), fmt(t('v_text'), { d: dayLabel(), t: vTime || '10:00' })];
  const m = byId[$('#visitModel').value]; if (m) lines.push(fmt(t('v_model'), { m: m.name }));
  const n = $('#visitName').value.trim(); if (n) lines.push(fmt(t('m_name'), { n }));
  return lines.join('\n');
}
function updVisit() { $('#visitMsg').textContent = visitMsg(); }
$('#visitDays').addEventListener('click', e => { const b = e.target.closest('[data-day]'); if (!b) return; vDay = +b.dataset.day; renderVisit(); });
$('#visitTimes').addEventListener('click', e => { const b = e.target.closest('[data-time]'); if (!b) return; vTime = b.dataset.time; $$('#visitTimes button').forEach(x => x.setAttribute('aria-checked', String(x === b))); updVisit(); });
$('#visitName').addEventListener('input', updVisit); $('#visitModel').addEventListener('change', updVisit);
$('#visitForm').addEventListener('submit', e => e.preventDefault());
function renderOpen() { const n = tashNow(); const open = n.h >= 10 && n.h < 19; const el = $('#openNow'); el.textContent = open ? t('openNow') : t('closedNow'); el.classList.toggle('is-open', open); }

/* ---------- facts ---------- */
function renderFacts() { $('#facts').innerHTML = FACTS.map(f => `<div><dt>${L(f.t)}</dt><dd>${L(f.d)}<small>${L(f.s)}</small></dd></div>`).join(''); }

/* ---------- clients reel ---------- */
function renderReel() {
  $('#reel').innerHTML = CLIENTS.map(c => `<li><figure><div class="media">${c.v ? `<video muted playsinline loop preload="none" poster="${c.p}" src="${c.v}"></video>` : `<img src="${c.i}" alt="${c.m}" loading="lazy">`}</div><figcaption><b>${c.m.includes('/') ? (lang === 'uz' ? 'Kalit topshirish' : 'Под ключ') : c.m.toUpperCase()}</b>${L(c.t)}</figcaption></figure></li>`).join('');
  bindVideos($('#reel'));
}
function reelDepth() {
  const r = $('#reel'); if (!r || RM) return; const c = r.getBoundingClientRect(); const mid = c.left + c.width / 2;
  [...r.children].forEach(li => { const b = li.getBoundingClientRect(); const d = Math.max(-1, Math.min(1, (b.left + b.width / 2 - mid) / (c.width / 2))); li.style.setProperty('--ry', (-d * 16).toFixed(2) + 'deg'); li.style.setProperty('--tz', (-Math.abs(d) * 60).toFixed(0) + 'px'); });
}
$('#reel').addEventListener('scroll', () => requestAnimationFrame(reelDepth), { passive: true });
addEventListener('resize', reelDepth);

/* play videos only when visible */
const vio = new IntersectionObserver(es => es.forEach(e => { const v = e.target; if (e.isIntersecting && !RM) { v.play().catch(() => {}); } else v.pause(); }), { threshold: .55 });
function bindVideos(root) { $$('video', root).forEach(v => { if (!v.controls) vio.observe(v); }); }
bindVideos($('#showroom'));

/* ---------- header color ---------- */
const hdr = $('#top');
function onScrollHdr() { const h = $('#zal'); const end = h.offsetTop + h.offsetHeight - 70; hdr.classList.toggle('is-light', scrollY > end); }
addEventListener('scroll', onScrollHdr, { passive: true });

/* ---------- Hall (3D) ---------- */
const hall = $('#zal'); const N = BAYS.length; let bay = 0; let hall3d = null; let mode = 'static';
const STEP_VH = 70;
function bayModel(i) { return BAYS[i].id === 'showroom' ? null : byId[BAYS[i].id]; }
function renderRail() {
  $('#hallRail').innerHTML = BAYS.map((b, i) => `<li><button type="button" data-bay="${i}" aria-current="${i === bay}">${b.id === 'showroom' ? t('roomShowroom') : byId[b.id].name}</button></li>`).join('');
}
$('#hallRail').addEventListener('click', e => { const b = e.target.closest('[data-bay]'); if (b) goBay(+b.dataset.bay); });
$$('.hall__rooms [data-jump]').forEach(b => b.addEventListener('click', () => goBay(+b.dataset.jump)));
function hudFact(i) {
  const m = bayModel(i);
  if (!m) return `${t('addr')}. 10:00–19:00`;
  const parts = [];
  if (m.set) parts.push(L(m.set));
  if (m.paint) parts.push((lang === 'uz' ? 'Boʻyoq va lak: ' : 'Краска и лак: ') + L(m.paint));
  if (m.mech) parts.push((lang === 'uz' ? 'Mexanizm: ' : 'Механизмы: ') + L(m.mech));
  if (m.mat) parts.push(L(m.mat));
  if (m.price) parts.push(t('priceRestart'));
  if (m.note && parts.length < 2) parts.push(L(m.note));
  return parts.join('. ');
}
function setBay(i, force) {
  i = Math.max(0, Math.min(N - 1, i)); if (i === bay && !force) return; bay = i;
  const m = bayModel(i);
  const name = m ? m.name.toUpperCase() : (lang === 'uz' ? 'SHOURUM' : 'ШОУРУМ');
  const room = m ? roomName(m) : t('addr');
  const apply = () => { $('#hudName').textContent = name; $('#hudName').classList.toggle('is-long', name.length > 6); $('#hudIdx').textContent = `${i + 1} / ${N}`; $('#hudRoom').textContent = room; $('#hudFact').textContent = hudFact(i);
    $('#hudOpen').textContent = m ? t('hudOpen') : t('hudBook'); $('#hudPrice').textContent = m ? t('hudPrice') : t('hudShowroom'); };
  if (window.gsap && !RM && !force) { gsap.killTweensOf('#hudName,#hudFact'); gsap.to('#hudName,#hudFact', { opacity: 0, y: 10, duration: .18, onComplete: () => { apply(); gsap.fromTo('#hudName,#hudFact', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: .45, ease: 'power3.out', stagger: .05 }); } }); }
  else apply();
  $$('#hallRail button').forEach(b => b.setAttribute('aria-current', String(+b.dataset.bay === i)));
  const roomKey = i === N - 1 ? 7 : (m && m.room === 'living' ? 6 : 0);
  $$('.hall__rooms button').forEach(b => b.setAttribute('aria-current', String(+b.dataset.jump === roomKey)));
  $('#hudPrev').disabled = i === 0; $('#hudNext').disabled = i === N - 1;
  if (mode === 'static') { const st = $('#hallStill'); st.src = BAYS[i].src[0]; st.alt = m ? `${m.name}, ${roomName(m).toLowerCase()}` : t('roomShowroom'); }
}
function goBay(i) {
  i = Math.max(0, Math.min(N - 1, i));
  if (mode === '3d') { const top = hall.offsetTop + (hall.offsetHeight - innerHeight) * (i / (N - 1)); scrollTo({ top: top + 2, behavior: RM ? 'auto' : 'smooth' }); }
  else setBay(i);
}
$('#hudPrev').addEventListener('click', () => goBay(bay - 1));
$('#hallStill').addEventListener('click', () => $('#hudOpen').click());
$('#hudNext').addEventListener('click', () => goBay(bay + 1));
$('#hudOpen').addEventListener('click', () => { const m = bayModel(bay); if (m) openSheet(m.id); else $('#visitForm').scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'center' }); });
$('#hudPrice').addEventListener('click', () => { const m = bayModel(bay); if (m) pickModel(m.id); else $('#showroom').scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); });

function canWebGL() {
  try { const c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch (e) { return false; }
}
function lowPower() { const n = navigator; return (n.connection && n.connection.saveData) || (n.deviceMemory && n.deviceMemory <= 2) || (n.hardwareConcurrency && n.hardwareConcurrency <= 2); }

/* free band for the 3D photos between the intro text, chips/rail and the HUD (px) */
let introRect = null;
function measureIntro() { const el = $('#hallIntro'); const tf = el.style.transform; el.style.transform = 'none'; introRect = el.getBoundingClientRect(); el.style.transform = tf; }
addEventListener('resize', measureIntro);
function frameBox(o) {
  const W = innerWidth, H = hall.querySelector('.hall__stage').clientHeight || innerHeight;
  const hud = $('#hallHud').getBoundingClientRect(); const hdr = 64;
  if (!introRect) measureIntro();
  const bottom = hud.top - 14;
  const mix = (a, b) => a + (b - a) * o;
  if (W / H < 0.8 || W < 760) {
    const top = mix(hdr + 10, introRect.bottom + 14);
    return { cx: W / 2, cy: (top + bottom) / 2, w: W * 0.78, h: Math.max(120, bottom - top) * 0.96 };
  }
  const rail = $('#hallRail').getBoundingClientRect();
  const right = rail.width ? rail.left - 24 : W - 40;
  const chips = $('.hall__rooms').getBoundingClientRect();
  const top = chips.bottom + 14;
  const left = mix(W * 0.5 - (right - W * 0.5), introRect.right + 24);
  return { cx: (left + right) / 2, cy: (top + bottom) / 2, w: Math.max(200, right - left) * 0.9, h: Math.max(160, bottom - top) * 0.97 };
}
function staticHall() { mode = 'static'; hall.classList.add('is-static'); hall.classList.remove('is-3d'); hall.style.height = ''; setBay(bay, true); }

async function initHall() {
  if (RM || !canWebGL() || lowPower() || qs.has('no3d')) { staticHall(); return; }
  hall.style.height = `calc(100svh + ${(N - 1) * STEP_VH}vh)`;
  mode = '3d';
  let mod;
  try { mod = await import('./hall3d.js'); } catch (e) { console.warn('3D unavailable', e); hall.style.height = ''; staticHall(); return; }
  try {
    hall3d = mod.createHall($('#hallCanvas'), BAYS, { onPick: i => { const m = bayModel(i); if (m) openSheet(m.id); else $('#visitForm').scrollIntoView({ behavior: 'smooth', block: 'center' }); } });
  } catch (e) { console.warn(e); hall.style.height = ''; staticHall(); return; }
  hall.classList.add('is-3d');
  const update = () => {
    const total = hall.offsetHeight - innerHeight; const y = Math.min(Math.max(scrollY - hall.offsetTop, 0), total);
    const p = total > 0 ? y / total : 0; const f = p * (N - 1);
    hall3d.setProgress(f);
    setBay(Math.round(f));
    const intro = $('#hallIntro'); const o = Math.max(0, 1 - f * 1.6); intro.style.opacity = o.toFixed(3); intro.style.transform = `translateY(${(-f * 30).toFixed(1)}px)`; intro.style.visibility = o < .02 ? 'hidden' : '';
    hall.style.setProperty('--introShade', (0.25 + 0.6 * o).toFixed(3));
    hall3d.setBox(frameBox(o), o * 0.9);
  };
  if (window.ScrollTrigger) { gsap.registerPlugin(ScrollTrigger); ScrollTrigger.create({ trigger: hall, start: 'top top', end: 'bottom bottom', onUpdate: update, onRefresh: update }); }
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
  const io = new IntersectionObserver(es => es.forEach(e => hall3d.setActive(e.isIntersecting)), { threshold: 0 });
  io.observe(hall);
  document.addEventListener('visibilitychange', () => hall3d.setActive(!document.hidden && hall.getBoundingClientRect().bottom > 0));
}

/* ---------- language ---------- */
function renderAll() {
  introRect = null; applyStatic(); renderGrid(); fillModelSelects(); renderItems(); updSet(); renderFacts(); renderReel(); renderVisit(); renderOpen(); renderRail(); setBay(bay, true);
  renderActs($('[data-acts="set"]'), setMsg); renderActs($('[data-acts="visit"]'), visitMsg);
  if (sheet.open && sheetModel) openSheet(sheetModel.id);
  requestAnimationFrame(reelDepth);
}
$$('.lang button').forEach(b => b.addEventListener('click', () => { lang = b.dataset.lang; localStorage.setItem('dv-lang', lang); const u = new URL(location.href); u.searchParams.set('lang', lang); history.replaceState(null, '', u); renderAll(); dispatchEvent(new Event('scroll')); }));

renderAll(); bindTilt(); onScrollHdr();
setInterval(renderOpen, 60000);
const start = () => initHall();
start();
})();
