/**
 * @namespace example
 * @class Browser
 * @constructor
 */
export class Browser
{
	/**
	 * List of tablet devices.
	 *
	 * @var array
	 */
	protected static tabletDevices:Array<string> = [
		'iPad', 'iPad|iPad.*Mobile', // @todo, check for mobile friendly emails topic.
		'NexusTablet', '^.*Android.*Nexus(((?:(?!Mobile))|(?:(\s(7|10).+))).)*$',
		'SamsungTablet', 'SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-I9205|GT-P5200|GT-P5210|SM-T311|SM-T310|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500',
		// @reference, http,//www.labnol.org/software/kindle-user-agent-string/20378/
		'Kindle', 'Kindle|Silk.*Accelerated|Android.*\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE)\b',
		// Only the Surface tablets with Windows RT are considered mobile.
		// @ref, http,//msdn.microsoft.com/en-us/library/ie/hh920767(v=vs.85).aspx
		'SurfaceTablet', 'Windows NT [0-9.]+; ARM;',
		// @ref, http,//shopping1.hp.com/is-bin/INTERSHOP.enfinity/WFS/WW-USSMBPublicStore-Site/en_US/-/USD/ViewStandardCatalog-Browse?CatalogCategoryID=JfIQ7EN5lqMAAAEyDcJUDwMT
		'HPTablet', 'HP Slate 7|HP ElitePad 900|hp-tablet|EliteBook.*Touch',
		// @note, watch out for PadFone, see #132
		'AsusTablet', '^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101',
		'BlackBerryTablet', 'PlayBook|RIM Tablet',
		'HTCtablet', 'HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200',
		'MotorolaTablet', 'xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617',
		'NookTablet', 'Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2',
		// @ref, http,//www.acer.ro/ac/ro/RO/content/drivers
		// @ref, http,//www.packardbell.co.uk/pb/en/GB/content/download (Packard Bell is part of Acer)
		// @ref, http,//us.acer.com/ac/en/US/content/group/tablets
		// @note, Can conflict with Micromax and Motorola phones codes.
		'AcerTablet', 'Android.*; \b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810)\b|W3-810',
		// @ref, http,//eu.computers.toshiba-europe.com/innovation/family/Tablets/1098744/banner_id/tablet_footerlink/
		// @ref, http,//us.toshiba.com/tablets/tablet-finder
		// @ref, http,//www.toshiba.co.jp/regza/tablet/
		'ToshibaTablet', 'Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO',
		// @ref, http,//www.nttdocomo.co.jp/english/service/developer/smart_phone/technical_info/spec/index.html
		'LGTablet', '\bL-06C|LG-V900|LG-V909\b',
		'FujitsuTablet', 'Android.*\b(F-01D|F-05E|F-10D|M532|Q572)\b',
		// Prestigio Tablets http,//www.prestigio.com/support
		'PrestigioTablet', 'PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD',
		// @ref, http,//support.lenovo.com/en_GB/downloads/default.page?#
		'LenovoTablet', 'IdeaTab|S2110|S6000|K3011|A3000|A1000|A2107|A2109|A1107|ThinkPad([ ]+)?Tablet',
		'YarvikTablet', 'Android.*(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468)',
		'MedionTablet', 'Android.*\bOYO\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB',
		'ArnovaTablet', 'AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT',
		// IRU.ru Tablets http,//www.iru.ru/catalog/soho/planetable/
		'IRUTablet', 'M702pro',
		'MegafonTablet', 'MegaFon V9|\bZTE V9\b|Android.*\bMT7A\b',
		// @ref, http,//www.e-boda.ro/tablete-pc.html
		'EbodaTablet', 'E-Boda (Supreme|Impresspeed|Izzycomm|Essential)',
		// @ref, http,//www.allview.ro/produse/droseries/lista-tablete-pc/
		'AllViewTablet', 'Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)',
		// @reference, http,//wiki.archosfans.com/index.php?title=Main_Page
		'ArchosTablet', '\b(101G9|80G9|A101IT)\b|Qilive 97R',
		// @ref, http,//www.ainol.com/plugin.php?identifier=ainol&module=product
		'AinolTablet', 'NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark',
		// @todo, inspect http,//esupport.sony.com/US/p/select-system.pl?DIRECTOR=DRIVER
		// @ref, Readers http,//www.atsuhiro-me.net/ebook/sony-reader/sony-reader-web-browser
		// @ref, http,//www.sony.jp/support/tablet/
		'SonyTablet', 'Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201',
		// @ref, db + http,//www.cube-tablet.com/buy-products.html
		'CubeTablet', 'Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT',
		// @ref, http,//www.cobyusa.com/?p=pcat&pcat_id=3001
		'CobyTablet', 'MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010',
		// @ref, http,//www.match.net.cn/products.asp
		'MIDTablet', 'M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733',
		// @ref, http,//pdadb.net/index.php?m=pdalist&list=SMiT (NoName Chinese Tablets)
		// @ref, http,//www.imp3.net/14/show.php?itemid=20454
		'SMiTTablet', 'Android.*(\bMID\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)',
		// @ref, http,//www.rock-chips.com/index.php?do=prod&pid=2
		'RockChipTablet', 'Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A',
		// @ref, http,//www.fly-phone.com/devices/tablets/ ; http,//www.fly-phone.com/service/
		'FlyTablet', 'IQ310|Fly Vision',
		// @ref, http,//www.bqreaders.com/gb/tablets-prices-sale.html
		'bqTablet', 'bq.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant)|Maxwell.*Lite|Maxwell.*Plus',
		// @ref, http,//www.huaweidevice.com/worldwide/productFamily.do?method=index&directoryId=5011&treeId=3290
		// @ref, http,//www.huaweidevice.com/worldwide/downloadCenter.do?method=index&directoryId=3372&treeId=0&tb=1&type=software (including legacy tablets)
		'HuaweiTablet', 'MediaPad|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim',
		// Nec or Medias Tab
		'NecTablet', '\bN-06D|\bN-08D',
		// Pantech Tablets, http,//www.pantechusa.com/phones/
		'PantechTablet', 'Pantech.*P4100',
		// Broncho Tablets, http,//www.broncho.cn/ (hard to find)
		'BronchoTablet', 'Broncho.*(N701|N708|N802|a710)',
		// @ref, http,//versusuk.com/support.html
		'VersusTablet', 'TOUCHPAD.*[78910]|\bTOUCHTAB\b',
		// @ref, http,//www.zync.in/index.php/our-products/tablet-phablets
		'ZyncTablet', 'z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900',
		// @ref, http,//www.positivoinformatica.com.br/www/pessoal/tablet-ypy/
		'PositivoTablet', 'TB07STA|TB10STA|TB07FTA|TB10FTA',
		// @ref, https,//www.nabitablet.com/
		'NabiTablet', 'Android.*\bNabi',
		'KoboTablet', 'Kobo Touch|\bK080\b|\bVox\b Build|\bArc\b Build',
		// French Danew Tablets http,//www.danew.com/produits-tablette.php
		'DanewTablet', 'DSlide.*\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\b',
		// Texet Tablets and Readers http,//www.texet.ru/tablet/
		'TexetTablet', 'NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE',
		// @note, Avoid detecting 'PLAYSTATION 3' as mobile.
		'PlaystationTablet', 'Playstation.*(Portable|Vita)',
		// @ref, http,//www.galapad.net/product.html
		'GalapadTablet', 'Android.*\bG1\b',
		// @ref, http,//www.micromaxinfo.com/tablet/funbook
		'MicromaxTablet', 'Funbook|Micromax.*\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\b',
		// http,//www.karbonnmobiles.com/products_tablet.php
		'KarbonnTablet', 'Android.*\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\b',
		// @ref, http,//www.myallfine.com/Products.asp
		'AllFineTablet', 'Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide',
		// @ref, http,//www.proscanvideo.com/products-search.asp?itemClass=TABLET&itemnmbr=
		'PROSCANTablet', '\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\b',
		// @ref, http,//www.yonesnav.com/products/products.php
		'YONESTablet', 'BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026',
		// @ref, http,//www.cjshowroom.com/eproducts.aspx?classcode=004001001
		// China manufacturer makes tablets for different small brands (eg. http,//www.zeepad.net/index.html)
		'ChangJiaTablet', 'TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503',
		// @ref, http,//www.gloryunion.cn/products.asp
		// @ref, http,//www.allwinnertech.com/en/apply/mobile.html
		// @ref, http,//www.ptcl.com.pk/pd_content.php?pd_id=284 (EVOTAB)
		// aka. Cute or Cool tablets. Not sure yet, must research to avoid collisions.
		'GUTablet', 'TX-A1301|TX-M9002|Q702', // A12R|D75A|D77|D79|R83|A95|A106C|R15|A75|A76|D71|D72|R71|R73|R77|D82|R85|D92|A97|D92|R91|A10F|A77F|W71F|A78F|W78F|W81F|A97F|W91F|W97F|R16G|C72|C73E|K72|K73|R96G'
		// @ref, http,//www.pointofview-online.com/showroom.php?shop_mode=product_listing&category_id=118
		'PointOfViewTablet', 'TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10',
		// @ref, http,//www.overmax.pl/pl/katalog-produktow,p8/tablety,c14/
		// @todo, add more tests.
		'OvermaxTablet', 'OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)',
		// @ref, http,//hclmetablet.com/India/index.php
		'HCLTablet', 'HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync',
		// @ref, http,//www.edigital.hu/Tablet_es_e-book_olvaso/Tablet-c18385.html
		'DPSTablet', 'DPS Dream 9|DPS Dual 7',
		// @ref, http,//www.visture.com/index.asp
		'VistureTablet', 'V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10',
		// @ref, http,//www.mijncresta.nl/tablet
		'CrestaTablet', 'CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989',
		// MediaTek - http,//www.mediatek.com/_en/01_products/02_proSys.php?cata_sn=1&cata1_sn=1&cata2_sn=309
		'MediatekTablet', '\bMT8125|MT8389|MT8135|MT8377\b',
		// Concorde tab
		'ConcordeTablet', 'Concorde([ ]+)?Tab|ConCorde ReadMan',
		// GoClever Tablets - http,//www.goclever.com/uk/products,c1/tablet,c5/
		'GoCleverTablet', 'GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042',
		// Modecom Tablets - http,//www.modecom.eu/tablets/portal/
		'ModecomTablet', 'FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003',
		// @ref, http,//www.tesco.com/direct/hudl/
		'Hudl', 'Hudl HT7S3',
		// @ref, http,//www.telstra.com.au/home-phone/thub-2/
		'TelstraTablet', 'T-Hub2',
		'GenericTablet', 'Android.*\b97D\b|Tablet(?!.*PC)|ViewPad7|BNTV250A|MID-WCDMA|LogicPD Zoom2|\bA7EB\b|CatNova8|A1_07|CT704|CT1002|\bM721\b|rk30sdk|\bEVOTAB\b|SmartTabII10|SmartTab10|M758A|ET904'
	];

