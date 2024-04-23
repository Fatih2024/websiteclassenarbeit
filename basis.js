// - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Diese Variable soll später beim Start der Webseite,
// die Verbindung zum BODY-Element erhalten!
// - - - - - - - - - - - - - - - - - - - - - - - - - - //
let body = undefined;

// - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Die Webseite unterstützt drei Sprachen. Damit die
// selben Inhalte, für jede Sprache separat erkannt
// und abgerufen werden können, wird jede Sprache
// durch eine Zahl repräsentiert, damit die Array-Inhalte
// schnell ausgelesen werden können.
// Deutsch = 0
// Türkisch = 1
// Englisch = 2
// - - - - - - - - - - - - - - - - - - - - - - - - - - //
let dilKodu = 0;

// - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Die Sidebar auf der linken Seite wird durch dieses
// Array organisiert
// - - - - - - - - - - - - - - - - - - - - - - - - - - //
let neuarr = [];

// - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Diese Funktion löscht den Inhalt der Sidebar und
// erzeugt es neu. Dabei wird die aktuelle Sprache
// mithilfe der Variable "dilKodu" berücksichtigt
// - - - - - - - - - - - - - - - - - - - - - - - - - - //
function sidebarMenu()
{
    let u = document.querySelector(".sidebar-menu > ul");
    // *** //
    u.innerHTML = "";
    // *** //
    let o = document.querySelector(".option-menu > ul");
    // *** //
    o.innerHTML = "";
    // *** //
    neuarr = [
        // 0
        {
            Titel : [ "Sonne", "Güneş", "Sun" ],
            Text : [ "Die Sonne ist der Stern, welcher der Erde am nächsten ist und das Zentrum des Sonnensystems bildet. Sie ist ein durchschnittlich großer Stern im äußeren Drittel der Milchstraße. Die Sonne ist ein Zwergstern (Gelber Zwerg), der sich im Entwicklungsstadium der Hauptreihe befindet. Sie enthält 99,86 % der Masse, jedoch nur ca. 0,5 % des Drehimpulses des Sonnensystems. Ihr Durchmesser ist mit 1,4 Millionen Kilometern etwa 110-mal so groß wie der der Erde. Die Oberfläche der Sonne zeigt eine wechselnde Zahl von Sonnenflecken, die in Zusammenhang mit starken Magnetfeldern stehen. Sie werden neben weiteren Phänomenen als Sonnenaktivität bezeichnet. ", "Güneş, Güneş Sistemi'nin merkezinde yer alan yıldızdır. Güneş kendi etrafında dönme hareketini yaparken Samanyolu Galaksisi etrafında dolanır. Orta büyüklükte bir yıldız olan Güneş, tek başına Güneş Sistemi kütlesinin % 99,8'ini oluşturur. Geriye kalan kütle Güneş'in çevresinde dönen gezegenler, asteroitler, gök taşları, kuyruklu yıldızlar ve kozmik tozlardan oluşur. Gün ışığı şeklinde Güneş'ten yayılan enerji Dünya üzerindeki hayatın hemen hemen tamamının var olmasını sağlar ve Dünya'nın iklimi ile hava durumunun üzerinde önemli etkilerde bulunur.", "The Sun is the star at the center of the Solar System. It is a massive, hot ball of plasma, inflated and heated by energy produced by nuclear fusion reactions at its core. Part of this energy is emitted from its surface as visible light, ultraviolet, and infrared radiation, providing most of the energy for life on Earth. The Sun has been an object of veneration in many cultures. It has been a central subject for astronomical research since antiquity." ],
            Bild : [ "https://www.weltderphysik.de/fileadmin/_processed_/e/2/csm_20120511_Sonnenteaser_NASA_34e57b6e01.png", "https://www.weltderphysik.de/fileadmin/_processed_/6/5/csm_20230913_Sonne_NASA_4ddb76b011.jpeg" ],
            Link : [ "https://de.wikipedia.org/wiki/Sonne" ]
        },
        // 1
        {
            Titel : [ "Merkur", "Merkür", "Mercury" ],
            Text : [ "Der Merkur ist mit einem Durchmesser von knapp 4880 Kilometern der kleinste, mit einer durchschnittlichen Sonnenentfernung von etwa 58 Millionen Kilometern der sonnennächste und somit auch schnellste Planet im Sonnensystem. Er hat mit einer maximalen Tagestemperatur von rund +430 °C und einer Nachttemperatur bis −170 °C die größten Oberflächen-Temperaturschwankungen aller Planeten. ", "Merkür, Güneş Sistemi'ndeki en küçük ve Güneş'e en yakın gezegen.[a] Yaklaşık 88 Dünya gününe eşit yörünge süresi ile yörüngesinde Güneş Sistemi'ndeki diğer tüm gezegenlerden daha hızlı devinir. Kendi ekseni çevresindeki dönüşünü yaklaşık 59 günde tamamlar. Bilinen hiç doğal uydusu yoktur. Adını tanrıların habercisi Roma tanrısı Merkür'den alır. ", "Mercury is the first planet from the Sun and the smallest in the Solar System. In English, it is named after the Roman god Mercurius (Mercury), god of commerce and communication, and the messenger of the gods. Mercury is classified as a terrestrial planet, with roughly the same surface gravity as Mars. The surface of Mercury is heavily cratered, as a result of countless impact events that have accumulated over billions of years. Its largest crater, Caloris Planitia, has a diameter of 1,550 km (960 mi) and one-third the diameter of the planet (4,880 km or 3,030 mi). Similarly to the Earth's Moon, Mercury's surface displays an expansive rupes system generated from thrust faults and bright ray systems formed by impact event remnants." ],
            Bild : [ "https://www.fr.de/assets/images/28/513/28513864-die-oberflaeche-des-planeten-merkur-ist-von-kratern-und-einschlagsstellen-uebersaet-durch-die-meteoriten-einschlaege-koennten-diamanten-entstanden-2yec.jpg", "https://www.scinexx.de/wp-content/uploads/m/e/merkurmagnetg.jpg" ],
            Link : [ "https://de.wikipedia.org/wiki/Merkur_(Planet)", "https://de.wikipedia.org/wiki/Merkurpositionen" ]
        },
        // 2
        {
            Titel : [ "Venus", "Venüs", "Venus" ],
            Text : [ "Die Venus ist mit einer durchschnittlichen Sonnenentfernung von 108 Millionen Kilometern der zweitinnerste und mit einem Durchmesser von ca. 12.100 Kilometern der drittkleinste Planet des Sonnensystems. Sie zählt zu den vier erdähnlichen Planeten, die auch terrestrische oder Gesteinsplaneten genannt werden.", "Venüs, Güneş Sistemi'nde Güneş'e uzaklık bakımından ikinci sıradaki, sıcaklık bakımından ise birinci sıradaki gezegendir. Güneşe uzaklık bakımından ikinci sırada olmasına rağmen en sıcak gezegen olmasının nedeni de atmosferinin gelen güneş ışınlarının dışarı çıkmasına izin vermemesidir. Ayrıca Zühre, Çolpan veya Çoban Yıldızı olarak da bilinir. Bu gezegen adını Eski Roma tanrıçası Venüs (Eski Yunan Mitolojisi'nde Afrodit)'ten almıştır. Venüs'ün astronomik sembolü ise kadınlık sembolü ile aynıdır. Venüs, kendi ekseni etrafında, Güneş Sistemi'ndeki diğer tüm gezegenlerin aksi istikametinde döner.[13] Güneş etrafındaki dönüşünü 224,7 Dünya gününde tamamlar.", "Venus is the second planet from the Sun. It is a terrestrial planet and is the closest in mass and size to its orbital neighbour Earth. Venus is notable for having the densest atmosphere of the terrestrial planets, composed mostly of carbon dioxide with a thick, global sulfuric acid cloud cover. At the surface it has a mean temperature of 737 K (464 °C; 867 °F) and a pressure of 92 times that of Earth's at sea level. These conditions are extreme enough to compress carbon dioxide into a supercritical state close to Venus's surface." ],
            Bild : [ "https://www.fr.de/assets/images/23/965/23965743-die-venus-ist-eine-gluthoelle-nun-haben-forscher-in-ihrer-atmosphaere-ein-gas-entdeckt-das-moeglicherweise-von-mikroben-produziert-wurde-gibt-es-auf-1bec.jpg", "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2005/08/cutaway_view_of_possible_internal_structure_of_venus/10044098-2-eng-GB/Cutaway_view_of_possible_internal_structure_of_Venus_pillars.jpg" ]
        },
        // 3
        {
            Titel : [ "Erde", "Dünya", "Earth" ],
            Text : [ "Die Erde ist der dichteste, fünftgrößte und der Sonne drittnächste Planet des Sonnensystems. Sie ist Ursprungsort und Heimat aller bekannten Lebewesen. Ihr Durchmesser beträgt mehr als 12.700 Kilometer und ihr Alter etwa 4,6 Milliarden Jahre. Nach ihrer vorherrschenden geochemischen Beschaffenheit wurde der Begriff der „erdähnlichen Planeten“ geprägt. Das astronomische Symbol der Erde ist ♁ oder 🜨.[4", "Dünya veya Yerküre,[d] Güneş Sistemi'nde Güneş'e en yakın üçüncü gezegen olup şu an için üzerinde yaşam ve sıvı su barındırdığı kesin olarak bilinen tek astronomik cisimdir. Radyometrik tarihleme ve diğer kanıtlara göre 4,55 milyar yıldan fazla bir süre önce oluşmuştur. Dünya'nın yer çekimi, uzaydaki diğer nesnelerle, özellikle Güneş'le ve tek doğal uydusu Ay'la etkileşime girer. Dünya'nın Güneş'in etrafındaki yörüngesi, 365,256 güneş günü, yani bir yıldız yılı sürer. Bu süre içerisinde Dünya, kendi ekseni etrafında 366,265 kez döner.[e]", "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses within Earth's land hemisphere. Most of Earth's land is somewhat humid and covered by vegetation, while large sheets of ice at Earth's polar deserts retain more water than Earth's groundwater, lakes, rivers and atmospheric water combined. Earth's crust consists of slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Earth has a liquid outer core that generates a magnetosphere capable of deflecting most of the destructive solar winds and cosmic radiation." ],
            Bild : [ "https://www.kindernetz.de/wissen/1653529189347%2Cdie-erde-bild-100~_v-1x1@2dL_-029cdd853d61a51824ed2ee643deeae504b065c1.jpg", "https://www.planet-schule.de/mm/die-erde/Barrierefrei/pages/img/img_1408352549776_0.jpg" ]
        },
        // 4
        {
            Titel : [ "Mars", "Mars", "Mars" ],
            Text : [ "Der Mars ist, von der Sonne aus gezählt, der vierte Planet im Sonnensystem und der äußere Nachbar der Erde. Er zählt zu den erdähnlichen (terrestrischen) Planeten. Sein Durchmesser ist mit knapp 6800 Kilometern etwa halb so groß wie der der Erde und sein Volumen beträgt gut ein Siebtel des Erdvolumens, womit der Mars nach dem Merkur der zweitkleinste Planet des Sonnensystems ist. Er weist eine vielfältige Geologie sowie die höchsten Vulkane des Sonnensystems auf. Mit einer durchschnittlichen Entfernung von 228 Millionen Kilometern ist er rund 1,5-mal so weit von der Sonne entfernt wie die Erde.", "Mars (eski Türkçede Bakır Sokım,[15] Merih[16]), Güneş Sistemi'nin Güneş'ten itibaren dördüncü gezegeni. Roma mitolojisindeki savaş tanrısı Mars'a ithafen adlandırılmıştır. Yüzeyindeki yaygın demir oksitten dolayı kızılımsı bir görünüme sahip olduğu için 'Kızıl Gezegen' olarak da bilinmektedir.", "Mars is the fourth planet from the Sun. The surface of Mars is orange-red because it is covered in iron(III) oxide dust, giving it the nickname 'the Red Planet'. Mars is among the brightest objects in Earth's sky and its high-contrast albedo features have made it a common subject for telescope viewing. It is classified as a terrestrial planet and is the second smallest of the Solar System's planets with a diameter of 6,779 km (4,212 mi). In terms of orbital motion, a Martian solar day (sol) is equal to 24.5 hours and a Martian solar year is equal to 1.88 Earth years (687 Earth days). Mars has two natural satellites that are small and irregular in shape: Phobos and Deimos." ],
            Bild : [ "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg", "https://cdn.mos.cms.futurecdn.net/EjjVxJ8DCca2MVc8qBGtXK-1200-80.jpg" ]
        },
        {
            Titel : [ "Jupiter", "Jüpiter", "Jupiter" ],
            Text : [ "Jupiter ist mit einem Äquatordurchmesser von rund 143.000 Kilometern der größte Planet des Sonnensystems. Mit einer durchschnittlichen Entfernung von 778 Millionen Kilometern ist er von der Sonne aus gesehen der fünfte Planet. Er ist nach dem römischen Hauptgott Jupiter benannt.", "Jüpiter gerek çap gerekse kütle açısından Güneş Sistemi'ndeki en büyük gezegendir. Nispeten düşük olan yoğunluğu (suyun yoğunluğunun 1,33 katı), gezegenin akışkan yapısı ve kendi çevresindeki dönüş hızının yüksekliği nedeniyle, Satürn kadar olmasa da ekvatorda geniş, kutuplarda basık elipsoid görünüme sahiptir. Yansıtabilirlik derecesi (albedo) 0,52 olan gezegen, böylece yüzeyine düşen Güneş ışığının yarıdan fazlasını görünür tarafta yansıtmaktadır.[17]", "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun. Jupiter orbits the Sun at a distance of 5.20 AU (778.5 Gm) with an orbital period of 11.86 years." ],
            Bild : [ "https://firstonthesun.com/wp-content/uploads/2023/06/Der-Planet-Jupiter-768x768.jpg", "https://cdn.britannica.com/42/190542-050-1E5261C2/Diagram-cloud-structure-Jupiter-core.jpg" ]
        },
        {
            Titel : [ "Saturn", "Satürn", "Saturn" ],
            Text : [ "Der Saturn ist von der Sonne aus gesehen der sechste Planet des Sonnensystems und mit einem Äquatordurchmesser von etwa 120.500 Kilometern (9,5-facher Erddurchmesser) nach Jupiter der zweitgrößte. Mit 95 Erdmassen hat er jedoch nur 30 % der Masse Jupiters. Wegen seines auffallenden und schon im kleinen Fernrohr sichtbaren Ringsystems wird er oft auch der Ringplanet genannt, obwohl auch bei den anderen drei Gasplaneten Ringsysteme gefunden wurden.", "Satürn (eski Türkçede Sekentir(tiz),[17] Arapçada Zühal[18]), Güneş Sistemi'nin Güneş'e yakınlık sırasına göre 6. gezegenidir. Büyüklük açısından Jüpiter'den sonra ikinci sırada gelir. Adını Yunan mitolojisindeki Kronos'tan alır. Çıplak gözle izlenebilen 5 gezegenden biri (diğerleri: Merkür, Venüs, Mars ve Jüpiter) olarak eski çağlardan beri insanoğlunun dikkatini çekmiştir. Büyük ölçüde hidrojen ve helyumdan oluşmakta ve gaz devleri sınıfına girmektedir.", "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine-and-a-half times that of Earth.[26][27] It has only one-eighth the average density of Earth, but is over 95 times more massive.[28][29][30] Even though Saturn is nearly the size of Jupiter, Saturn has less than one-third of Jupiter's mass. Saturn orbits the Sun at a distance of 9.59 AU (1,434 million km) with an orbital period of 29.45 years." ],
            Bild : [ "https://sonnen-sturm.info/wp-content/uploads/2018/09/Sonnensystem-Planet-Saturn.jpg", "https://thumbs.dreamstime.com/z/saturn-innerhalb-der-struktur-konzept-d-f%C3%BCr-illustration-106690561.jpg" ]
        },
        {
            Titel : [ "Uranus", "Uranüs", "Uranus" ],
            Text : [ "Der Uranus (Latinisierung von altgriechisch οὐρανός uranós, deutsch ‚Himmel‘)[3] ist von der Sonne aus mit einer durchschnittlichen Sonnenentfernung von 2,9 Milliarden Kilometern der siebte Planet im Sonnensystem und wird zu den Eisriesen gerechnet. Er wurde am 13. März 1781 von Wilhelm Herschel entdeckt und ist nach dem griechischen Himmelsgott Uranos benannt. Er ist damit als einziger Planet nach einem Gott der griechischen Götterwelt benannt.", "Uranüs, Güneş Sisteminin Güneş'ten uzaklık sıralamasına göre 7. gezegenidir.[18] Çap açısından Jüpiter ve Satürn'den sonra üçüncü, kütle açısındansa bu iki gezegen ve Neptün'ün ardından dördüncü sırada gelir. Adını Yunan mitolojisindeki gökyüzü tanrısı Uranos'tan (Yunanca'da Οὐρανός, Latinceleştirilmiş şekli ile Uranus) alır.[19] 1781 yılında William Herschel tarafından keşfedilmiştir ve Buz devi sınıfına girer.", "Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which in astronomy is called 'ice' or volatiles. The planet's atmosphere has a complex layered cloud structure and has the lowest minimum temperature of 49 K (−224 °C; −371 °F) out of all the Solar System's planets. " ],
            Bild : [ "https://www.ardalpha.de/wissen/weltall/sternenhimmel/planet-uranus-planeten-100~_v-img__16__9__xl_-d31c35f8186ebeb80b0cd843a7c267a0e0c81647.jpg?version=7786b", "https://pages.uoregon.edu/jschombe/images/uranus_interior.jpg" ]
        },
        {
            Titel : [ "Neptun", "Neptün", "Neptune" ],
            Text : [ "Der Neptun ist der achte und äußerste bekannte Planet unseres Sonnensystems. Er wurde 1846 aufgrund von Berechnungen aus Bahnstörungen des Uranus durch den französischen Mathematiker Urbain Le Verrier von dem deutschen Astronomen Johann Gottfried Galle entdeckt. Neptun ist durchschnittlich 4,5 Milliarden Kilometer von der Sonne entfernt. Von der Erde aus hat er einen scheinbaren Durchmesser von ca. 2 Winkelsekunden. Mit einem Durchmesser von knapp 50.000 Kilometern hat Neptun fast den vierfachen Erddurchmesser und das rund 58-fache Erdvolumen. Nach Jupiter, Saturn und Uranus ist Neptun der viertgrößte Planet des Sonnensystems.", "Neptün, Güneş Sistemi'nin sekizinci, Güneş'e en uzak ve katı yüzeyi bulunmayan gezegenidir. Gaz gezegenler sınıfında yer alan Neptün, Jüpiter ve Satürn'e kıyasla farklı yapısından ötürü buz devi olarak da sınıflandırılır. Güneş sisteminin Uranüs ile beraber en soğuk iki gezegeninden biridir. Katı yüzeye sahip olmamakla birlikte gezegenin dış katmanı genel olarak hidrojen ve helyumdan oluşur. İç katmanında ise gezegenin kütlesinin çoğu kayalık bir çekirdeğin üzerindeki sıcak ve yoğun maddelerden (su, metan ve amonyak) oluşur.[16] Adını Roma deniz tanrısı Neptunus'ten alan gezegen, Güneş Sistemi'nde çapına göre en büyük dördüncü, kütlesine göre ise en büyük üçüncü gezegendir. Dünya'dan 17 kat fazla kütlesiyle, ikizi sayılabilecek Uranüs'ten biraz daha büyük ve daha yoğundur.[17] Güneş'e olan uzaklığı ortalama 30 Astronomik birimdir.", "Neptune is the eighth and farthest known planet from the Sun. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than fellow ice giant Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. Being composed primarily of gases and liquids, it has no well-defined solid surface. The planet orbits the Sun once every 164.8 years at an orbital distance of 30.1 astronomical units (4.5 billion kilometres; 2.8 billion miles). It is named after the Roman god of the sea and has the astronomical symbol ♆, representing Neptune's trident." ],
            Bild : [ "https://www.ardalpha.de/wissen/weltall/sternenhimmel/planet-neptun-planeten-100~_v-img__16__9__l_-1dc0e8f74459dd04c91a0d45af4972b9069f1135.jpg?version=e12ca", "https://www.astropage.eu/wp-content/uploads/2016/09/neptun_aufbau.jpg" ]
        },
        {
            //        0        1         2        --- 0 De, 1 Tr, 2 Us
            Titel : [ "Pluto", "Plüton", "Pluto" ],
            //        0        1         2        --- 0 De, 1 Tr, 2 Us
            Text : [ "Pluto ist der größte und zweitmassivste bekannte Zwergplanet des Sonnensystems und das am längsten bekannte Objekt des Kuipergürtels. Er bewegt sich auf einer noch exzentrischeren Bahn um die Sonne als der Planet Merkur. Sein Volumen entspricht etwa einem Drittel des Erdmondes.", "Plüton (küçük gezegen tanımı: 134340 Pluto; sembolleri: ⯓[13] veya ♇[14]), Kuiper Kuşağı'nda bulunan bir cüce gezegendir. Güneş Sistemi'nde bilinen en büyük cüce gezegen ve Neptün ötesi cisim[15] ve doğrudan Güneş etrafında dolanan en büyük on altıncı cisimdir. 2006 yılına dek gezegen olarak sınıflandırılmaktaydı. Plüton, bünyesinde birçok cisim barındıran Kuiper Kuşağı'nın en belirgin üyelerinden biridir.", "Pluto (minor-planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume, by a small margin, but is less massive than Eris. Like other Kuiper belt objects, Pluto is made primarily of ice and rock and is much smaller than the inner planets. Pluto has roughly one-sixth the mass of Earth's moon, and one-third its volume." ],
            //       0, 1
            Bild : [ "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/800px-Pluto_in_True_Color_-_High-Res.jpg", "https://images.fineartamerica.com/images-medium-large-5/1-structure-of-pluto-mikkel-juul-jensen.jpg" ]
        }
    ];
    // *** //
    for(let i = 0;i<neuarr.length;i++)
    {
        u.innerHTML+=`<li onclick = "icerigiCagir(${i})">${neuarr[i].Titel[dilKodu]}</li>`;
    }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Wird in Sidebar auf einen Eintrag geklickt, dann wird
// dessen Positionsnummer im Array "neuarr" mit dieser
// Funktion zusammen aufgerufen. Die Funktion geht in die
// entsprechenden Eintrag in "neuarr" und ließt den Titel
// sowie den Text und die Bilder für jede Sprache und
// schreibt sie in die passenden DIV's.
// - - - - - - - - - - - - - - - - - - - - - - - - - - //
function icerigiCagir(hangisi)
{
    let de = document.getElementById("de"); // Deutsche Inhalt --> 0
    let tr = document.getElementById("tr"); // Türkische Inhalt --> 1
    let us = document.getElementById("us"); // Englische Inhalt --> 2
    // *** //
    de.innerHTML = `
        <h3>${neuarr[hangisi].Titel[0]}</h3>
        <p>${neuarr[hangisi].Text[0]}</p>
        <img src = "${neuarr[hangisi].Bild[0]}" />
        <img src = "${neuarr[hangisi].Bild[1]}" />
    `;
    // *** //
    tr.innerHTML = `
        <h3>${neuarr[hangisi].Titel[1]}</h3>
        <p>${neuarr[hangisi].Text[1]}</p>
        <img src = "${neuarr[hangisi].Bild[0]}" />
        <img src = "${neuarr[hangisi].Bild[1]}" />
    `;
    // *** //
    us.innerHTML = `
        <h3>${neuarr[hangisi].Titel[2]}</h3>
        <p>${neuarr[hangisi].Text[2]}</p>
        <img src = "${neuarr[hangisi].Bild[0]}" />
        <img src = "${neuarr[hangisi].Bild[1]}" />
    `;
    // *** //
    // Falls der Eintag "Links" enthält, werden diese auf
    // der rechten Seite in "option-menu" hinzugefügt
    let o = document.querySelector(".option-menu > ul");
    // *** //
    o.innerHTML = "";
    // *** //
    for(let i = 0;i<neuarr[hangisi].Link.length;i++)
    {
        o.innerHTML+=`<li><a href = "${neuarr[hangisi].Link[i]}" target = "_blank">Link${i + 1}</a></li>`;
    }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Diese Funktion wechselt die Sprache der Seite
// - - - - - - - - - - - - - - - - - - - - - - - - - - //
function dilDegistir(dil)
{
    /*
        El de var üc adet DIV (de, tr, us). Her DIV'in CSS-Class-Listesi bulunuyor.
        Birinci DIV standard olarak "goster" sinifini kullaniyor. Diger iki DIV
        standard olarak "sakla" sinifini kullaniyor. Bir Dilden baska bir dile
        gecis yapilacagi zaman, gösterilmesi istenen dilin DIV kutusundan "sakla"
        sinifi kaldiririlir ve "goster" sinifi eklenir. Diger gizlenmesi öngörülen
        DIV'lerdende "goster" sinifi kaldirilir ve "sakla" sinifi eklenir.

        Bu sinif degisikligi sayesinde animasyon biciminde bir gecis saglanir.
    */
    let de = document.getElementById("de"); // DIV -> 0
    let tr = document.getElementById("tr"); // DIV -> 1
    let us = document.getElementById("us"); // DIV -> 2
    // *** //
    switch (dil)
    {
        case "de":
            dilKodu = 0;
            tr.classList.remove("goster");
            tr.classList.add("sakla");
            us.classList.remove("goster");
            us.classList.add("sakla");
            de.classList.remove("sakla");
            de.classList.add("goster");
            sidebarMenu();
            break;
        case "tr":
            dilKodu = 1;
            de.classList.remove("goster"); // Kaldir
            de.classList.add("sakla");     // Ekle
            us.classList.remove("goster"); // Kaldir
            us.classList.add("sakla");     // Ekle
            tr.classList.remove("sakla");  // Kaldir
            tr.classList.add("goster");    // Ekle
            sidebarMenu();
            break;
        case "us":
            dilKodu = 2;
            tr.classList.remove("goster");
            tr.classList.add("sakla");
            de.classList.remove("goster");
            de.classList.add("sakla");
            us.classList.remove("sakla");
            us.classList.add("goster");
            sidebarMenu();
            break;
        default:
            break;
    }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Diese Funktion erzeugt die Seite
// - - - - - - - - - - - - - - - - - - - - - - - - - - //
function MyneWebseite()
{
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // Verbindung zu BODY wird hergestellt, weil beim
    // ersten Laden der Seite, "body" noch leer ist
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    if(body === undefined)
    {
        body = document.getElementsByTagName("body"); // body = [ BODY ] -> Length = 1
    }
    // *** //
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // In den BODY wird ein HEADER geschreiben
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    body[0].innerHTML = "<header></header>";
    // *** //
    let menu = document.getElementsByTagName("header");
    // *** //
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // In den HEADER werden drei Flaggen (Deutschland,
    // Türkei und USA) hinzugefügt, die man klicken kann,
    // um die Sprache der Seite zu ändern
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    menu[0].innerHTML = `
        <img name='sprache' onclick = "dilDegistir('de')" />
        <img name='sprache' onclick = "dilDegistir('tr')" />
        <img name='sprache' onclick = "dilDegistir('us')" />`;
    // *** //
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // Die Bilder für die Flaggen werden geladen
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // *** //
    const bild = document.getElementsByName("sprache");
    // *** //
    const arr = ["flagge/de.png","flagge/tr.png","flagge/us.png"];
    // *** //
    for(let i = 0; i < bild.length; i++)
    {
        bild[i].src = arr[i];
    }
    // *** //
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // Unter dem HEADER wird ein MAIN hinzugefügt
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    body[0].innerHTML += "<main> </main>";
    let m = document.getElementsByTagName("main");
    // *** //
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // In das Main wird für jede Sprachversion des Inhalts
    // eine eigene DIV angelegt
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // *** //
    m[0].innerHTML = `
                        <div id ="de" class = "goster"></div>
                        <div id ="tr" class = "sakla"></div>
                        <div id ="us" class = "sakla"></div>
                    `;
    // *** //
    let de = document.getElementById("de");
    let tr = document.getElementById("tr");
    let us = document.getElementById("us");
    // *** //
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // Standardinhalt in allen drei Sprachen beim Besuch
    // der Seite, die als erstes erscheinen sollen,
    // wenn man keinen Inhalt explizit ausgewählt hat!
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // *** //
    de.innerHTML = `
        <h3>Saturnmond Titan</h3>
        <p>Titan (auch Saturn VI[7]) ist mit einem Durchmesser von 5150 Kilometern der größte Mond des Planeten Saturn, weshalb er nach dem Göttergeschlecht der Titanen benannt wurde. Er ist ein Eismond, nach Ganymed der zweitgrößte Mond im Sonnensystem und der einzige mit einer dichten Gashülle. </p>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Two_Halves_of_Titan.png/280px-Two_Halves_of_Titan.png" />
    `;
    // *** //
    tr.innerHTML = `
        <h3>Satrün gezegeninin Titan uydusu</h3>
        <p>Titan, Satürn'ün en büyük uydusu ve yoğun bir atmosferi olduğu bilinen tek doğal uydudur. Dünya dışında, yüzeyinde kararlı sıvı bulundurduğu kanıtlanan 2. gök cismi olan Titan'daki büyük su kütleleri gibi görünen okyanusların, metan gazının sıvı hali olduğu görülmüştür.</p>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Two_Halves_of_Titan.png/280px-Two_Halves_of_Titan.png" />
    `;
    // *** //
    us.innerHTML = `
        <h3>Saturn's moon Titan</h3>
        <p>Titan is the largest moon of Saturn and the second-largest in the Solar System. It is the only moon known to have an atmosphere denser than the Earth's, and is the only known object in space other than Earth on which clear evidence of stable bodies of surface liquid has been found.[16] Titan is one of the seven gravitationally rounded moons of Saturn and the second-most distant among them. Frequently described as a planet-like moon, Titan is 50% larger (in diameter) than Earth's Moon and 80% more massive. It is the second-largest moon in the Solar System after Jupiter's moon Ganymede, and is larger than Mercury, but only 40% as massive due to Mercury being made of mostly dense iron and rock, while a large portion of Titan is made of less-dense ice. </p>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Two_Halves_of_Titan.png/280px-Two_Halves_of_Titan.png" />
    `;
    // *** //
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // Eine DIV für die Menüleiste auf der linken Seite
    // - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // *** //
    menu[0].innerHTML += `
                <div class = "sidebar-menu">
                 <ul> </ul>
                </div>
                <div class = "option-menu">
                 <ul> </ul>
                </div>
    `;
    // *** //
    sidebarMenu();
}