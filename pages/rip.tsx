import InfoGrid from "@components/InfoGrid";
import Image from "next/image";
import MainPNG from "public/rip/main.png";

// prettier-ignores
const players = {
	admin: [
		{ uuid: "8cf3012e88844ea89f2ea4141e9ce7d9", name: "MrMelon54" },
		{ uuid: "d9370c8f0b344055929a12c05d4263ca", name: "index_57" },
		{ uuid: "9a63248e6dbb45f1aacd4968d8fdc612", name: "Thegamingkikicat" },
		{ uuid: "5ee588ed80554f6bafc269c301c0ef70", name: "Rotor_" },
		{ uuid: "e5f0b3431e39463a96b950b38a058974", name: "aGEEKdude" },
		{ uuid: "35590dc7c3e14103be2927455e4e7715", name: "maxelden1" },
		{ uuid: "190fe4a5107a4d398a62c58ab2069f1d", name: "MadShinoa" }
	],
	current: [
		{ uuid: "e5f0b3431e39463a96b950b38a058974", name: "aGEEKdude" },
		{ uuid: "bce7b25c6a2f49069e2bf8c6fb0e8cd2", name: "JonDoe19821982" },
		{ uuid: "b493de79c5d54027b585eb1d290e81a0", name: "Carterdontexist" },
		{ uuid: "5db7151e3f994ad88e3eccdce1e2cd00", name: "FormulaRaichu" },
		{ uuid: "07cb3dfdee1d4ecfb5b5f70d317a82eb", name: "Siuolplex" },
		{ uuid: "ade4fbde69e54bae88b9d9fd113a5e86", name: "FW_Wolf" },
		{ uuid: "0ab7aefe7d3341b4bd43c8fef63a4738", name: "arpil" },
		{ uuid: "e67eb09ab5af4822b7569065cdc49913", name: "IThundxr" },
		{ uuid: "24a2c9fc01e7408db7050c84b06021b7", name: "SomethingShard" },
		{ uuid: "419de284fcba468298ab36380ffebacc", name: "TrasJ" },
		{ uuid: "35590dc7c3e14103be2927455e4e7715", name: "maxelden1" },
		{ uuid: "f921cf9d66bd456ea774a2d846a44432", name: "nv_Takeout" },
		{ uuid: "1f5f56a8a90f40a9a758521b87427cf2", name: "iSophes" },
		{ uuid: "190fe4a5107a4d398a62c58ab2069f1d", name: "MadShinoa" },
		{ uuid: "6aaeb0818786481ca6c3e7505647a004", name: "IMS212" },
		{ uuid: "f14fba03fe1f4bdf953fe04f3d99218d", name: "mavrixen" },
		{ uuid: "7b888d55dc304a4c9cc8c7073024f286", name: "Bubblie01" },
		{ uuid: "c4f546f62dcd4c68afc5425444f3115d", name: "rcml" },
		{ uuid: "aef34e8aacc64725908f2120ec80b48d", name: "Amaterasu7" },
		{ uuid: "5b957f69d77a4a178c1d9a2cceab76bd", name: "Hajonk" },
		{ uuid: "8a1762fa2b7845a8a3ef140568d0f593", name: "Snowyminecrafter" },
		{ uuid: "a3f972a5e26d4643b793fc344df836bb", name: "JuneMinecraft" },
		{ uuid: "2971ff0f49624305ab39af55c3f4b715", name: "AdityaPlayz" },
		{ uuid: "dc1cfa1e98e84f04b65412356eaea6f6", name: "ahagloch24" },
		{ uuid: "8cabcc6cd1ab4e8fa4e36a1601631893", name: "NDR_Rocket" },
		{ uuid: "a3686cc07dd14016b558d1282699e7ac", name: "ChenonettaJubata" },
		{ uuid: "315e10862dea44e5a54adbfd6910825a", name: "Shapshiftr969" },
		{ uuid: "0f730bde098540868a3c0c0446f22548", name: "woodiertexas" },
		{ uuid: "5e52239dd43643899aade55fb4313ab3", name: "Miunnak" },
		{ uuid: "d9370c8f0b344055929a12c05d4263ca", name: "index_57" },
		{ uuid: "20ee38170e194ebeb72654c446f81899", name: "PilotHaribo" },
		{ uuid: "ee2b722915b646a6945413ea51f7ee80", name: "SyberMCd" },
		{ uuid: "b3fec27ea2d44defa40d14a474d404ca", name: "Ketari_" },
		{ uuid: "a6b0a2a53ec74b8093230a2b8238d0b0", name: "AceOfDragonflies" },
		{ uuid: "e4befe46bb0043bea89e687a4910cffe", name: "1622792" },
		{ uuid: "e1bb77c695284c38a1c3515b729e84f8", name: "Jed_M" },
		{ uuid: "8cf3012e88844ea89f2ea4141e9ce7d9", name: "MrMelon54" },
		{ uuid: "9a63248e6dbb45f1aacd4968d8fdc612", name: "Thegamingkikicat" },
		{ uuid: "c10720f1ccab4d3e88199382afd0d7c7", name: "PumpkinCell" },
		{ uuid: "bfe73efa607d423682eb8d5c964f997f", name: "VampishCap61983" },
		{ uuid: "f511b9f7a02c47e1a88aa086ee8ac282", name: "Nenjee" },
		{ uuid: "2ab781e4a128491383c46b587dd47103", name: "Fusion_Flux" },
		{ uuid: "4344e976cebc44dfba5349806cb92b10", name: "Hoezzy" },
		{ uuid: "06d4b1e0c5c8460bb4125edcbbf0110d", name: "bvbbs" },
		{ uuid: "1a67929855764c00b9c4de5fb46c249e", name: "Brasev" },
		{ uuid: "b70d3ab0462b483cac72f08430eac566", name: "Andt1104" },
		{ uuid: "574dc2bbef0b44a48d8f344af601c17d", name: "Charvonia" },
		{ uuid: "cfed69f38202424ba2f337a1eb0758f4", name: "Zayin" },
		{ uuid: "1476ded4168243e6b47566a10790d0d6", name: "Owiedepowie" }
	],
	previous: [
		{ uuid: "f7604946aaab45a7999a65982425dba0", name: "WhyNotJustNova" },
		{ uuid: "8ae6fe01f79d4b49ba9c91a4c6a4e208", name: "ComputerX" },
		{ uuid: "eab7776585484c49903b5897f6467b2e", name: "SirSourSweet" },
		{ uuid: "bce7b25c6a2f49069e2bf8c6fb0e8cd2", name: "JonDoe19821982" },
		{ uuid: "641f6845c32f4de2a3c678e8c47a08e9", name: "4rana" },
		{ uuid: "87eb94e9d49541b695e09798c81239fd", name: "hotrobloxman" },
		{ uuid: "2040ccf8cddc4b4888b36916d47b6ab1", name: "JustBigBoy12" },
		{ uuid: "0ab7aefe7d3341b4bd43c8fef63a4738", name: "arpil" },
		{ uuid: "b6d309317999415fa6167bd75fcd5061", name: "SgGaming02" },
		{ uuid: "591b59a62bff4d56a4a421dafca6a7f2", name: "RedNerd123" },
		{ uuid: "e67eb09ab5af4822b7569065cdc49913", name: "IThundxr" },
		{ uuid: "123a91979409407ab7be47ab4a8d30f7", name: "DeadmanOld" },
		{ uuid: "419de284fcba468298ab36380ffebacc", name: "TrasJ" },
		{ uuid: "1eaec99b1f3a4d78b2e5c99e640f3b1a", name: "SkinnyBois" },
		{ uuid: "0009c84300304dc79ec1a004afc1e737", name: "xChrxnos" },
		{ uuid: "2c492c35e66b4fe785493eb1063a1418", name: "Miftee1149" },
		{ uuid: "255f29dacda746ddaa0aff7164a7f988", name: "Dtls" },
		{ uuid: "ac224782efff4296b08cdbde8e47abdb", name: "Mumbo" },
		{ uuid: "5aa8a5b5a3a049c88a8d0239bf57ac24", name: "Random_Werewolf" },
		{ uuid: "35590dc7c3e14103be2927455e4e7715", name: "maxelden1" },
		{ uuid: "a35b143deb9145389e003bcf41c8cd45", name: "ohsheen" },
		{ uuid: "5b075b9a81bc4f59b72512b3f3aaf6fd", name: "unusual_cryptid" },
		{ uuid: "1862835978ad4e32ac362dfee15dcd35", name: "dalwn_" },
		{ uuid: "a29acff1c89b40a892637c16e27e4129", name: "Davo312" },
		{ uuid: "173946377142468cacd169acd5561215", name: "CxpVax" },
		{ uuid: "9f6dc9f874be4dd0abfe99ee95c276cc", name: "DemonicDevil" },
		{ uuid: "23184519a6b14cdeb5cfb617b60eaf96", name: "1av4" },
		{ uuid: "35a96854e8f541a1a7d5e50b8389895d", name: "Tagilla" },
		{ uuid: "2905802ff11749a183e3a8e124ab9dc1", name: "DaanG3108" },
		{ uuid: "9b7d92105b1e44de9aad825c35f84814", name: "Duddie__" },
		{ uuid: "8b0056970c9142bdb4049e065e08fbb8", name: "BossDaily" },
		{ uuid: "18034d1d98cd42178358b761269e9e1b", name: "Ar_27" },
		{ uuid: "2971ff0f49624305ab39af55c3f4b715", name: "AdityaPlayz" },
		{ uuid: "cc383cf7606344b3bf67124e3677ac84", name: "Matte__" },
		{ uuid: "2ef1964d67c1455c86e8ed46eb2a9dab", name: "SercraftGaming" },
		{ uuid: "e7a2d03b3e1448f3b241302bc92f605a", name: "lily_magic" },
		{ uuid: "75a31720f17d40babd3ba57b7d8e2930", name: "badxjuju" },
		{ uuid: "ea7e678e55b44add9874bd28f3c52525", name: "oRed2" },
		{ uuid: "817ff77d4bf04bac9d81c387e3b24f29", name: "OffsetPixel" },
		{ uuid: "d9370c8f0b344055929a12c05d4263ca", name: "index_57" },
		{ uuid: "0019263d49d34155be308d6d3ea55cac", name: "Maiahi" },
		{ uuid: "ca419ed0783d474aac470120c0ba1b4d", name: "Shocks1" },
		{ uuid: "a0d0a10609fc441c8bd24ead56088521", name: "DylanH1738" },
		{ uuid: "83c88ef8452c41febae151b0c69e77fd", name: "KiguRoomie" },
		{ uuid: "fe2bce8ff842424f86167a7a7f4f6f7e", name: "TheBelgiumWaffle" },
		{ uuid: "b86137f746e144769f18b920af4c3738", name: "Prolinusk2" },
		{ uuid: "48e3e5e80f4943f2ace86ca960d6907d", name: "IndoorFishi" },
		{ uuid: "1a89b1638411465493e14ad00301c2d4", name: "AtrusBatleth" },
		{ uuid: "2d506f7405624eb0b868f111219b0772", name: "SeekingSolitude" },
		{ uuid: "5cf873edd7934dd7a6d80a7ae4817846", name: "Krungloid" },
		{ uuid: "34175f3e4fb5478da61f9d0af5fc37cb", name: "PlasmaDragonite" },
		{ uuid: "8cf3012e88844ea89f2ea4141e9ce7d9", name: "MrMelon54" },
		{ uuid: "c10720f1ccab4d3e88199382afd0d7c7", name: "PumpkinCell" },
		{ uuid: "326ab9e85ffe4b579cbffd8e71e2fa93", name: "Jxckii" },
		{ uuid: "083d01f2bdc84f688cef2a5c55665fcf", name: "mj1000melon" },
		{ uuid: "aeda2c6470ac4f44a54a8f6cd6f6ff09", name: "edog_thebigdog" },
		{ uuid: "ecfd407b9f1347638877da9e8ddf1da9", name: "RedingzMC" },
		{ uuid: "06d4b1e0c5c8460bb4125edcbbf0110d", name: "bvbbs" },
		{ uuid: "9033df5703ba45a7b4bb791fcac08c15", name: "Lazorback329" },
		{ uuid: "52593a991e1844d4acfc052536f221d6", name: "ADebtionair" },
		{ uuid: "1a67929855764c00b9c4de5fb46c249e", name: "Brasev" },
		{ uuid: "c4bd98b3e5624eb2a62ea45ceab91b1b", name: "sickflyer999" },
		{ uuid: "b493de79c5d54027b585eb1d290e81a0", name: "Carterdontexist" },
		{ uuid: "0140814b3123482e8dd9d06817c6131e", name: "FainterBeast782" },
		{ uuid: "a30b068fdcd142358234975eb9720112", name: "BananaWho_" },
		{ uuid: "ade4fbde69e54bae88b9d9fd113a5e86", name: "FW_Wolf" },
		{ uuid: "7472f7068dac45619882f4ddde5034b5", name: "Ambatukam_O" },
		{ uuid: "183c08aab0374227bb19ebd817aa494a", name: "IdleToxicdust" },
		{ uuid: "6ac953f9ea8d40d492d9ee1daa7dfd6d", name: "TitouantheTitan" },
		{ uuid: "e6f64dafcb65440e8a5e28b02104bb52", name: "__Senka__" },
		{ uuid: "a28ae6d10a1249988952385a5fbeb493", name: "Killerbird09" },
		{ uuid: "f921cf9d66bd456ea774a2d846a44432", name: "Grvpestreet" },
		{ uuid: "1f5f56a8a90f40a9a758521b87427cf2", name: "iSophes" },
		{ uuid: "48de24d1f34143b38f9707802412df4c", name: "Meawplex" },
		{ uuid: "fb020f1bae0f43fc921fdade6521104c", name: "Cute_Chipiron" },
		{ uuid: "9c81ba814cef4f91af7ffb472a5f3f94", name: "SgGaming03" },
		{ uuid: "8060322cd418455984ceba7dda017116", name: "Mochi2043" },
		{ uuid: "2644ffb37869485998df2d7f7e1c5236", name: "Qlmzs" },
		{ uuid: "00507fb2a90c41e8a5f33fcd320ddea3", name: "MCEnforcement" },
		{ uuid: "f128c474874043c3a18ad370e6ed6a64", name: "ThoughtlessFool" },
		{ uuid: "bb32b493d112410eb2832d2724006188", name: "Necrotic_Samurai" },
		{ uuid: "11442ef5632c4f3cbf3072d650111319", name: "Shir0iNek0" },
		{ uuid: "efe8fe902869422e85117a712958a978", name: "ChanceMeteor515" },
		{ uuid: "4e508769dfc7451cb3f7f9e143449b8f", name: "Smiley447788" },
		{ uuid: "50bcbdeaa0284ef7bd0aa7cc16b90652", name: "probablyhuman12" },
		{ uuid: "12065ba2bf0b4dfa9e19ab62f2f5b722", name: "monkeyboy2001223" },
		{ uuid: "777e433ab7e54bb8890fb490c476157b", name: "Reivax34" },
		{ uuid: "a16af7aa59b34af69dd507b6c2825711", name: "Quantum_Apple" },
		{ uuid: "c09bc53c721143ecac44ecbdae32d0e6", name: "L0rn3" },
		{ uuid: "570e2d06ed1b4a328a2256525427c82d", name: "DroidPhone" },
		{ uuid: "6a635024fd814a899fba80d6c465be0d", name: "Creeper32" },
		{ uuid: "a04cc3cff74f4b7390af834d9fd9f04a", name: "snohs" },
		{ uuid: "437de8e751844e849e05e5a8d3417b9e", name: "TinyPanda3" },
		{ uuid: "6b2c3be62b3d425ca3cbdc12c07f6485", name: "BelatedBuckle" },
		{ uuid: "da93fad296fc4ceb97d3d45e4b1cf1d7", name: "FoxyLeonie" },
		{ uuid: "20be4f16480044c68b79b98035fe1691", name: "WezCorp" },
		{ uuid: "8ffab8a9dec24435a95b564c9353a330", name: "LawPhilos" },
		{ uuid: "27f6a70142b349278619539f67240ef9", name: "Timeo_360" },
		{ uuid: "e5b4e51ea6944ed980f774c3a1386824", name: "cotin" },
		{ uuid: "31d4c6f7a4c64b5b90ec6c21aa121d69", name: "just_R0" },
		{ uuid: "180510d3f8404bb4843167d2c1d14da0", name: "MidnightCosmos" },
		{ uuid: "1e0d580b8c6e488da5993fb6c0528eca", name: "Donda_" },
		{ uuid: "5e51a4e0dd534ba1807d493bd5c968bd", name: "flollebol" },
		{ uuid: "a31f87d8b2a64743bb25a3e3914aa461", name: "Neggit" },
		{ uuid: "36f078f3b9c74718915f906194b192b2", name: "HowDoILeftClick" },
		{ uuid: "1e386472de144e1a8a412730822147f1", name: "MemeLessDax" },
		{ uuid: "f1951a907a5a4ceda8932f04f2d79b89", name: "CatrixFlames" },
		{ uuid: "75438a122c094b49b6656591b6bd36c2", name: "snake_05" },
		{ uuid: "fa93f10b3d954ab09bc3fecbb3be5811", name: "Delenomess" },
		{ uuid: "4048a052742f4c158a44ef6bfe7fb61a", name: "Mhov_de_Vallende" },
		{ uuid: "20c2f85104bd4efd8ead5aedeb05d93f", name: "gharmonica" },
		{ uuid: "5e2138bd93e0402aadeb926064145cdf", name: "ClayCake" },
		{ uuid: "b70d3ab0462b483cac72f08430eac566", name: "Andt1104" },
		{ uuid: "1ff8e903257e43e299efca77b5680d5c", name: "Corbin2003" },
		{ uuid: "79ff55169bd5430b873378b053db0341", name: "sskyzy" },
		{ uuid: "e5f0b3431e39463a96b950b38a058974", name: "aGEEKdude" },
		{ uuid: "dffd7030c3b84a95b1cee935cfed0eb7", name: "OakCandle207113" },
		{ uuid: "9e87d23cb80141309cc6228425e5db14", name: "Innov1ss1on" },
		{ uuid: "5db7151e3f994ad88e3eccdce1e2cd00", name: "FormulaRaichu" },
		{ uuid: "765e7b9bdaf34951a898b8b6b1a9e766", name: "vj65" },
		{ uuid: "8c3d28eff3e84248a839db1d676bce59", name: "mixr" },
		{ uuid: "165a3fc28af84881a2ba655d77b8e26b", name: "Shadows953" },
		{ uuid: "90a95b1dfc36454fa540c7309f6cc5d1", name: "cheez_it_man269" },
		{ uuid: "7baeba6e636b4bef98b0195bba5feac3", name: "RomketBoi2008" },
		{ uuid: "de82e486c64f44a5b6b6d953ad21bbd2", name: "Deathstaff" },
		{ uuid: "33c9468da8514903ad46d92e62202c90", name: "exhq" },
		{ uuid: "965d6320ff11448ba7a45841e8263a8a", name: "samanneveldt" },
		{ uuid: "c3e6212787854b5c9abea45c323bfda1", name: "asianeyes" },
		{ uuid: "84c3ebad4967495ca3d28aec5497c578", name: "trythisone_" },
		{ uuid: "6b0eb7979e10497ca60a45e4f2e6e0a1", name: "CousinNeo" },
		{ uuid: "892dd14b58f545acb457bdc3ad7d6010", name: "Tech_foxy" },
		{ uuid: "7681978dd62b45f183f33858fa23b78c", name: "Joshy20233" },
		{ uuid: "2fb3d417bd12400e9128b1f2f9e1aa1e", name: "Hwru" },
		{ uuid: "50227073782e47a99fb540b77c9fc172", name: "Zirce" },
		{ uuid: "1beea46cee0e4f09a44ad777e47838f2", name: "TheK0r0Sensei" },
		{ uuid: "8faab42295ba4064b0198855a1a5f307", name: "lilbabyfanpage" },
		{ uuid: "e6cc53e2ee744943801009f02ab91909", name: "Etikle" },
		{ uuid: "350970ca05cf432eb9ff5d6131a4a0e3", name: "Nakkivenes" },
		{ uuid: "cdf12ed0463845e3a5f95c2fac1d1ebd", name: "TheFoxDemon09" },
		{ uuid: "d0f46f557cae434eb628b04118c1e19d", name: "Mattb2291" },
		{ uuid: "6bb8ac6a1eab426e8b69a487b1cfd7ef", name: "bergerman123" },
		{ uuid: "830f410dfd53490db50e3e10a6759b60", name: "LoonaYeojin" },
		{ uuid: "d819acc158f94f6ea00dc6ba500aa915", name: "Scarpater" },
		{ uuid: "cf2ed96519b6483ca99594becfc509a2", name: "51L" },
		{ uuid: "5159d20b1c0e4383a9df195eeeed9607", name: "covertaura" },
		{ uuid: "47be48af82d14f93a0a128d9e7b0ff3d", name: "HenryHakamichi" },
		{ uuid: "5ee588ed80554f6bafc269c301c0ef70", name: "Rotor_" },
		{ uuid: "b5c0f558eaa54337b97a9d9b8739323f", name: "SkullNkx" },
		{ uuid: "24980cb2c99240a4982c2d6c596d47fe", name: "TehDiamond_" },
		{ uuid: "32b09850a7674cd59378fe969b3ad16e", name: "BigmanIcy" },
		{ uuid: "af05a75a2f8c4afb9560306021d387b7", name: "Draw323" },
		{ uuid: "3a5cab62a6634feba358975c571c10bc", name: "yankees88888g" },
		{ uuid: "3773600367694b7eab5dd1ddab0208b6", name: "SandCaribou1890" },
		{ uuid: "d0151673fe7a412199ca0f81bcac1b15", name: "Procyonyx" },
		{ uuid: "7261bf9c3b6044c5b29b8d72318d0d55", name: "Seive" },
		{ uuid: "f529f225ba804fbd96ee21982e523ad0", name: "SussyLivussy" },
		{ uuid: "ee2b722915b646a6945413ea51f7ee80", name: "SyberMCd" },
		{ uuid: "3c002e47fb3e4223b1fdee4fc8a47e86", name: "Loco_CTO" },
		{ uuid: "c1ede78787fe494a9195bac6262119bd", name: "_pnk" },
		{ uuid: "478efbb2d9184323913e8b76a5fafb4a", name: "MadPancho" },
		{ uuid: "589b16808c0b4909b557d9ba0f886bd0", name: "Voxety" },
		{ uuid: "9a63248e6dbb45f1aacd4968d8fdc612", name: "Thegamingkikicat" },
		{ uuid: "2a291882d6d9401aaba60a2c33d46b87", name: "Sh1nzy0" },
		{ uuid: "2b9fedb2403546abbd471b4ef84971c4", name: "NekoJax" },
		{ uuid: "5163819c02224637b0816cc190c55871", name: "Its_DevonO" },
		{ uuid: "a7a4f7af61104389a3d024842edc56eb", name: "Berlii" },
		{ uuid: "72598e6528dc42848b4c448940fcf520", name: "IronGamer00" },
		{ uuid: "c77051ff636e4e00b3f068730ba92d7d", name: "notiris_" },
		{ uuid: "3e5636a9a9a34efb9eb98a72a114d4c4", name: "MoonVII" },
		{ uuid: "6d29817156f04dd79e196ff34bbc7cee", name: "ReyPlayz" },
		{ uuid: "f2329249b49d4fedae11c79b14040483", name: "Domohead" },
		{ uuid: "e4c87ad88c49434cb5351dea4e950bdb", name: "ItsYale" },
		{ uuid: "0af047844c534609af7028ac132615ec", name: "UltimateScripted" },
		{ uuid: "9d0d59a4a16340d18d8cedfc30ccf016", name: "Trynvis" },
		{ uuid: "e8f1bcd6758b4564bae65cb0533ef3e5", name: "Terracom12" },
		{ uuid: "9367c0906a5c4394bbd24a1e02ea64f3", name: "Anti_Rebel" },
		{ uuid: "26a0884b6a2045788170217f727887d7", name: "0leMc" },
		{ uuid: "ff4b4c79694c49fc8e23316bd10581c9", name: "_Cliff" },
		{ uuid: "f685137a19e249008e49413155b287a3", name: "BotheBot" },
		{ uuid: "69dd6c8fb359420f9e4d0b9a472c6545", name: "HVB007" },
		{ uuid: "3a89982df7a74c46a4f65a6073927cd0", name: "c2Finity" },
		{ uuid: "ae84258881524612abb4c57206409031", name: "AedelricScild" },
		{ uuid: "3cca0b34b1374a25a92a0b678b0b7911", name: "cheodoc" },
		{ uuid: "8c90895a125d43fb998d9f845a44c655", name: "Plutoker" },
		{ uuid: "190fe4a5107a4d398a62c58ab2069f1d", name: "MadShinoa" },
		{ uuid: "cc1f71b395624f4bba4b17c3a2e65ddb", name: "DinoComparator" },
		{ uuid: "6aaeb0818786481ca6c3e7505647a004", name: "IMS212" },
		{ uuid: "12c19448348e4714bd2b2943473800bb", name: "Sakiiya" },
		{ uuid: "c6619ea1c8d941c195e53e623e7b13c4", name: "NutNutella" },
		{ uuid: "60b41094d16c467cba555898dbd3468f", name: "FISHY_CPVP" },
		{ uuid: "1bf4d9231d154ac69da83ca314e179ed", name: "Sconeyy" },
		{ uuid: "7ef90cc7ad7f46f780070ed3f606632d", name: "rokokokas" },
		{ uuid: "db86f805b63241b3b234982d13aa636a", name: "_Zayin_" },
		{ uuid: "99c45c4d3f42460e943a952912db408d", name: "WaterGenie3" },
		{ uuid: "e952dd538d4c4c8581120454ce1a3c46", name: "Mr_waffles11" },
		{ uuid: "7b888d55dc304a4c9cc8c7073024f286", name: "Bubblie01" },
		{ uuid: "ac5ae26f36544fb4817fde8f9bd3ad34", name: "Markoo758" },
		{ uuid: "a63923e7597d4edebf72d3113fae0eb8", name: "Wizotok" },
		{ uuid: "8702d5162d7a43a1aef6ebeecfededfb", name: "Davdinges" },
		{ uuid: "8d9057ebdd09429791a8f83157df46fe", name: "Squishy272" },
		{ uuid: "1ca929218ed043e584022f2a2d0118eb", name: "Rhizob" },
		{ uuid: "d70592ce9cec4c09abc785b3c263f6fe", name: "Being_Sachin" },
		{ uuid: "aef34e8aacc64725908f2120ec80b48d", name: "Amaterasu7" },
		{ uuid: "d23005cfd32b4c6eb4368578f68cbda4", name: "getsbetterlater" },
		{ uuid: "aec99b82d00c465aabafb8242f96a4c2", name: "Wyspec" },
		{ uuid: "3756b3cb791243b3afd7ecdae31133ae", name: "insignificant0" },
		{ uuid: "13342e6cffdc427d986db9fca5842d3e", name: "_NotLegend" },
		{ uuid: "45797e7756b94938864bd71d2ad0a734", name: "TinchooLoza" },
		{ uuid: "925d6a0c6f6c4411a223edcc971d024e", name: "dabusator" },
		{ uuid: "0ac7a2281b2e454ebb67b89cba90beca", name: "VikaashIsHere" },
		{ uuid: "a22f9debac424fb6a37b02083a77b9d9", name: "V0rTeX_123" },
		{ uuid: "6ed2a2138d1f483d8e237fd9b2551bc6", name: "TheMrDwinkley" },
		{ uuid: "bcfe9f00bad4408bb31a5ff2524af997", name: "InterConnections" },
		{ uuid: "4a3b1171acec4ab4b25505d8a3dadec7", name: "Misteaks" },
		{ uuid: "0a7176eba77f422291feeea4ab4c7ed7", name: "astroxq55" },
		{ uuid: "e9db4d4c2fa749db9c236e296c0cccf3", name: "jagris" },
		{ uuid: "e3edac6632ca4c41aba5787cd05b0d8c", name: "systemstart" },
		{ uuid: "d278a9c0769a403ebe3a3f662177e56a", name: "ThatWeirdCoder" },
		{ uuid: "1d7fab49225843c8b87244c5059a7df2", name: "Thegoatgamer7" },
		{ uuid: "935cfe3289154eb0ae8ec5e11b0407d6", name: "Panda_For_Real" },
		{ uuid: "b443bc9a200e42639a50367ae5f4f378", name: "calamitybox" },
		{ uuid: "f82306a88c43479b8e6d82d582d65fd2", name: "AzemFlop" },
		{ uuid: "f511b9f7a02c47e1a88aa086ee8ac282", name: "Nenjee" },
		{ uuid: "1476ded4168243e6b47566a10790d0d6", name: "Owiedepowie" }
	]
};