	protected static matchAgainstString(rules:Array<any>, userAgent:string):boolean
	{
		for(var i = 0; i < rules.length; i++)
		{
			if(i % 2 == 0)
			{
				if(Browser.match(rules[i + 1], userAgent))
				{
					return true;
				}
			}
		}

		return false;
	}

	protected static match(regex:string, userAgent:string):boolean
	{
		regex = regex.replace('/', '\/');
		var regexPattern = new RegExp(regex, 'gi');
		return userAgent.match(regexPattern) == null ? false : true;
	}

	/**
	 * @property {string} userAgent
	 */
	public userAgent:string;

	/**
	 * @property {string} platform
	 */
	public platform:string;

	/**
	 * @property {string} name
	 */
	public name:string;

	/**
	 * @property {number} version
	 */
	public version:number;

	/**
	 *
	 * @type {boolean} ie
	 */
	public ie:boolean = false;

	/**
	 *
	 * @type {boolean}
	 */
	public chrome:boolean = false;

	/**
	 *
	 * @type {boolean}
	 */
	public firefox:boolean = false;


	/**
	 *
	 * @type {boolean}
	 */
	public ios:boolean = false;

	/**
	 *
	 * @type {boolean}
	 */
	public android:boolean = false;

	protected _isTablet:boolean = null;

