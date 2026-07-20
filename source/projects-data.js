// Project detail content for Mobile Lab. Block kinds:
//  img   {k:'img', a:aspect '580/832', ph:placeholder, cap?:caption}
//  title {k:'title', x:title, m?:meta}
//  head  {k:'head', x:heading}
//  para  {k:'para', x:paragraph}         (\n renders as line break)
//  video {k:'video', x:label, u:url}

export const PROJECT_CATS = {
  Features:      ['doiboy', 'boundary'],
  Documentary:   ['noboysland', 'bkky', 'bytheriver', 'boundary'],
  Installations: ['achip', 'longestway', 'inprocess', 'mrshadow', 'dig', 'ratchapruek', 'aurora', 'gazehear'],
  Performances:  ['idontcare', 'sakecup'],
};

export const PROJECTS = {
  doiboy: {
    title: 'DOI BOY',
    blocks: [
      { k: 'img', a: '580/832', ph: 'doiboy_NF_poster.jpg' },
      { k: 'title', x: 'DOI BOY', m: '2023 · Drama Thriller · Atmos · DCP & IMF · Colour · 99 mins.\nMobile Lab · Anti Archive · Neramitnang Film' },
      { k: 'head', x: 'Synopsis' },
      { k: 'para', x: 'A refugee builds a new identity as a sex worker in Thailand and gets caught up in a client’s risky scheme that might lead to a better life.' },
      { k: 'head', x: 'Cast & Crew' },
      { k: 'para', x: 'Director — Nontawat Numbenchapol\nProducer — Supatcha Thipsena, Steve Chen, Daniel Mattes, Davy Chou\nCast — Awat Ratanapintha, Arak Amornsupasiri, Aelm Thavornsiri, Panisara Rikulsurakan, Ornjira Lamwilai\nScreenplay — Nontawat Numbenchapol\nCinematography — Rimvydas Leipus\nEditor — Harin Paesongthai\nMusic — Nannue Tipitier, Katenan Juntimathorn' },
      { k: 'head', x: 'Awards' },
      { k: 'para', x: 'Rising Star Award — Marie Claire Korea × BIFF 2023\nSEAFIC Award Winner 2017\nSpecial Mention Award, Talents Tokyo 2017\nNext Master Support Program Development Fund, Talents Tokyo 2018' },
      { k: 'head', x: 'Official Selection' },
      { k: 'para', x: 'Busan Asian Project Market 2017\nTalents Tokyo 2017\nLuang Prabang Film Festival Talent Lab 2017\nTies That Bind 2017\nBusan Asian Film School 2018\nBerlinale Talents 2018\nBerlinale Co-Production Market 2018\nCannes Atelier 2018\nThai Pitch at Cannes 2019\nBusan International Film Festival (BIFF) 2023 — In Competition, Jiseok' },
      { k: 'video', x: 'Watch DOI BOY on Netflix', u: 'https://www.netflix.com/title/81688765' },
      { k: 'video', x: 'Official teaser — Vimeo', u: 'https://vimeo.com/862627595' },
      { k: 'img', a: '580/387', ph: 'doiboy_still01.jpg' },
      { k: 'img', a: '580/387', ph: 'doiboy_still02.jpg' },
      { k: 'img', a: '580/379', ph: 'doiboy_still03.jpg' },
      { k: 'img', a: '580/387', ph: 'doiboy_still04.jpg' },
    ],
  },

  boundary: {
    title: 'Boundary',
    blocks: [
      { k: 'img', a: '607/870', ph: 'berlin_poster.jpg' },
      { k: 'title', x: 'Boundary', m: '96 minutes · HD · Colour · 2013\nThailand / Cambodia / France · Khmer & Thai with English subtitles\nA Mobile Lab production and Vycky Films — with support from Arts Network Asia (ANA), DMZ Fund, Asian Network of Documentary (AND), Busan International Film Festival' },
      { k: 'head', x: 'Logline' },
      { k: 'para', x: 'In the past decade, political conflict has shaken Thailand’s social and cultural structure. Recently created history, understood for more than half a century, is now questioned, and some traces of history are being re-interpreted. The connection of belief, society, culture and history of a country amazingly has an effect on a neighbouring country and the whole region.' },
      { k: 'head', x: 'Synopsis' },
      { k: 'para', x: 'In 2010, Nontawat worked as a still photographer on a Thai film production, where he met Aod, a 24-year-old workman from Sisaket province — which borders Cambodia and the famous Preah Vihear Temple. Aod had once been a soldier in Narathiwat, and in early 2010 was ordered to disperse the “Red Shirts” protesters in Bangkok, but was discharged before the decisive point. Aod’s life inspired Nontawat to make a new film.' },
      { k: 'para', x: 'In 2011, Nontawat went to Aod’s home in Sisaket with his own crew. At that time there were clashes between Thai and Cambodian soldiers over Preah Vihear Temple, while political conflict in Thailand between “Red Shirts” and “Yellow Shirts” made this ghost from the past arise. The journey of Nontawat in the boundary of the two countries had begun…' },
      { k: 'head', x: 'Director’s Statement' },
      { k: 'para', x: 'Boundary is the imaginary line we mark down to separate an area. I believe that people living around the border are the same group of people — they share the same culture, language and tradition, but through different political policy or many other reasons, a boundary was made to separate them. This film expresses my feeling toward “boundary” — not just territorial, but between social classes, between birth and death, between happiness and sorrow.' },
      { k: 'head', x: 'Cast & Crew' },
      { k: 'para', x: 'Producer / Director / Camera / Editor — Nontawat Numbenchapol\nCo-Producer — Donsaron Kovitvanitcha, Chou Davy\nAssistant Director / Additional Camera — Nunthapol Ajawakom, Kakrona Chan\nAdditional Camera — Adunwit Akkarawutmethakorn\nLocation — Sitthipong Junthasuk, Kanitha Tith, Penhlek Chan\nPost-production Supervisor — Lee Chatametikool\nSound & Mix — Nopawat Likitwong\nSound Designer — Katenan Juntimathorn' },
      { k: 'head', x: 'Awards' },
      { k: 'para', x: '2014 — Young Director Award, Bangkok Critics Assembly Awards, Thailand' },
      { k: 'head', x: 'Official Selection' },
      { k: 'para', x: '2014 — Human Rights Human Dignity IFF, Yangon\n2014 — Seoul Independent Documentary Film & Video Festival\n2013 — Cambodia International Film Festival\n2013 — Festival Film Dokumenter, Yogyakarta\n2013 — Luang Prabang Film Festival, Laos\n2013 — Verzio International Human Rights Documentary FF, Budapest\n2013 — IDFA, Amsterdam\n2013 — Yamagata International Documentary FF, Japan\n2013 — Milano Film Festival, Italy\n2013 — Salaya International Documentary FF, Thailand\n2013 — Berlin International Film Festival' },
      { k: 'video', x: 'Official trailer — Vimeo', u: 'https://vimeo.com/66504980' },
      { k: 'video', x: 'Vimeo On Demand', u: 'https://vimeo.com/ondemand/boundary' },
      { k: 'img', a: '607/341', ph: 'stillnew01.jpg' },
      { k: 'img', a: '607/341', ph: 'stillnew02.jpg' },
      { k: 'img', a: '607/342', ph: 'stillnew03.jpg' },
    ],
  },

  noboysland: {
    title: 'Soil Without Land',
    blocks: [
      { k: 'img', a: '580/829', ph: '2019april_swl.jpg' },
      { k: 'title', x: 'Soil Without Land', m: '2019 · Creative Documentary · 5.1 · DCP · Colour · 80 mins.\nMobile Lab' },
      { k: 'head', x: 'Synopsis' },
      { k: 'para', x: 'Set on the border of Myanmar and Northern Thailand, in a buffer zone in the Shan State where Shan refugees who have fled the ethnic war in Myanmar live — a self-governing region held by the Shan State Army with a mission to liberate the Shan people from Myanmar.' },
      { k: 'para', x: 'With a long history of war and prejudice between the two countries, the Thai government views Myanmar as a threat to its stability. As Myanmar transitions from military to democratic rule, Thailand goes from democracy to military rule. Stuck between these two unstable states, the Shan and other minorities continue to face violence and displacement. This is the story of a young man who, after barely escaping war, is forced back into a life of conflict and violence.' },
      { k: 'head', x: 'Credits' },
      { k: 'para', x: 'A documentary by Nontawat Numbenchapol\nInspired by Jai Sang Lod\nMusic — Katenan Juntimathorn\nEditor — Aekaphong Saransate, Nontawat Numbenchapol\nDirector of Photography — Nontawat Numbenchapol\nRe-recording Mixer — Poolpetch Hatthalitkosol\nColourist — Chaitawat Thrisansri\nProduced by — Komtouch Napattaloong, Nontawat Numbenchapol\nCo-produced by — John Badalu\nWith support from Docs Port Incheon Award Grant, Princess Maha Chakri Sirindhorn Anthropology Centre, Documentary Club, OneCool Sound Studio, White Light Post' },
      { k: 'img', a: '607/341', ph: 'nblphotoweb.jpg' },
    ],
  },

  bkky: {
    title: '#BKKY',
    blocks: [
      { k: 'img', a: '607/848', ph: 'bkky_page.jpg' },
      { k: 'title', x: '#BKKY', m: 'Docu-Drama · 5.1 · DCP · Colour · 75 mins.' },
      { k: 'head', x: 'Director’s Statement' },
      { k: 'para', x: 'I started by interviewing 100 teenagers between 17–20 years old living in Bangkok. This period is the turning point of life — moving from high school to college. Regardless of different attitudes and experiences, teenagers’ love and dreams revolve around the same cliché, but in different contexts that cliché reveals different, individually meaningful outcomes.' },
      { k: 'para', x: 'Not only documenting a modern story of teenagers growing up in Bangkok, this film also reminds me of my own past and lets me document my own story — some parts similar, some different — including the first time I tried new things, like making a film.' },
      { k: 'head', x: 'Synopsis' },
      { k: 'para', x: 'The film is based on interviews of 100 Thai teenagers aged 17–19 with diverse gender identities, sharing their experiences, personal lives and attitudes toward social life in Bangkok. The common theme is their coming of age and confusion with dreams and love, while parenting is the major factor.' },
      { k: 'para', x: '#BKKY is narrated through the interviews by creating a new character named JoJo, a 17-year-old girl who represents all the stories in the transition from 12th grade to university — the moment of many first experiences of life while trying to discover their true identities.' },
      { k: 'head', x: 'Cast & Crew' },
      { k: 'para', x: 'Director — Nontawat Numbenchapol\nProducer — Laddawan Rattanadilokchai\nCast — Ploiyukhon Rojanakatanyoo, Anongnart Yusananda, Jeff Watson Kiatmontri, Kesavatana Dohrs\nScreenplay — Nontawat Numbenchapol\nCinematography — Abhichon Rattanabhayon\nArt Director — Songvut Limmahakhun, Solod Charoensri\nEditor — Wasunan Hutawet, Nontawat Numbenchapol\nSound — Nopawat Likitwong\nMusic — Vichaya Vatanasapt\nProduction Company — Talent1, Thailand\nWorld Sales — John Badalu, Indonesia' },
      { k: 'video', x: 'Official trailer (Busan version) — Vimeo', u: 'https://vimeo.com/181949172' },
      { k: 'img', a: '607/405', ph: 'bkky_main.jpg' },
      { k: 'img', a: '607/405', ph: 'bkky02.jpg' },
      { k: 'img', a: '607/405', ph: 'bkky03.jpg' },
      { k: 'img', a: '607/405', ph: 'bkky04.jpg' },
      { k: 'img', a: '607/405', ph: 'bkky05.jpg' },
    ],
  },

  bytheriver: {
    title: 'By the River',
    blocks: [
      { k: 'img', a: '607/870', ph: 'poster.jpg' },
      { k: 'title', x: 'By the River', m: '71 minutes · HD · Colour · 2013\nPwo Karen and Thai with English subtitles\nDirector — Nontawat Numbenchapol · Executive Producer — Suparp Rimthepathip, Somchai Suwanban · Production — Mobile Lab / Ok-Pi-Dern Co., Ltd' },
      { k: 'head', x: 'Synopsis' },
      { k: 'para', x: 'Amidst the tranquility of the deep woods, the inhabitants of Klity, in Kanchanaburi, Thailand, have always led a simple life, feeding on the fish of the town’s creek. But for some time now the river has been contaminated by a mineral-processing factory. A young local man dives every day to catch fish for his lover, but today he has gone missing, unable to return to her as she awaits.' },
      { k: 'head', x: 'Director’s Statement' },
      { k: 'para', x: 'Conflicts over the use of natural resources are not hard to find these days. Since 1998, tailings leaked from a mineral-processing plant in Thong Pha Phum, Kanchanaburi, raised lead contamination in Southern Klity’s creek above safe levels, immeasurably harming the ecosystem and the people. I decided to convey this perennial problem in the belief that such conflicts can be resolved if society and the organisations involved have awareness and good environmental management. If this film can inspire us to think about our own actions and to understand people who live with pollution without choices, I — as a documentary filmmaker — will be truly honoured.' },
      { k: 'head', x: 'Awards' },
      { k: 'para', x: '2013 — Locarno International Film Festival, Cineasti del Presente — Special Mention Award' },
      { k: 'head', x: 'Official Selection' },
      { k: 'para', x: '2014 — Human Rights Human Dignity IFF, Yangon\n2014 — Green Film Festival in Seoul\n2014 — ChopShots, Jakarta\n2013 — Festival dei Popoli, Florence\n2013 — Kolkata International Film Festival, India\n2013 — SalaMindanaw International Film Festival, Philippines\n2013 — World Film Festival, Bangkok\n2013 — Hong Kong Asian Film Festival\n2013 — Locarno International Film Festival' },
      { k: 'video', x: 'Official trailer — Vimeo', u: 'https://vimeo.com/92129941' },
      { k: 'img', a: '607/341', ph: 'still.jpg' },
    ],
  },

  achip: {
    title: 'A Chip of the Old Block',
    blocks: [
      { k: 'img', a: '580/387', ph: 'achip.jpg' },
      { k: 'title', x: 'A Chip of the Old Block', m: '2023 · Sound · B&W · 88 min · 3-channel synchronised' },
      { k: 'para', x: 'Since 2020, a new generation of Thais has arisen who bravely question and protest the deep structural inequalities of Thai society. Many have ended up charged with lèse-majesté — a heavy criminal offence under Thai law, and a tool of conservative judicial activism. Investigating its history, we found that the lèse-majesté law is directly connected to the 1960s Cold War context — a period that expanded and changed Thailand’s political actors drastically.' },
      { k: 'para', x: 'Through image and sound — the conversations and gestures of Kanya Theerawut, Sitanan Satsaksit, and Pranee Danwattananusorn — we simultaneously record three mothers’ conversations via three cameras, shot in black and white on a plain white studio background. The finalised videos are installed on flat-screen TVs on white walls. This is our way to explore, dismantle and challenge the legacies and leftovers of Thai crypto-colonialism.' },
      { k: 'head', x: 'Credit' },
      { k: 'para', x: 'Artist — Nontawat Numbenchapol, Kridpuj Dhansandors\nDirector of Photography — Ittipun Promkaew\nPost Production — Pob Porthani, Kwanjuta Kumbunlue\nSubtitle — Ann Kaewta\nStill Photography — Withit Chanthamarit' },
      { k: 'img', a: '580/387', ph: 'achip02.jpg' },
      { k: 'img', a: '580/387', ph: 'achip03.jpg' },
      { k: 'img', a: '580/387', ph: 'achip04.jpg', cap: 'Installation view — photo by Marisa Srijunplean' },
    ],
  },

  longestway: {
    title: 'The Longest Way Round is the Shortest Way Home',
    blocks: [
      { k: 'img', a: '580/303', ph: 'thelongestway_instk01.jpg' },
      { k: 'title', x: 'The Longest Way Round is the Shortest Way Home', m: 'Installation · Gallery VER, Bangkok' },
      { k: 'para', x: 'Nontawat Numbenchapol’s debut exhibition at Gallery VER, and his first-ever large-scale installation in an on-site gallery. Echoing the idiom that shortcuts are not always the best way, the work reflects on the complexities and precariousness of migratory life, often undertaken without legal documents. Crossing the border from Myanmar to Thailand manifests as an unsustainable choice; systematically marginalised, immigrants often have no options but limited freedom or a return to the homeland.' },
      { k: 'para', x: 'Focusing on Shan labourers in Chiang Mai, the ethnographic framework incorporates Numbenchapol’s observations and on-site research through unique footage shot inland in Myanmar, tracing a young man’s return after six years to his village in Shan State to visit his family and process his national identity documents.' },
      { k: 'para', x: 'Encompassing immersive video and sound installations, photography and mixed-media works, the exhibition facilitates dialogue on inclusion, exclusion and societal acceptance across Southeast Asian borders.' },
      { k: 'head', x: 'Curator' },
      { k: 'para', x: 'Loredana Pazzini-Paracciani is an independent curator, writer and lecturer of Southeast Asian contemporary art, whose practice revolves around critical socio-political issues in the region, advocating a counter-hegemonic, non-Western-centric discourse.' },
      { k: 'img', a: '580/387', ph: 'instk05.jpg' },
      { k: 'img', a: '580/387', ph: 'instk04.jpg' },
      { k: 'img', a: '580/387', ph: 'instk06.jpg' },
      { k: 'img', a: '580/387', ph: 'instk13.jpg' },
    ],
  },

  inprocess: {
    title: 'In Process of Time',
    blocks: [
      { k: 'img', a: '580/387', ph: 'inprocess_cover.jpg' },
      { k: 'title', x: 'In Process of Time', m: 'Photobook' },
      { k: 'para', x: 'The photobook “In Process of Time” explores the process of time from past to present through on-site research documented as documentary photography by Nontawat Numbenchapol while researching his film script between 2016–2020.' },
      { k: 'para', x: 'The photography begins at Loi Kaw Wan, the borderland between Myanmar and Northern Thailand and a military base of the Shan State Army (SSA), then follows Shan national-day celebrations in Tachileik, and finally captures the Shan moving into Chiang Mai to live in their land of hope. Nontawat invites writers, academics and artists to explore the historical, social, political and cultural meanings behind the photographs.' },
      { k: 'head', x: 'Authors' },
      { k: 'para', x: 'Natcha Tantiwitayapitak · Yiamyut Sutthichaya · Somrit Luechai · Lalita Hanwong · Oradi Inkhong · Samak Kosem' },
      { k: 'head', x: 'Credits' },
      { k: 'para', x: 'Thai–English Translators — Jeff Moynihan, Philip Jablon\nProofreading — Kanyanart Siripanya\nPhoto Editor — Withit Chanthamarit\nGraphic Designer — Nattapol Rojjanarattanangkool\nFunded by the Princess Maha Chakri Sirindhorn Anthropology Centre' },
      { k: 'para', x: 'For international orders please contact vacilandobookshop@gmail.com' },
      { k: 'img', a: '580/410', ph: 'in_process_book_01.jpg' },
      { k: 'img', a: '580/410', ph: 'in_process_book_02.jpg' },
      { k: 'img', a: '580/410', ph: 'in_process_book_03.jpg' },
      { k: 'img', a: '579/868', ph: 'in_process_installation.jpg' },
    ],
  },

  mrshadow: {
    title: 'Mr. Shadow',
    blocks: [
      { k: 'title', x: 'Mr. Shadow', m: 'Doi Project · 2018' },
      { k: 'para', x: 'I often travel to Thailand’s borders, and often discover the inspiration to create in those places — a blend of cultures that exists between countries. The life I’ve seen there helps me reflect on my own and furthers my understanding of the diversity of life and what it means to be human.' },
      { k: 'para', x: 'As one of the most complicated and unstable wars in the world unfolds in Myanmar, the story of Shan refugees-turned-soldiers gives insight into a perpetual state of conflict and its suffocating effect on the innocent. It becomes an opportunity to document lives through a young stateless boy coming into adulthood — reflecting Myanmar’s transition from military to democratic state, alongside Thailand’s own transition from democratic to military state.' },
      { k: 'img', a: '580/379', ph: 'doiproject01.jpg' },
      { k: 'img', a: '580/387', ph: 'mrshadow_mmca2.jpg', cap: 'MR. SHADOW, 2016–2018 — C-print mounted on 3mm aluminium; edition of 5 + 1 A.P.; 111.5 × 167 cm' },
      { k: 'img', a: '580/580', ph: 'doishoes.jpg', cap: 'Green Canvas Doi Army Combat Boots (2016–2017) — 4-channel video, colour, sound, 10 mins' },
    ],
  },

  dig: {
    title: 'Dig',
    blocks: [
      { k: 'img', a: '700/608', ph: 'dig_head.jpg' },
      { k: 'title', x: 'Dig', m: 'Video installation & research materials for the forthcoming film “Boundary”' },
      { k: 'para', x: 'Thai filmmaker-artist Nontawat Numbenchapol opens his solo show “DIG”, presenting a video installation and research materials of his forthcoming film “Boundary”. The work features his research in Sri Saket, on the border of Thailand and Cambodia, at the time of the conflict over Preah Vihear.' },
      { k: 'para', x: 'In September 2010, during data collection at Roi Et in Northeastern Thailand, he met Aod — a 24-year-old workman hired by the film’s art crew to build the set. Aod had been a soldier in Narathiwat and, during the April Red Shirt protests, received orders to disperse the crowd. Their conversation, written in Khmer on the red soil, became the seed of the project.' },
      { k: 'head', x: 'Solo Exhibition' },
      { k: 'para', x: 'Space 1/2 @ Messy Shop, Bangkok, Thailand' },
      { k: 'img', a: '700/394', ph: 'tree.jpg' },
      { k: 'img', a: '700/1046', ph: 'flower.jpg' },
    ],
  },

  ratchapruek: {
    title: 'Ratchapruek',
    blocks: [
      { k: 'img', a: '700/392', ph: 'ratchapruek.jpg' },
      { k: 'title', x: 'Ratchapruek', m: '1 min 30 sec · Video Installation · HD · Colour · No dialogue · 2012' },
      { k: 'para', x: 'Ratchapruek (Cassia fistula), known as the golden shower tree, is a flowering plant native to southern Asia. It is the national tree of Thailand, and its flower is Thailand’s national flower.' },
      { k: 'head', x: 'Group Exhibition' },
      { k: 'para', x: 'Menam Art Fleuve — Ensapc Ygrec, Paris, France' },
      { k: 'img', a: '700/700', ph: 'ratchpruek.jpg' },
    ],
  },

  aurora: {
    title: 'Aurora Primary',
    blocks: [
      { k: 'img', a: '607/404', ph: 'aurora_head.jpg', cap: 'Photo by Chatchai Suban' },
      { k: 'title', x: 'Aurora Primary', m: 'Film on the Rocks — Untamed Winner\nVideo installation · Sound · HD · Colour · 20 mins.' },
      { k: 'para', x: 'AURORA is an atmospheric phenomenon found in nature. For centuries people perceived this light with appall and fright, until humans formed an explanation of its existence. Long ago the aurora was regarded as the recollection of the deceased — the breath that lasts eternally, spanning past, present and future.' },
      { k: 'para', x: 'AURORA PRIMARY explores “the foundation of birth, living and death; of past, present and future”, for which three primary colours — blue, yellow and red — stand. When the three colours overlap, a multitude of brand-new colours emerge. This piece is dedicated to the beloved who will shape the future.' },
      { k: 'head', x: 'Cast & Crew' },
      { k: 'para', x: 'Production — Fotr, New Panikbutr, Chaisiri Jiwarangsan\nLighting Crew — Live 4 Viva\nEnglish Subtitle — Ratchapoom Boonbunchachoke' },
      { k: 'head', x: 'Film on the Rocks Yao Noi — Untamed' },
      { k: 'para', x: 'Alongside collaborations with established artists and architects, we believe it is important to launch a platform for young filmmakers who joined us at the Lab. Given a brief to integrate a fish trap (“Sai”), inspired by the theme PRIMORDIAL and their memories of the island, the winner’s work was realised at Film on the Rocks Yao Noi 2012.' },
      { k: 'img', a: '607/455', ph: 'aurora3.jpg' },
      { k: 'img', a: '607/455', ph: 'aurora2.jpg', cap: 'Photo by Piyatat Hemmatat' },
    ],
  },

  gazehear: {
    title: 'Gaze & Hear',
    blocks: [
      { k: 'img', a: '607/334', ph: 'gaze_hear_poster.jpg' },
      { k: 'title', x: 'Gaze & Hear', m: 'HD · 10 min · Stereo · Colour · 2011' },
      { k: 'para', x: 'A video-art experiment and survey on human visual and sound perception and their influence on way of life, national integration, and belief in fact. The video changes usual perception by pairing a Thai ancient tale, read in a calm voice, with annoying visuals and sound.' },
      { k: 'head', x: 'Cast & Crew' },
      { k: 'para', x: 'Director — Nontawat Numbenchapol\nScript Writer — Donsaron\nVoice-over & Sound Recorder — Aimsinthu Ramasoot, Gunn Karalak\nSound Design — Katenan Juntimathorn\nMoving Image & Poster Design — Jate Saitthiti' },
      { k: 'head', x: 'Exhibition' },
      { k: 'para', x: '2014 — “A Brief History of Memory”, 4th Moscow International Biennale for Young Art, Strategic Projects\n2014 — “Chapter 3, State of Being — New Video Art from Thailand”, XXX Gallery, Hong Kong\n2011 — Experimental Film Forum, Singapore\n2010 — Doi Saket International Film Festival, Thailand' },
    ],
  },

  idontcare: {
    title: 'I Don’t Care',
    blocks: [
      { k: 'img', a: '580/467', ph: 'idontcare.jpg' },
      { k: 'title', x: 'I Don’t Care', m: 'Theatre / Performance · 80 min' },
      { k: 'para', x: 'The queer Australian singer-songwriter’s words — “I really fall in love with the person; I don’t care whether someone’s got a ding or a dong” — provided the title for this Thai-German theatre project. Based on interviews the journalist Jürgen Berger conducted with trans* people in Thailand and Germany between 2017 and 2022, the production explores the gap in society these people inhabit in both countries.' },
      { k: 'para', x: '“I Don’t Care” tells of trans* ways of life that take convoluted yet direct paths toward their felt gender, struggling with prejudice in both countries. For this production by Jarunun Phantachat and German director Anna-Elisabeth Frick, video artist Nontawat Numbenchapol evolved an entirely individual visual language. Thai performers Pathavee Thepkraiwan and Sarut Komalittipong appear with Mareike Beykirch of the Residenztheater ensemble.' },
      { k: 'head', x: 'Artistic Direction' },
      { k: 'para', x: 'Direction, Stage Design & Choreography — Anna-Elisabeth Frick, Jarunun Phantachat\nVideo — Nontawat Numbenchapol\nCostume Design — Nicha Puranasamriddhi\nMusic — Matthias Breitenbach\nLighting — Barbara Westernach\nDramaturgy — Jürgen Berger, Almut Wagner' },
      { k: 'img', a: '580/435', ph: 'idc03.jpg' },
      { k: 'img', a: '580/387', ph: 'idc01.jpg' },
      { k: 'img', a: '580/387', ph: 'idc02.jpg' },
    ],
  },

  sakecup: {
    title: 'An Imperial Sake Cup and I',
    blocks: [
      { k: 'img', a: '580/329', ph: 'sake_07.jpg' },
      { k: 'title', x: 'An Imperial Sake Cup and I', m: 'Lecture performance\nby Dr. Charnvit Kasetsiri · Thai with English subtitles' },
      { k: 'para', x: 'A lecture performance by Dr. Charnvit Kasetsiri, a renowned historian and specialist in Southeast Asian studies. Charnvit draws a connection between his relationship with the Japanese army in his hometown Nong Pla Duk, Ban Pong, during World War II. In 1964, Crown Prince Akihito and his consort officially visited Thailand and, as a junior member of the Bangkok Municipality welcome team, Charnvit was given a royal sake cup he has kept ever since.' },
      { k: 'para', x: 'He traces personal and micro-narratives to reflect objects and memories, and his witnessing of global social transformation — from the Japanese presence in Thailand, to the Vietnam War, to the 1970s student uprising — juxtaposing Thai and Japanese history. Co-directed by Teerawat “Ka-ge” Mulvilai (performance / stage), Nontawat Numbenchapol and Anan Krudphet (video, moving images); produced by Gridthiya Gaweewong.' },
      { k: 'img', a: '580/410', ph: 'sake_01.jpg' },
      { k: 'img', a: '580/329', ph: 'sake_08.jpg' },
      { k: 'img', a: '580/410', ph: 'sake_03.jpg' },
    ],
  },
};
