// import React, { useEffect } from "react";
// import KUTE from "kute.js";

// const Home = () => {
//     useEffect(() => {
//         // Blob animation
//         const blobTween = KUTE.fromTo(
//             "#blob1",
//             { path: "#blob1" },
//             { path: "#blob2" },
//             { repeat: 999, duration: 3000, yoyo: true }
//         );
//         blobTween.start();

//         // Layer animation
//         const layerTween = KUTE.fromTo(
//             "#layer1",
//             { path: "#layer1" },
//             { path: "#layer2" },
//             { repeat: 999, duration: 3000, yoyo: true }
//         );
//         layerTween.start();
//     }, []);

//     return (
//         <>
//             <section>
//                 <h1 className="pink">Halo</h1>
//                 <p className="darkpink">Officiis deserunt exercitationem saepe perferendis. Blanditiis facere soluta, laborum aut accusamus harum ut temporibus deleniti magnam voluptas voluptate cum rem? Animi provident quos aperiam similique unde non, eum dignissimos laborum!</p>
//                 <svg
//                     id="visual"
//                     viewBox="0 0 960 600"
//                     width="960"
//                     height="600"
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     version="1.1"
//                 >
//                     <g transform="translate(466.910666477876 292.14030646721176)">
//                         <path
//                             id="blob1"
//                             d="M177.1 -176.3C212.8 -141.4 213.4 -70.7 211.7 -1.6C210.1 67.4 206.2 134.8 170.5 173.3C134.8 211.8 67.4 221.4 1.4 220C-64.6 218.6 -129.2 206.2 -160.7 167.7C-192.2 129.2 -190.6 64.6 -176 14.6C-161.4 -35.4 -133.7 -70.7 -102.2 -105.5C-70.7 -140.4 -35.4 -174.7 17.7 -192.4C70.7 -210 141.4 -211.1 177.1 -176.3"
//                             fill="#BB004B"
//                         ></path>
//                     </g>
//                     <g transform="translate(492.4613790616287 294.6586385003234)" style={{ visibility: "hidden" }}>
//                         <path
//                             id="blob2"
//                             d="M116.3 -106C161 -71.7 214.5 -35.8 217 2.5C219.4 40.8 170.9 81.6 126.2 108.9C81.6 136.2 40.8 150.1 -15 165.1C-70.7 180 -141.4 196.1 -187.1 168.8C-232.8 141.4 -253.4 70.7 -235.7 17.7C-218 -35.4 -162 -70.7 -116.4 -105C-70.7 -139.4 -35.4 -172.7 0.2 -172.9C35.8 -173.2 71.7 -140.3 116.3 -106"
//                             fill="#BB004B">
//                         </path>
//                     </g>
//                 </svg>
//             </section>

//             <section>
//                 <h1>About me</h1>
//                 <p>Voluptates tempora temporibus labore ipsam, omnis distinctio necessitatibus dolore cupiditate sed ipsum iste dignissimos id accusamus recusandae repellat qui sint ducimus quod eos deserunt numquam dolor. Earum saepe dolore corporis.</p>
//             </section>

//             <section>
//                 <h1>Some Things I've Built</h1>
//                 <p>Voluptates tempora temporibus labore ipsam, omnis distinctio necessitatibus dolore cupiditate sed ipsum iste dignissimos id accusamus recusandae repellat qui sint ducimus quod eos deserunt numquam dolor. Earum saepe dolore corporis.</p>
//             </section>

//             <section >
//                 <h1>Other Noteworthy Projects</h1>
//                 <p>Voluptatum sapiente excepturi velit nobis enim est non reprehenderit voluptatibus unde blanditiis alias culpa tempore, tenetur aut veniam libero? Rem dolorum quia cupiditate culpa. Rem veritatis illo quae ratione provident?</p>
//             </section>