	/**
	 * @class Browser
	 * @constructor
	 * @param {string} userAgent
	 * @param {string} platform
	 */
	constructor(userAgent:string = navigator ? navigator.userAgent || navigator.vendor || window['opera'] : '', platform:string = navigator ? navigator.platform : null)
	{
		var data = this.parseUserAgent(userAgent, platform);

		this.userAgent = userAgent;
		this.platform = data.platform;
		this.name = data.name;
		this.version = data.version;

		// ie11 fix
		if(this.name !== 'firefox' && this.name !== 'chrome' && this.name !== 'safari' && !window['ActiveXObject'] && this.name != 'ie')
		{
			this.name = 'ie';
			this.version = 11;
		}

		if(this.name == 'ie')
		{
			this.version = document['documentMode'];
		}

		if(this.platform == 'ios')
		{
			this.ios = true;
		}

		if(this.platform == 'android')
		{
			this.android = true;
		}

		if(this.name == 'ie')
		{
			this.ie = true;
		}

		if(this.name == 'chrome')
		{
			this.chrome = true;
		}

		if(this.name == 'firefox')
		{
			this.firefox = true;
		}
	}

	protected parseUserAgent(userAgent:string, platform:string):any
	{
		var ua = userAgent.toLowerCase();
		platform = platform ? platform.toLowerCase() : '';

		var userAgentArray = ua.match(/(opera|ie|firefox|chrome|trident|crios|version)[\s\/:]([\w\d\.]+)?.*?(safari|(?:rv[\s\/:]|version[\s\/:])([\w\d\.]+)|$)/) || [null, 'unknown', 0];

		if(userAgentArray[1] == 'trident')
		{
			userAgentArray[1] = 'ie';

			if(userAgentArray[4])
			{
				userAgentArray[2] = userAgentArray[4];
			}
		}
		else if(userAgentArray[1] == 'crios')
		{
			userAgentArray[1] = 'chrome';
		}

		platform = ua.match(/ip(?:ad|od|hone)/) ? 'ios' : (ua.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || ['other'])[0];

		if(platform == 'win')
		{
			platform = 'windows';
		}

		return {
			name: '' + ((userAgentArray[1] == 'version') ? userAgentArray[3] : userAgentArray[1]),
			version: parseFloat(<string> (( userAgentArray[1] == 'opera' && userAgentArray[4]) ? userAgentArray[4] : userAgentArray[2])),
			platform: '' + platform
		};
	}

	/**
	 * @method isTablet
	 * @returns {boolean}
	 */
	public isTablet():boolean
	{
		if(this._isTablet === null)
		{
			this._isTablet = Browser.matchAgainstString(Browser.tabletDevices, this.userAgent);
		}

		return this._isTablet;
	}

	/**
	 * @method isMobile
	 * @returns {boolean}
	 */
	public isMobile():boolean
	{
		return this.platform == 'ios' || this.platform == 'android';
	}

	/**
	 * @method isPhone
	 * @returns {boolean}
	 */
	public isPhone():boolean
	{
		return this.isMobile() && !this.isTablet();
	}

	/**
	 * @method isIPad
	 * @returns {boolean}
	 */
	public isIPad():boolean
	{
		return !!this.userAgent.match(/iPad/i);
	}

	/**
	 * @method isIPhone
	 * @returns {boolean}
	 */
	public isIPhone():boolean
	{
		return !!this.userAgent.match(/iPhone/i);
	}
}