export default function Rip() {
	return (
		<>
			<style global jsx>{`
				html {
					background: #00000;
					background: linear-gradient(
						0deg,
						rgba(0, 0, 0, 1) 0%,
						rgba(17, 18, 19, 1) 75%
					);
				}
			`}</style>

			<div className="absolute top-0 left-0 w-full h-[46rem] -z-50 blur bg-blend-overlay">
				<Image
					priority={true}
					quality={90}
					className="md:blur-none duration-200 object-cover object-bottom opacity-20 grayscale"
					alt=""
					src={MainPNG}
					fill
				/>
			</div>

			<div className="markdown">
				<section className="flex flex-col gap-10 text-center markdown my-20">
					<header className="text-4xl type-header">
						A Goodbye to Prosperity
					</header>
					<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
						As of November 9th 2025 the Prosperity servers have been
						laid to rest, and the server is officially shut down. We
						would like to thank everyone who played on the server
						over the past 4+ years!
					</p>
				</section>

				{/* <section className="flex flex-col gap-10 text-center markdown my-20 max-w-4xl"> */}
				<section className="flex flex-col max-w-4xl mx-auto mb-20">
					{/* prettier-ignore */}
					<TimelineEntry date="June 11th 2021" content={<>Prosperity launches on 1.17</>}></TimelineEntry>
					{/* prettier-ignore */}
					<TimelineEntry date="June 29th 2021" content={<>The first medium-to-large scale farms are built by Terracom and MickZe</>}></TimelineEntry>
					{/* prettier-ignore */}
					<TimelineEntry date="March 6th 2022" imageUrl="/rip/sparn-perimeter-map.png" content={<>The full spawn perimeter is complete. The project lead by Terracom with help from the entire server</>}></TimelineEntry>
					{/* prettier-ignore */}
					<TimelineEntry date="Augest 17th 2022" content={<>The first members join the administration team remaining in place until the end of the server over 3 years later</>}></TimelineEntry>
					{/* prettier-ignore */}
					<TimelineEntry date="November 15th 2022" imageUrl="/rip/battleship.png" content={<>Kiki removeDirectory and Melon begin work on their creative megaproject: the fully (dis)functional game of battleship built with Prosperity in mind</>}></TimelineEntry>
					{/* prettier-ignore */}
					<TimelineEntry date="December 9th 2022" content={<>The first experiment for a fully modded server is launched a limited time event: Prosperity Remodulated</>}></TimelineEntry>
					{/* prettier-ignore */}
					<TimelineEntry date="October 26th 2022" content={<>The Void Trader is finished by Sg, MadPancho, Devil, and BothelBot</>}></TimelineEntry>
					{/* prettier-ignore */}
					<TimelineEntry date="November 15th 2022" imageUrl="/rip/nether-hub.png" content={<>The Nether hub is completed, with the project being lead by MadPancho</>}></TimelineEntry>
					{/* prettier-ignore */}
					<TimelineEntry date="January 3rd 2023" imageUrl="/rip/aabshaar-minar.png" content={<>Mhov, Rotor, and gharmonica build their, now iconic, Aabshaar Minar</>}></TimelineEntry>
					{/* prettier-ignore */}
					<TimelineEntry date="May 6th 2023" content={<>Prosperity Skyblock a limited-time event open to everyone begins</>}></TimelineEntry>
					{/* prettier-ignore */}
					<TimelineEntry date="November 30th 2023" content={<>Owiedepowie completes the massive Nether piston-bolt network spanning 1,500x1,500 blocks</>}></TimelineEntry>
					{/* prettier-ignore */}
					<TimelineEntry date="April 11th 2024" content={<>Voting begins to decide the future of the server</>}></TimelineEntry>
					{/* prettier-ignore */}
					<TimelineEntry date="December 26th 2024" imageUrl="/rip/v2-ender-dragon-fight.png" content={<>The V1 world is officially reset and the server is ra-launched on a fresh modded world </>}></TimelineEntry>
					{/* prettier-ignore */}
					<TimelineEntry date="November 8th 2025" content={<>Prosperity's final day...</>}></TimelineEntry>
				</section>

				<hr />

				<section className="flex flex-col gap-10 text-center markdown my-20">
					<header className="text-4xl type-header">
						Thank You for Playing
					</header>
					<span className="text-sm text-zinc-300">
						Thank you to the administration team for keeping things
						running..
					</span>
					<div>
						<div className="flex flex-wrap text-lg gap-1 justify-center cursor-default">
							{players.admin.sort().map((player) => (
								<span className="group px-2 py-1 hover:scale-150 hover:z-50 duration-150 ease-in-out hover:text-zinc-100 select-all drop-shadow-xl/50 shadow-zinc-900">
									<Image
										className="rounded-sm inline-block"
										width={16}
										height={16}
										src={`https://minotar.net/helm/${player.uuid}`}
										alt={""}
									/>{" "}
									{player.name}
								</span>
							))}
						</div>
					</div>
					<span className="text-sm text-zinc-300">
						to our current players...
					</span>
					<div>
						<div className="flex flex-wrap text-base gap-1 justify-center cursor-default">
							{players.current.sort().map((player) => (
								<span className="group px-2 py-1 hover:scale-150 hover:z-50 duration-150 ease-in-out hover:text-zinc-100 select-all drop-shadow-xl/100 shadow-zinc-900">
									<Image
										className="rounded-sm inline-block"
										width={16}
										height={16}
										src={`https://minotar.net/helm/${player.uuid}`}
										alt={""}
									/>{" "}
									{player.name}
								</span>
							))}
						</div>
					</div>
					<span className="text-sm text-zinc-300">
						and those previous...
					</span>
					<div>
						<div className="flex flex-wrap text-sm gap-1 justify-center cursor-default">
							{players.previous.sort().map((player) => (
								<span className="group px-2 py-1 hover:scale-150 hover:z-50 duration-150 ease-in-out hover:text-zinc-100 select-all drop-shadow-xl/100 shadow-zinc-900">
									<Image
										className="rounded-sm inline-block"
										width={16}
										height={16}
										src={`https://minotar.net/helm/${player.uuid}`}
										alt={""}
									/>{" "}
									{player.name}
								</span>
							))}
						</div>
					</div>
					<div>
						<span className="text-sm text-zinc-300">
							A server by{" "}
							<Image
								className="rounded-sm inline-block"
								width={16}
								height={16}
								src={`https://minotar.net/helm/ae9d03f0e46a40e098aa35f27f48a226`}
								alt={""}
							/>{" "}
							CarbonGhost
						</span>
					</div>
				</section>
			</div>
		</>
	);
}

function TimelineEntry(props: {
	date: string;
	content: string | React.ReactNode;
	imageUrl?: string;
}) {
	return (
		<section className="group">
			<a href={`#${props.date.toLowerCase().replace(" ", "-")}`}>
				<header className="py-2 type-sub-header text-xs text-zinc-400 group-hover:text-zinc-200 duration-150 uppercase">
					{props.date}
				</header>
			</a>
			<div
				className="mx-4 border-l-2 border-zinc-400 group-hover:border-zinc-300 duration-300"
				id={props.date.toLowerCase().replace(" ", "-")}>
				<div className="sm:grid grid-cols-2 gap-8 items-center pl-8">
					<span className="text-lg markdown py-6">
						{props.content}
					</span>
					{props.imageUrl ? (
						<Image
							className="rounded-md aspect-video saturate-[0.80] group-hover:saturate-100 duration-500"
							width={400}
							height={225}
							objectFit="cover"
							src={props?.imageUrl}
							alt="A Minecraft screenshot"
						/>
					) : (
						<></>
					)}
				</div>
			</div>
		</section>
	);
}