//             <section>
//                 <h1>Get In Touch</h1>
//                 <p>Voluptates tempora temporibus labore ipsam, omnis distinctio necessitatibus dolore cupiditate sed ipsum iste dignissimos id accusamus recusandae repellat qui sint ducimus quod eos deserunt numquam dolor. Earum saepe dolore corporis.</p>
//             </section>
//             <div className="spacer flip">
//                 <svg
//                     id="layer-visual"
//                     viewBox="0 0 960 100"
//                     height="100"
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     version="1.1"
//                 >
//                     <path
//                         id="layer1"
//                         d="M0 60L26.7 59.5C53.3 59 106.7 58 160 52.7C213.3 47.3 266.7 37.7 320 40C373.3 42.3 426.7 56.7 480 58.8C533.3 61 586.7 51 640 50.3C693.3 49.7 746.7 58.3 800 59.3C853.3 60.3 906.7 53.7 933.3 50.3L960 47L960 0L933.3 0C906.7 0 853.3 0 800 0C746.7 0 693.3 0 640 0C586.7 0 533.3 0 480 0C426.7 0 373.3 0 320 0C266.7 0 213.3 0 160 0C106.7 0 53.3 0 26.7 0L0 0Z"
//                         fill="#ff0066"
//                         stroke-linecap="round"
//                         stroke-linejoin="miter"
//                     ></path>
//                     <path
//                         id="layer2"
//                         d="M0 44L20 48.8C40 53.7 80 63.3 120 68.2C160 73 200 73 240 73C280 73 320 73 360 70.7C400 68.3 440 63.7 480 58.7C520 53.7 560 48.3 600 45.5C640 42.7 680 42.3 720 42.7C760 43 800 44 840 47.2C880 50.3 920 55.7 940 58.3L960 61L960 0L940 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z"
//                         fill="#ff0066"
//                         stroke-linecap="round"
//                         stroke-linejoin="miter"
//                         style={{ visibility: "hidden" }}
//                     ></path>
//                 </svg>
//             </div >
//         </>
//     );
// };

// export default Home;




// // Layer animation
// const layerTween = KUTE.fromTo(
//     "#layer1",
//     { path: "#layer1" },
//     { path: "#layer2" },
//     { repeat: 999, duration: 3000, yoyo: true }
// );
// layerTween.start();

{/* <div className="spacer flip">
                <svg id="visual" viewBox="0 0 1996 100"
                    width="1996"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1">
                    <path
                        id="layer1"
                        d="M0 52L30.2 50C60.3 48 120.7 44 181.2 42.5C241.7 41 302.3 42 362.8 41.2C423.3 40.3 483.7 37.7 544.2 40C604.7 42.3 665.3 49.7 725.8 55.7C786.3 61.7 846.7 66.3 907.2 66.3C967.7 66.3 1028.3 61.7 1088.8 57.3C1149.3 53 1209.7 49 1270.2 51C1330.7 53 1391.3 61 1451.8 63.2C1512.3 65.3 1572.7 61.7 1633.2 56.7C1693.7 51.7 1754.3 45.3 1814.8 45.8C1875.3 46.3 1935.7 53.7 1965.8 57.3L1996 61L1996 0L1965.8 0C1935.7 0 1875.3 0 1814.8 0C1754.3 0 1693.7 0 1633.2 0C1572.7 0 1512.3 0 1451.8 0C1391.3 0 1330.7 0 1270.2 0C1209.7 0 1149.3 0 1088.8 0C1028.3 0 967.7 0 907.2 0C846.7 0 786.3 0 725.8 0C665.3 0 604.7 0 544.2 0C483.7 0 423.3 0 362.8 0C302.3 0 241.7 0 181.2 0C120.7 0 60.3 0 30.2 0L0 0Z" fill="#ff0066" stroke-linecap="round" stroke-linejoin="miter">
                    </path>
                    <path
                        id="layer2"
                        d="M0 33L17.5 38.3C35 43.7 70 54.3 105 60.8C140 67.3 175 69.7 210 63.3C245 57 280 42 315 41.7C350 41.3 385 55.7 420 58.2C455 60.7 490 51.3 525 49.5C560 47.7 595 53.3 630 57.5C665 61.7 700 64.3 735 66.2C770 68 805 69 840 70C875 71 910 72 945.2 71.8C980.3 71.7 1015.7 70.3 1050.8 65.8C1086 61.3 1121 53.7 1156 51.8C1191 50 1226 54 1261 53C1296 52 1331 46 1366 46.7C1401 47.3 1436 54.7 1471 53C1506 51.3 1541 40.7 1576 38.7C1611 36.7 1646 43.3 1681 48.7C1716 54 1751 58 1786 57.3C1821 56.7 1856 51.3 1891 45.7C1926 40 1961 34 1978.5 31L1996 28L1996 0L1978.5 0C1961 0 1926 0 1891 0C1856 0 1821 0 1786 0C1751 0 1716 0 1681 0C1646 0 1611 0 1576 0C1541 0 1506 0 1471 0C1436 0 1401 0 1366 0C1331 0 1296 0 1261 0C1226 0 1191 0 1156 0C1121 0 1086 0 1050.8 0C1015.7 0 980.3 0 945.2 0C910 0 875 0 840 0C805 0 770 0 735 0C700 0 665 0 630 0C595 0 560 0 525 0C490 0 455 0 420 0C385 0 350 0 315 0C280 0 245 0 210 0C175 0 140 0 105 0C70 0 35 0 17.5 0L0 0Z" fill="#ff0066" stroke-linecap="round" stroke-linejoin="miter"
                        style={{ visibility: "hidden" }}
                    ></path>
                </svg>
            </div > */}