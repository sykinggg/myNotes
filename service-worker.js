if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,f)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const r=e=>a(e,d),b={module:{uri:d},exports:c,require:r};s[d]=Promise.all(i.map((e=>b[e]||r(e)))).then((e=>(f(...e),c)))}}define(["./workbox-53bdbe38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/1.html.9b0d2630.js",revision:"5361ec9ed852111cae7ff9e3a04bfc59"},{url:"assets/1.html.dcee67de.js",revision:"4a68761acfe58f518c37e9b59626e112"},{url:"assets/1.html.eb25a295.js",revision:"c317ec3de2d15a5b09ebaadd115d59d4"},{url:"assets/1.html.f9b517ac.js",revision:"d4c2ae422417c5b3322b6ff823a1687d"},{url:"assets/10.html.a108c07c.js",revision:"a47948287340e9ad516b7aee1ce8afea"},{url:"assets/10.html.d64afcea.js",revision:"9dd6b80135bbea4f72a4c9e63f1a4435"},{url:"assets/11.html.7659e9bf.js",revision:"4c3bc897f661dd8fc1346b5cd244a3d2"},{url:"assets/11.html.d1ba1578.js",revision:"77192be2f6e9115922b735a856d02243"},{url:"assets/12.html.30900869.js",revision:"9e3ccccd6a08e54b77de94786ee86a08"},{url:"assets/12.html.39e32ac2.js",revision:"d41a95fc61fd0bd1fbfe84de0ae8884f"},{url:"assets/13.html.42abb2de.js",revision:"822269bb0786853c3d135e95a81f0bb8"},{url:"assets/13.html.cfccf8f8.js",revision:"55963be3bef1274c43bf8fc4281ca37d"},{url:"assets/14.html.750fec7b.js",revision:"259ff22523f1de294dc7b91ce58fe663"},{url:"assets/14.html.a9267e8a.js",revision:"c2dc0fcfd27d6385922915a55195687a"},{url:"assets/15.html.728abfce.js",revision:"27fa878073b8904bbd351ba8ba6621c9"},{url:"assets/15.html.ade86343.js",revision:"eddd1f600a790e36d7c5199760ecd3d1"},{url:"assets/16.html.8505f65b.js",revision:"1c5a903937a22b94c9a00ec5b0a7fb5d"},{url:"assets/16.html.9cd43295.js",revision:"bc08c91fe3a1bc642c77506dc4ed1c78"},{url:"assets/17.html.2206e77c.js",revision:"9a802c277170bda5acdd8fadafed7586"},{url:"assets/17.html.86155335.js",revision:"42e0f8fcdab2de987b00d93ad0651417"},{url:"assets/18.html.647edfde.js",revision:"534e90326938bd3131e60251ef57040f"},{url:"assets/18.html.d80fac08.js",revision:"27099da7bdca1998c06331cb75384284"},{url:"assets/19.html.869e039b.js",revision:"47d7d3395df5a438659adb000bfdb501"},{url:"assets/19.html.baae4003.js",revision:"c1167357c5fcb32c496bccdfa1e6179c"},{url:"assets/2.html.2612f16d.js",revision:"0257bdac6163511e9ae1424296b70f70"},{url:"assets/2.html.b7c785db.js",revision:"a11b725571a07a67d6243ca9857f95ba"},{url:"assets/20.html.60dbdf43.js",revision:"656b93fb8b0f007cce20663ae52b646f"},{url:"assets/20.html.b17e2aa7.js",revision:"b5936432e8fa8f7fd1804fc5513c6f48"},{url:"assets/21.html.26aaa55b.js",revision:"bc89ea57d3c9e4d585780839ce187058"},{url:"assets/21.html.fbd6e775.js",revision:"98016f6bb259a211b12e53b149bd20d8"},{url:"assets/22.html.03ba8064.js",revision:"8e2773b988fbe6a365d458365b87e59e"},{url:"assets/22.html.19fe4256.js",revision:"e2ce871dccd0110cf9b0c09e481e3d4d"},{url:"assets/23.html.3b42f517.js",revision:"3a0bd14a3355eb44474c6f2b507007f5"},{url:"assets/23.html.b92b3659.js",revision:"73e7a7ab3636ecd5fb78b4a243f3ac2d"},{url:"assets/24.html.ddd73364.js",revision:"fecbad2c38def0c347424ccc475e3f9d"},{url:"assets/24.html.df4aa789.js",revision:"91cb11e96d7bc22d9186f6d54ceeb5bc"},{url:"assets/3.html.66f9db91.js",revision:"191e86dd82b5bcd1d37d9981e3a61266"},{url:"assets/3.html.c19df1c1.js",revision:"37b2c9d414aa402d789058a5e76453f6"},{url:"assets/4.html.5022c8d9.js",revision:"8c78e3ad75508283390c2032b15b9195"},{url:"assets/4.html.bc3ff7bd.js",revision:"969076469ff71185c3d60da6eb7d3e5e"},{url:"assets/404.html.82f1b09a.js",revision:"e04609bbdfd51b942e506cbf7930b5b5"},{url:"assets/404.html.da9ed260.js",revision:"de477f136dc25f2570bc9f0e3fd40909"},{url:"assets/5.html.2e3e2693.js",revision:"b8b2756db9b65ea73e522c7088998b5e"},{url:"assets/5.html.4e7516b5.js",revision:"855f4e48514bacdaf28381c0d1db8275"},{url:"assets/6.html.0f8cff9a.js",revision:"45a7bf29fcd09eb1bc1f6b7ec7f45abb"},{url:"assets/6.html.8b7d036e.js",revision:"8905d01088d76915cfc964abf2cfafe8"},{url:"assets/7.html.57e99062.js",revision:"81d0d5eb84f1e42ac688a915c3f31193"},{url:"assets/7.html.6e4cdec9.js",revision:"908a5d227e7042e7cf7ff13008c0a91b"},{url:"assets/8.html.5b602463.js",revision:"62d774ecb5b54d74698072dbb0d39bc3"},{url:"assets/8.html.c9b198dc.js",revision:"73c1fff87ade753e30fac68f05612833"},{url:"assets/9.html.209b23a7.js",revision:"7101a8f7ed65f11b6d76366648849a9f"},{url:"assets/9.html.f1419f4f.js",revision:"64a7e7c34876a894154d334f05e7403a"},{url:"assets/ancientNames.html.8b60eed9.js",revision:"dbd32e3bb7caaf4c2497cdca076df20f"},{url:"assets/ancientNames.html.e1521c54.js",revision:"965b303547fbbba80ea24902df76f43e"},{url:"assets/app.7c242a30.js",revision:"57a217b4a95a239c8344529b2213d0e6"},{url:"assets/auto.264f6c8c.js",revision:"1af7b89403d96b406782cd203249d58d"},{url:"assets/chernobyl.html.4559ca12.js",revision:"25637affd6f71ef138cce17314b99018"},{url:"assets/chernobyl.html.e783e28f.js",revision:"e22fc4830f0c9772954d0d3677152ffe"},{url:"assets/flowchart.parse.ee90d7e0.js",revision:"93ee4658efd463b82af7bc1b894a96d4"},{url:"assets/highlight.esm.d982e650.js",revision:"7755765e29eda27238d3160a257e85bd"},{url:"assets/index.cac02f97.js",revision:"53c8d7dbc21ecd3bccbf1c2322dd0cca"},{url:"assets/index.html.0e7d52fd.js",revision:"a27dfe923ecf755744a801cd44134aaf"},{url:"assets/index.html.18dcd9dd.js",revision:"6c6543ab46ada666dc12c8dd75299dfa"},{url:"assets/index.html.26990526.js",revision:"9035c0659598d3e67a13812cb2b35086"},{url:"assets/index.html.28d19909.js",revision:"125e288bd8e8ad8997714023df7cbb8b"},{url:"assets/index.html.3df02482.js",revision:"716b05d86a705db693dbf89aafd774c0"},{url:"assets/index.html.4375ddb4.js",revision:"125e288bd8e8ad8997714023df7cbb8b"},{url:"assets/index.html.716d0a85.js",revision:"125e288bd8e8ad8997714023df7cbb8b"},{url:"assets/index.html.78d5352c.js",revision:"125e288bd8e8ad8997714023df7cbb8b"},{url:"assets/index.html.80064f14.js",revision:"119c261cf8eb4bde0f6fa67fae3f8207"},{url:"assets/index.html.81de374b.js",revision:"125e288bd8e8ad8997714023df7cbb8b"},{url:"assets/index.html.8c51d079.js",revision:"22264524c60a894ebea4e4d1280fba65"},{url:"assets/index.html.ae557eae.js",revision:"434aee6e46a143cc40f36b838b267a75"},{url:"assets/index.html.b0ec7cee.js",revision:"333621cac9265db8b8948cf367480d68"},{url:"assets/index.html.e407e4ff.js",revision:"125e288bd8e8ad8997714023df7cbb8b"},{url:"assets/index.html.eeb4d207.js",revision:"c1963b5e311df85683a3faf4469372b3"},{url:"assets/index.html.fa6a8ee4.js",revision:"125e288bd8e8ad8997714023df7cbb8b"},{url:"assets/intro.html.79498f0b.js",revision:"74b30a738aa200cceb21c6435aa457f4"},{url:"assets/intro.html.feecbd2f.js",revision:"c5cea15248a496891ed6c67a134b69ab"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/kongyiji.html.cd0b42bf.js",revision:"2921425e85a46911f11863369fb4f749"},{url:"assets/kongyiji.html.dfd459f5.js",revision:"9d76d74056fa03ded11d8cf44bab3ce6"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.832a189d.js",revision:"0d05be8d1ccc17a6f2270457575848a1"},{url:"assets/math.esm.a3f84b6f.js",revision:"e77d289bc577da4e7341dc5a62209df1"},{url:"assets/mermaid.esm.min.e3b5d21d.js",revision:"481e9564c28a71aed6f3c286b4911f29"},{url:"assets/mutinyAndInvolution.html.44f769a3.js",revision:"24854e9a7ac7ef8aff68ccfebce223d4"},{url:"assets/mutinyAndInvolution.html.ee81fe1c.js",revision:"8bd8efbea9f13b6da4596dda9a03dc78"},{url:"assets/notes.esm.3c361cb7.js",revision:"b055b0fe912d3e63c622ee92caf08028"},{url:"assets/photoswipe.esm.382b1873.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/reveal.esm.b96f05d8.js",revision:"40ef902ff74efca41d50e4c94edb2b83"},{url:"assets/search.esm.80da4a02.js",revision:"7d8008309758cac57a4dd66a633819ba"},{url:"assets/slides.html.904203e7.js",revision:"916fe995d57810d12547b7e57197e662"},{url:"assets/slides.html.e6afe0f0.js",revision:"3e79ad04afd1eef2e43b4d9aaedc6ab0"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.4551fbbf.css",revision:"3404d95572e42131e9bae5eaebbe711a"},{url:"assets/vue-repl.a43c90ea.js",revision:"a22575e37ff4c79482cf0f5805aa7e1a"},{url:"assets/VuePlayground.63584811.js",revision:"bd4270c5aac0bf4cbef2862fef6d95ef"},{url:"assets/xijin1.html.13ba17d1.js",revision:"bedad197af9eeb020983897edf0cb5bd"},{url:"assets/xijin1.html.d1c01991.js",revision:"730903f30b0df1907ba056ab43fb3359"},{url:"assets/xijin2.html.5886e170.js",revision:"a6ec5b45006b5a1dd958cc3db49a2e83"},{url:"assets/xijin2.html.bc3734a1.js",revision:"695093b9c22280ae665b5c032fba9f14"},{url:"assets/xijin3.html.27966b92.js",revision:"3f955cec8f545a3ba6c87b4e056433f7"},{url:"assets/xijin3.html.ca8be5be.js",revision:"cd0e7386bf3b8c81576b2465a1ae9557"},{url:"assets/zoom.esm.8514a202.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"30100eb30a5b0b07962b99cf519c5a08"},{url:"article/index.html",revision:"0c032456614f40452df5c44749f5b412"},{url:"base/ancientNames.html",revision:"b9d10ce655dfc47cc7ba2ea22a63d465"},{url:"base/chernobyl.html",revision:"5f00f03a601cbd21676ef9b6416fe7d4"},{url:"base/kongyiji.html",revision:"646b006f135877519a02b33adc141e79"},{url:"base/mutinyAndInvolution.html",revision:"e4e78a2c7fa405aa8ab782ce8b34335c"},{url:"base/xijin1.html",revision:"7b73efba4e35a4885e6027eeb4000fe6"},{url:"base/xijin2.html",revision:"c47ba9d8a6f3a457ace1c0f8403dcc1a"},{url:"base/xijin3.html",revision:"c5bb5e3adf0b43f0fc57ff666294d806"},{url:"category/index.html",revision:"5ac3378ed28f601a3be9f563a4c91fe0"},{url:"encrypted/index.html",revision:"2df552e3250cb07d8a7f318579e21171"},{url:"index.html",revision:"aed4b01469dc1fb3893b1412f6dd90e2"},{url:"intro.html",revision:"15c2ba447eb910a355be8aeecd6716d7"},{url:"jinji/1.html",revision:"36e42af478df0a564012c5a0f263d11b"},{url:"jinji/10.html",revision:"5b8cefd7e36ae54a127e0f5f9e336124"},{url:"jinji/11.html",revision:"9a2cf993ed447d747da95a1dedaf353a"},{url:"jinji/12.html",revision:"c5e3de4ea1fc2df280ad43d5adce7ad3"},{url:"jinji/13.html",revision:"853e9174d3eba91e04f402e6792ddc8f"},{url:"jinji/14.html",revision:"16a7c6f7c9240067072b70ed87e02dd6"},{url:"jinji/15.html",revision:"4f3757de76e509e99b105cd567e58155"},{url:"jinji/16.html",revision:"4d0319d71ff0707dcec75ab97c63aa15"},{url:"jinji/17.html",revision:"8e04318f03a85b73423af60e2ad58d3d"},{url:"jinji/18.html",revision:"af2f979bd50fc0f9cd651a596452f5b6"},{url:"jinji/19.html",revision:"28da122ee9459d908e366b17ccd70157"},{url:"jinji/2.html",revision:"4d78f6834225d377e052067c1ce23619"},{url:"jinji/20.html",revision:"ffa83fb9b50be80a8a1c09570484a1d9"},{url:"jinji/21.html",revision:"b475e5ca8737c961d9964b406f0f8a6f"},{url:"jinji/22.html",revision:"97369c133d40a933f88133059d5a3db3"},{url:"jinji/23.html",revision:"cc97a246083202b886e4cf69ed55a7f5"},{url:"jinji/24.html",revision:"263d9202f2910a555c8599b6a92b996c"},{url:"jinji/3.html",revision:"635e62a7a2bb1f90261b20b26684e10f"},{url:"jinji/4.html",revision:"7a08b9a5944e6f02d8ed4af9bd3e6e55"},{url:"jinji/5.html",revision:"2c5717339f74924062f386d46ffd3c7a"},{url:"jinji/6.html",revision:"ed8893a3bcc255cc39a7c0c12fd3f45d"},{url:"jinji/7.html",revision:"b51958678a30992d59e41ac8fe73b63b"},{url:"jinji/8.html",revision:"6ed2bcf8798bf9945a81557c48df9a43"},{url:"jinji/9.html",revision:"b87ee878d15a4a6dadd651791c9c6da9"},{url:"scaryGhostStory/1.html",revision:"6b4b0f59c4c7a9da0774b68924817070"},{url:"slide/index.html",revision:"fdc11d354632b862a6379735eba005df"},{url:"slides.html",revision:"bb85ab69c37b6721ee32cea876713d1c"},{url:"star/index.html",revision:"ecec9e7de849ce5ee3c83d20ff721d44"},{url:"tag/index.html",revision:"9554d62a075e0fc90800d1518d089a3c"},{url:"timeline/index.html",revision:"04c84d6f630bd67d7bf184385fea4b54"},{url:"assets/hero.197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/base/640.jpeg",revision:"32846319107bac1bdea0e2527cf249f2"},{url:"assets/img/base/640(1).jpeg",revision:"cdf8d6724b3cb91f87a8cc5bbd741dad"},{url:"assets/img/base/640(10).jpeg",revision:"096fd7cb6b1df7e8cf0f90005aa97ffc"},{url:"assets/img/base/640(11).jpeg",revision:"6902cf50184296c13e54cb35550d3890"},{url:"assets/img/base/640(12).jpeg",revision:"342f98e8958f12821d77f88a6538b842"},{url:"assets/img/base/640(2).jpeg",revision:"3a70d39e3b6a00c2e799235b514759db"},{url:"assets/img/base/640(3).jpeg",revision:"8294581a8af4ee175a325fe495e47ccc"},{url:"assets/img/base/640(4).jpeg",revision:"bdf2b7f219036525ae46e0d9f58bc8b2"},{url:"assets/img/base/640(5).jpeg",revision:"cb436985dc312d8644b27ab0186e91d0"},{url:"assets/img/base/640(6).jpeg",revision:"74d183ce665501fcb62622443dfdac6b"},{url:"assets/img/base/640(7).jpeg",revision:"775356265d3ef76345a4fa6151a22402"},{url:"assets/img/base/640(8).jpeg",revision:"dca026aa5bf7b2e772722a3fc02b5a9f"},{url:"assets/img/base/640(9).jpeg",revision:"6902cf50184296c13e54cb35550d3890"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map