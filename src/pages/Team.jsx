import React from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./team.css";
import { useState, useEffect } from "react";


function getTint(hex, percentage) {
    // Ensure hex is in the correct format
    hex = hex.replace(/^#/, '');

    // Convert hex to RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Calculate the new tinted color by blending with white
    r = Math.round(r + (255 - r) * (percentage / 100));
    g = Math.round(g + (255 - g) * (percentage / 100));
    b = Math.round(b + (255 - b) * (percentage / 100));

    // Convert back to hex
    let tintedHex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

    return tintedHex;
}

function Card({ title, description, image }) {
    return (
        <div className="card">
            <img src={image} alt={title} />

            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
const Viewdes = ({ title, description, image, color }) => {
    return (
        <>

            <div className='cardv0' style={{ width: 300, height: 300, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' , }}>

                <div style={{ height: 300, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>

                    <div style={{ width: 300, height: 300.73, position: 'relative' }}>
                        <div style={{ width: 300, height: 300, left: 0, top: 0, position: 'absolute', borderRadius: 20, border: `5px ${color} solid`, backgroundColor: getTint(color, 75) }}>
                            <img className="scard" src={image} alt={title} style={{ width: 200, height: 200, borderRadius: 100, transform: 'translate(40px,17px)', padding : '0', border: '4px solid #bab3b3' }} />

                        </div>
                        <div style={{ width: 300, height: 121.71, left: 0, top: 179.02, position: 'absolute', display: 'flex', justifyContent: 'center' }}>
                            <div data-svg-wrapper style={{ left: 0, top: 43.50, position: 'absolute' }}>
                                <svg width="300" height="79" viewBox="0 0 300 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 30.1465C0 13.5779 13.4315 0.146484 30 0.146484H300V58.365C300 69.4107 291.046 78.365 280 78.365H20C8.9543 78.365 0 69.4107 0 58.365V30.1465Z" fill={color} />
                                </svg>
                            </div>
                            <div data-svg-wrapper style={{ left: 270.19, top: 0, position: 'absolute' }}>
                                <svg width="30" height="45" viewBox="0 0 30 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.192383 44.1461H30V0.816244C30 0.760843 29.9999 0.705477 29.9996 0.650146V14.1467C29.9996 30.6509 16.6722 44.0424 0.192383 44.1461Z" fill={color} />
                                </svg>
                            </div>
                            <div style={{ top: 51.98, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 25, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', textShadow: '0px 0px 11px rgba(0, 0, 0, 0.25)' }}>{title}</div>
                            <div style={{ left: 90, top: 91.98, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', textShadow: '0px 0px 11px rgba(0, 0, 0, 0.25)' }}>{description}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const Viewmob = ({ title, description, image, color }) => {
    return (
        <div className="cardv0" style={{ width: 121, height: 127.48, position: 'relative' }}>
            <div style={{ width: 60.50, height: 125.32, left: 0, top: 2.16, position: 'absolute', background: '#D9D9D9', borderRadius: 12 }} />
            <div style={{ width: 60.50, height: 125.32, left: 60.50, top: 2.16, position: 'absolute', background: `${color}`, borderRadius: 12 }} />
            <div style={{ width: 121, height: 79.95, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderTopLeftRadius: 12, borderTopRightRadius: 12, borderBottomRightRadius: 12 }} />
            <div style={{ width: 119.92, height: 47.54, left: 0, top: 79.95, position: 'absolute', background: `${color}`, borderRadius: 12 }} />
            <div style={{ width: 121, height: 127.48, left: 0, top: 0, position: 'absolute', borderRadius: 12, border: `3px ${color} solid` }} />
            <div style={{ width: 86.43, height: 16.21, left: 17.29, top: 87.51, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{title}</div>
            <div style={{ width: 71.30, height: 12.96, left: 24.85, top: 105.88, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 9, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{description}</div>
            <div style={{ width: 78.05, height: 78.05, left: 21.29, top: 2.37, position: 'absolute', background: '#E10000', borderRadius: 9999, border: '1px #616161 solid' }} />
        </div>
    )
}

function Scard({ title, description, image, color, width }) {
    let render = true;
    if (width < 600) { render = false; }
    return (
        <>
            {render ? <Viewdes title={title} description={description} image={image} color={color} /> : <Viewmob title={title} description={description} image={image} color={color} />}
        </>

    );
}

const Teamlabel_des = () => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '50vh' }} itemID="faculty-label">
            <div style={{ width: 583.50, height: 200.39, position: 'relative' }} >
                <div style={{ width: 583.50, height: 200.39, left: 0, top: 0, position: 'absolute' }}>
                    <div style={{ width: 583.50, height: 200.39, left: 0, top: 0, position: 'absolute' }}>
                        <div data-svg-wrapper style={{ left: 0, top: 11, position: 'absolute' }}>
                            <svg width="566" height="190" viewBox="0 0 566 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4339 39.2226C17.6259 29.5122 25.6677 22.0893 35.4423 21.6772L530.592 0.797328C541.199 0.35003 550.308 8.26873 551.34 18.8352L565.856 167.447C567.005 179.205 557.765 189.392 545.951 189.392H20.6052C8.59302 189.392 -0.70935 178.878 0.754218 166.955L16.4339 39.2226Z" fill="#413E4F" />
                            </svg>
                        </div>
                        <div data-svg-wrapper style={{ left: 13.50, top: 0, position: 'absolute' }}>
                            <svg width="566" height="190" viewBox="0 0 566 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9339 39.2226C17.1259 29.5122 25.1677 22.0893 34.9423 21.6772L530.092 0.797328C540.699 0.35003 549.808 8.26873 550.84 18.8352L565.356 167.447C566.505 179.205 557.265 189.392 545.451 189.392H20.1052C8.09302 189.392 -1.20935 178.878 0.254218 166.955L15.9339 39.2226Z" fill="#7DC788" />
                            </svg>
                        </div>
                        <div style={{ width: 10, height: 10, left: 45, top: 34, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        <div style={{ width: 10, height: 10, left: 542, top: 15, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        <div style={{ width: 10, height: 10, left: 556, top: 162, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        <div style={{ width: 10, height: 10, left: 31, top: 164, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                    </div>
                    <div style={{ width: 583.50, height: 200.39, left: 0, top: 0, position: 'absolute' }}>
                        <div data-svg-wrapper style={{ left: 0, top: 11, position: 'absolute' }}>
                            <svg width="566" height="190" viewBox="0 0 566 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4339 39.2226C17.6259 29.5122 25.6677 22.0893 35.4423 21.6772L530.592 0.797328C541.199 0.35003 550.308 8.26873 551.34 18.8352L565.856 167.447C567.005 179.205 557.765 189.392 545.951 189.392H20.6052C8.59302 189.392 -0.70935 178.878 0.754218 166.955L16.4339 39.2226Z" fill="#413E4F" />
                            </svg>
                        </div>
                        <div data-svg-wrapper style={{ left: 13.50, top: 0, position: 'absolute' }}>
                            <svg width="566" height="190" viewBox="0 0 566 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9339 39.2226C17.1259 29.5122 25.1677 22.0893 34.9423 21.6772L530.092 0.797328C540.699 0.35003 549.808 8.26873 550.84 18.8352L565.356 167.447C566.505 179.205 557.265 189.392 545.451 189.392H20.1052C8.09302 189.392 -1.20935 178.878 0.254218 166.955L15.9339 39.2226Z" fill="#9591A8" />
                            </svg>
                        </div>
                        <div style={{ width: 10, height: 10, left: 45, top: 34, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        <div style={{ width: 10, height: 10, left: 542, top: 15, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        <div style={{ width: 10, height: 10, left: 556, top: 162, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        <div style={{ width: 10, height: 10, left: 31, top: 164, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                    </div>
                </div>
                <div style={{ width: 222, height: 100, left: 163, top: 30, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 90, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>TEA</div>
                <div data-svg-wrapper style={{ left: 350.69, top: 64.66, position: 'absolute' }}>
                    <svg width="57" height="68" viewBox="0 0 57 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.6875 0.8125L56.4297 0.65625L56.5859 9.28906H48.6953V67.8438H45.4922L40.375 62.7266V38.5469H19.5547V47.2188H14.5156L4.125 36.8672V31.6719H11.0781V9.28906H0.6875V0.8125ZM19.3203 9.44531V31.6719H40.1016V9.44531H19.3203Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>

    )

}

const Teamlabel_mob = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '16vh' }} itemID="faculty-label">
            <div style={{ width: 201.09, height: 79, position: 'relative' }}>
                <div style={{ width: 201.09, height: 79, left: 0, top: 0, position: 'absolute' }}>
                    <div style={{ width: 201.09, height: 79, left: 0, top: 0, position: 'absolute' }}>
                        <div data-svg-wrapper style={{ left: 0, top: 4.34, position: 'absolute' }}>
                            <svg width="193" height="74" viewBox="0 0 193 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.23858 25.1821C4.28984 15.3855 12.3194 7.81398 22.1608 7.33925L168.808 0.265185C179.554 -0.253158 188.784 7.82142 189.7 18.5403L192.582 52.2984C193.579 63.973 184.372 74 172.655 74H20.261C8.37084 74 -0.893476 63.6884 0.375159 51.8661L3.23858 25.1821Z" fill="#413E4F" />
                            </svg>
                        </div>
                        <div data-svg-wrapper style={{ left: 4.65, top: 0, position: 'absolute' }}>
                            <svg width="194" height="75" viewBox="0 0 194 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.891 25.8456C4.94226 16.049 12.9718 8.47745 22.8132 8.00271L169.461 0.928653C180.206 0.410309 189.437 8.48488 190.352 19.2038L193.235 52.9619C194.231 64.6365 185.024 74.6635 173.307 74.6635H20.9134C9.02325 74.6635 -0.241063 64.3519 1.02757 52.5296L3.891 25.8456Z" fill="#7DC788" />
                            </svg>
                        </div>
                        <div style={{ width: 3.69, height: 3.69, left: 15.39, top: 13.53, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        <div style={{ width: 3.69, height: 3.69, left: 186.67, top: 6.04, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        <div style={{ width: 3.69, height: 3.69, left: 191.49, top: 63.99, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        <div style={{ width: 3.69, height: 3.69, left: 10.56, top: 64.78, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                    </div>
                    <div style={{ width: 201.09, height: 79, left: 0, top: 0, position: 'absolute' }}>
                        <div data-svg-wrapper style={{ left: 0, top: 4.34, position: 'absolute' }}>
                            <svg width="193" height="74" viewBox="0 0 193 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.23858 25.1821C4.28984 15.3855 12.3194 7.81398 22.1608 7.33925L168.808 0.265185C179.554 -0.253158 188.784 7.82142 189.7 18.5403L192.582 52.2984C193.579 63.973 184.372 74 172.655 74H20.261C8.37084 74 -0.893476 63.6884 0.375159 51.8661L3.23858 25.1821Z" fill="#413E4F" />
                            </svg>
                        </div>
                        <div data-svg-wrapper style={{ left: 4.65, top: 0, position: 'absolute' }}>
                            <svg width="194" height="75" viewBox="0 0 194 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.891 25.8456C4.94226 16.049 12.9718 8.47745 22.8132 8.00271L169.461 0.928653C180.206 0.410309 189.437 8.48488 190.352 19.2038L193.235 52.9619C194.231 64.6365 185.024 74.6635 173.307 74.6635H20.9134C9.02325 74.6635 -0.241063 64.3519 1.02757 52.5296L3.891 25.8456Z" fill="#9591A8" />
                            </svg>
                        </div>
                        <div style={{ width: 3.69, height: 3.69, left: 15.39, top: 13.53, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        <div style={{ width: 3.69, height: 3.69, left: 186.67, top: 6.04, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        <div style={{ width: 3.69, height: 3.69, left: 191.49, top: 63.99, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        <div style={{ width: 3.69, height: 3.69, left: 10.56, top: 64.78, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                    </div>
                </div>
                <div style={{ width: 76.51, height: 39.42, left: 50, top: 14, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 36, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>TEA</div>
                <div data-svg-wrapper style={{ left: 124, top: 29, position: 'absolute' }}>
                    <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.0615981L19.2101 0L19.2639 3.4033H16.5446V26.4872H15.4407L13.6772 24.4699V14.9375H6.50207V18.3562H4.76549L1.18464 14.2754V12.2272H3.58085V3.4033H0V0.0615981ZM6.4213 3.4649V12.2272H13.583V3.4649H6.4213Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

const Faculty = ({ width }) => {
    let render = true;
    if (width < 600) render = false;
    
    return (
        <>

            {render ? <Teamlabel_des /> : <Teamlabel_mob />}
            <div className="cards" >
                <Card
                    title="Dr. Mani Kant Paswan"
                    description="Patron-in-Chief"
                    image="http://sliet.ac.in/wp-content/uploads/2024/07/MKPaswan.jpg"
                />
                <Card
                    title="Prof. M. M. Sinha"
                    description="Patron"
                    image="http://sliet.ac.in/wp-content/uploads/avatars/157/60d1dadd550ab-bpfull.jpg"
                />
                <Card
                    title="Prof. Indraj Singh"
                    description="Chairman, Madhuram’25"
                    image="http://sliet.ac.in/wp-content/uploads/avatars/121/64ed8df8a324e-bpfull.jpg"
                />
                <Card
                    title="Dr.Gurjinder Kaur"
                    description="Vice-Chairman, Madhuram’25"
                    image="http://sliet.ac.in/wp-content/uploads/avatars/14/5f2245e7a7f1bde5dee5bda48e09d411-bpfull.jpg"
                />

                <Card
                    title="Dr. Vivek Kumar"
                    description="Vice-Chairman, Madhuram’25"
                    image="http://sliet.ac.in/wp-content/uploads/avatars/126/606ed6eaa2706-bpfull.jpg"
                />


            </div>

        </>
    )

}

const Coordinators_label_des = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '50vh' }} >

            <div style={{ width: 1358, height: 200.39, position: 'relative' }}>
                <div style={{ width: 1358, height: 200.39, left: 0, top: 0, position: 'absolute' }}>
                    <div style={{ width: 1358, height: 200.39, left: 0, top: 0, position: 'absolute' }}>
                        <div style={{ width: 1358, height: 200.39, left: 0, top: 0, position: 'absolute' }}>
                            <div data-svg-wrapper style={{ left: 0, top: 11, position: 'absolute' }}>
                                <svg width="1316" height="190" viewBox="0 0 1316 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.6437 36.6261C40.0599 28.1688 47.7178 22.2828 56.512 22.1234L1261.27 0.294607C1270.74 0.122989 1279.03 6.62009 1281.13 15.8577L1315.03 164.958C1317.87 177.474 1308.36 189.392 1295.52 189.392H20.514C7.22664 189.392 -2.36665 176.674 1.2834 163.898L37.6437 36.6261Z" fill="#413E4F" />
                                </svg>
                            </div>
                            <div data-svg-wrapper style={{ left: 31.42, top: 0, position: 'absolute' }}>
                                <svg width="1316" height="190" viewBox="0 0 1316 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.0612 36.6261C40.4773 28.1688 48.1353 22.2828 56.9295 22.1234L1261.68 0.294607C1271.15 0.122989 1279.45 6.62009 1281.55 15.8577L1315.44 164.958C1318.29 177.474 1308.78 189.392 1295.94 189.392H20.9315C7.64412 189.392 -1.94917 176.674 1.70088 163.898L38.0612 36.6261Z" fill="#7DC788" />
                                </svg>
                            </div>
                            <div style={{ width: 15.26, height: 15.26, left: 108.74, top: 31.37, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                            <div style={{ width: 15.26, height: 15.26, left: 1265.42, top: 12.37, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                            <div style={{ width: 15.26, height: 15.26, left: 1298.01, top: 159.37, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                            <div style={{ width: 15.26, height: 15.26, left: 76.16, top: 161.37, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        </div>
                        <div style={{ width: 1358, height: 200.39, left: 0, top: 0, position: 'absolute' }}>
                            <div data-svg-wrapper style={{ left: 0, top: 11, position: 'absolute' }}>
                                <svg width="1316" height="190" viewBox="0 0 1316 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.6437 36.6261C40.0599 28.1688 47.7178 22.2828 56.512 22.1234L1261.27 0.294607C1270.74 0.122989 1279.03 6.62009 1281.13 15.8577L1315.03 164.958C1317.87 177.474 1308.36 189.392 1295.52 189.392H20.514C7.22664 189.392 -2.36665 176.674 1.2834 163.898L37.6437 36.6261Z" fill="#413E4F" />
                                </svg>
                            </div>
                            <div data-svg-wrapper style={{ left: 31.42, top: 0, position: 'absolute' }}>
                                <svg width="1316" height="190" viewBox="0 0 1316 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.0612 36.6261C40.4773 28.1688 48.1353 22.2828 56.9295 22.1234L1261.68 0.294607C1271.15 0.122989 1279.45 6.62009 1281.55 15.8577L1315.44 164.958C1318.29 177.474 1308.78 189.392 1295.94 189.392H20.9315C7.64412 189.392 -1.94917 176.674 1.70088 163.898L38.0612 36.6261Z" fill="#9591A8" />
                                </svg>
                            </div>
                            <div style={{ width: 15.26, height: 15.26, left: 108.74, top: 31.37, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                            <div style={{ width: 15.26, height: 15.26, left: 1265.42, top: 12.37, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                            <div style={{ width: 15.26, height: 15.26, left: 1298.01, top: 159.37, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                            <div style={{ width: 15.26, height: 15.26, left: 76.16, top: 161.37, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        </div>
                    </div>
                    <div style={{ width: 1237.37, height: 108, left: 53, top: 46.75, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 90, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>OVERALL COORDINATOR</div>
                </div>
                <div data-svg-wrapper style={{ left: 1208, top: 72, position: 'absolute' }}>
                    <svg width="65" height="68" viewBox="0 0 65 68" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translateY(10px)' }}>
                        <path d="M0 0H64.6406V8.47656L59.0547 8.63281V67.0312H55.8516L50.8125 61.9141V36.1328L33.8594 36.0547L30.3828 32.6172H28.5469L27.8438 34.2188L26.7891 36.0547L25.7734 37.6562L23.3516 39.4922L21.2812 40.3906L19.2109 40.9375L18.9766 42.2266L19.6016 44.0625L20.3828 45.8984L21.2812 47.5L22.5703 49.5703L24.0156 51.8359L25.7734 53.75L27.6094 55.9766L29.2109 57.5781L30.8906 59.0234L32.4141 60.3906L34.0156 61.7578L36.3203 63.75L38.5469 65.1172H40.3828V67.1875H37.5313L34.4844 65.1953L32.4141 63.8281L29.5234 61.9922L27.2188 59.8438L24.1719 57.5781L21.2031 54.8047L18.0781 51.6016L15.6172 49.1016L13.9375 46.5625L12.1406 44.0625L11.3594 42.2266L10.4609 39.1016V36.6406L10.7344 33.9844L11.5938 31.7578L12.8047 29.9219L14.7969 28.6328L17.1016 27.6562H19.9141V10L0.5 10.5L0 0ZM28.3125 8.63281V29.2578L50.8125 29.1797V8.63281H28.3125Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

const Coordinators_label_mob = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '22vh' }} >

            <div style={{ width: 382, height: 56.37, position: 'relative' }}>
                <div style={{ width: 382, height: 56.37, left: 0, top: 0, position: 'absolute' }}>
                    <div style={{ width: 382, height: 56.37, left: 0, top: 0, position: 'absolute' }}>
                        <div style={{ width: 382, height: 56.37, left: 0, top: 0, position: 'absolute' }}>
                            <div data-svg-wrapper style={{ left: 0, top: 3.09, position: 'absolute' }}>
                                <svg width="363" height="54" viewBox="0 0 363 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.35408 20.6275C5.77024 12.1702 13.4282 6.2841 22.2224 6.12475L338.791 0.388876C348.263 0.217258 356.556 6.71436 358.656 15.952L361.608 28.9358C364.453 41.4514 354.94 53.3694 342.105 53.3694H20.514C7.22663 53.3694 -2.36665 40.6516 1.2834 27.8754L3.35408 20.6275Z" fill="#413E4F" />
                                </svg>
                            </div>
                            <div data-svg-wrapper style={{ left: 8.84, top: -0, position: 'absolute' }}>
                                <svg width="362" height="54" viewBox="0 0 362 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.19173 20.5332C5.6079 12.0759 13.2658 6.18983 22.06 6.03049L338.629 0.294607C348.101 0.122989 356.394 6.62009 358.494 15.8577L361.445 28.8416C364.291 41.3571 354.778 53.2752 341.943 53.2752H20.3517C7.06429 53.2752 -2.52899 40.5574 1.12106 27.7812L3.19173 20.5332Z" fill="#7DC788" />
                                </svg>
                            </div>
                            <div style={{ width: 4.29, height: 4.29, left: 30.59, top: 8.82, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                            <div style={{ width: 4.29, height: 4.29, left: 355.96, top: 3.48, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                            <div style={{ width: 4.29, height: 4.29, left: 365.12, top: 44.83, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                            <div style={{ width: 4.29, height: 4.29, left: 21.42, top: 45.39, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        </div>
                        <div style={{ width: 382, height: 56.37, left: 0, top: 0, position: 'absolute' }}>
                            <div data-svg-wrapper style={{ left: 0, top: 3.09, position: 'absolute' }}>
                                <svg width="363" height="54" viewBox="0 0 363 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.35408 20.6275C5.77024 12.1702 13.4282 6.2841 22.2224 6.12475L338.791 0.388876C348.263 0.217258 356.556 6.71436 358.656 15.952L361.608 28.9358C364.453 41.4514 354.94 53.3694 342.105 53.3694H20.514C7.22663 53.3694 -2.36665 40.6516 1.2834 27.8754L3.35408 20.6275Z" fill="#413E4F" />
                                </svg>
                            </div>
                            <div data-svg-wrapper style={{ left: 8.84, top: -0, position: 'absolute' }}>
                                <svg width="362" height="54" viewBox="0 0 362 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.19173 20.5332C5.6079 12.0759 13.2658 6.18983 22.06 6.03049L338.629 0.294607C348.101 0.122989 356.394 6.62009 358.494 15.8577L361.445 28.8416C364.291 41.3571 354.778 53.2752 341.943 53.2752H20.3517C7.06429 53.2752 -2.52899 40.5574 1.12106 27.7812L3.19173 20.5332Z" fill="#9591A8" />
                                </svg>
                            </div>
                            <div style={{ width: 4.29, height: 4.29, left: 30.59, top: 8.82, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                            <div style={{ width: 4.29, height: 4.29, left: 355.96, top: 3.48, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                            <div style={{ width: 4.29, height: 4.29, left: 365.12, top: 44.83, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                            <div style={{ width: 4.29, height: 4.29, left: 21.42, top: 45.39, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                        </div>
                    </div>
                    <div style={{ width: 348.07, height: 30.38, left: 14.91, top: 13.15, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>OVERALL COORDINATOR</div>
                </div>
                <div data-svg-wrapper style={{ left: 340, top: 21, position: 'absolute' }}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H18.1832V2.38443L16.6119 2.42838V18.8556H15.7108L14.2934 17.4162V10.164L9.52452 10.1421L8.54657 9.17509H8.03013L7.83234 9.62561L7.53566 10.1421L7.24997 10.5926L6.56871 11.109L5.98634 11.3617L5.40397 11.5156L5.33804 11.8782L5.51385 12.3946L5.73361 12.9111L5.98634 13.3616L6.34895 13.9439L6.75551 14.5813L7.24997 15.1197L7.76642 15.746L8.21693 16.1965L8.68942 16.6031L9.11796 16.9877L9.56847 17.3722L10.2168 17.9326L10.8431 18.3172H11.3595V18.8996H10.5574L9.70033 18.3392L9.11796 17.9546L8.30483 17.4382L7.65653 16.8338L6.79946 16.1965L5.96436 15.4164L5.08531 14.5153L4.39306 13.8121L3.92057 13.0979L3.41511 12.3946L3.19535 11.8782L2.94262 10.9991V10.3069L3.01954 9.55968L3.26128 8.93336L3.60191 8.41691L4.16231 8.0543L4.81061 7.7796H5.60175V2.81296L0.140648 2.95361L0 0ZM7.9642 2.42838V8.23011L14.2934 8.20814V2.42838H7.9642Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

const Coordinators = ({ width }) => {
    let render = true;
    if (width < 600) {
        render = false;
    }

    return (
        <>
            {render ? < Coordinators_label_des /> : <Coordinators_label_mob />}

            <div className="scards" >
                <Scard
                    title="Aditya Mudgal"
                    description="GCS/2241032"
                    image="/assets/aditya.jpg"
                    color="#34d8a1"
                    width={width}
                />
                <Scard
                    title="Arpan Kusum"
                    description="GCS/2241032"
                    image="https://via.placeholder.com/300"
                    color="#CF86E0"
                    width={width}
                />
                <Scard
                    title="Arpanveer Sidhu"
                    description="GCS/2241007"
                    image="https://via.placeholder.com/300"
                    color="#FAB483"
                    width={width}
                />
                <Scard
                    title="Drishty Priya"
                    description="GCS/2241032"
                    image="https://via.placeholder.com/300"
                    color="#5DC2EA"
                    width={width}
                />
                <Scard
                    title="Farhan Ali"
                    description="GCS/2241032"
                    image="https://via.placeholder.com/300"
                    color="#E17272"
                    width={width}
                />
                <Scard
                    title="Kishlay Raj"
                    description="GCS/2241032"
                    image="https://via.placeholder.com/300"
                    color="#E53253"
                    width={width}
                />
                <Scard
                    title="Parveen"
                    description="GCS/2241032"
                    image="https://via.placeholder.com/300"
                    color="#458CB2"
                    width={width}
                />
                <Scard
                    title="Prakhyat Prakhar"
                    description="GCS/2241032"
                    image="https://via.placeholder.com/300"
                    color="#34D8A1"
                    width={width}
                />
                <Scard
                    title="Priyanshu Deep"
                    description="GCS/2241032"
                    image="https://via.placeholder.com/300"
                    color="#CF86E0"
                    width={width}
                />
                <Scard
                    title="Subham Singh"
                    description="GCS/2241032"
                    image="https://via.placeholder.com/300"
                    color="#FAB483"
                    width={width}
                />
                <Scard
                    title="Sudhanshu Rajan"
                    description="GCS/2241032"
                    image="https://via.placeholder.com/300"
                    color="#5DC2EA"
                    width={width}
                />
                <Scard
                    title="Urshita"
                    description="GCS/2241032"
                    image="https://via.placeholder.com/300"
                    color="#EEBD3D"
                    width={width}

                />



            </div>
        </>
    )

}

const Pattern = ({rotate}) => {
    if(rotate === 'true'){
        return (
            <>
                <div style={{ display: 'flex', overflow: 'hidden' }} className="pattern">
                    <img src="/assets/pattern.png" style={{transform: 'rotate(180deg)'}}></img>
                    <img src="/assets/pattern.png" style={{transform: 'rotate(180deg)'}}></img>
                    <img src="/assets/pattern.png" style={{transform: 'rotate(180deg)'}}></img>
                    <img src="/assets/pattern.png" style={{transform: 'rotate(180deg)'}}></img>
                    <img src="/assets/pattern.png" style={{transform: 'rotate(180deg)'}}></img>
                    <img src="/assets/pattern.png" style={{transform: 'rotate(180deg)'}}></img>
                    <img src="/assets/pattern.png" style={{transform: 'rotate(180deg)'}}></img>
                    <img src="/assets/pattern.png" style={{transform: 'rotate(180deg)'}}></img>
                    <img src="/assets/pattern.png" style={{transform: 'rotate(180deg)'}}></img>
                    <img src="/assets/pattern.png" style={{transform: 'rotate(180deg)'}}></img>
                    <img src="/assets/pattern.png" style={{transform: 'rotate(180deg)'}}></img>
                    <img src="/assets/pattern.png" style={{transform: 'rotate(180deg)'}}></img>
                    <img src="/assets/pattern.png" style={{transform: 'rotate(180deg)'}}></img>
                </div>
            </>)
    }
    else
    return (
        <>
            <div style={{ display: 'flex', overflow: 'hidden' }} className="pattern">
                <img src="/assets/pattern.png" ></img>
                <img src="/assets/pattern.png" ></img>
                <img src="/assets/pattern.png" ></img>
                <img src="/assets/pattern.png" ></img>
                <img src="/assets/pattern.png" ></img>
                <img src="/assets/pattern.png" ></img>
                <img src="/assets/pattern.png" ></img>
                <img src="/assets/pattern.png" ></img>
                <img src="/assets/pattern.png" ></img>
                <img src="/assets/pattern.png" ></img>
                <img src="/assets/pattern.png" ></img>
                <img src="/assets/pattern.png" ></img>
                <img src="/assets/pattern.png" ></img>
            </div>
        </>
    )
}

function Team() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        // Cleanup function to remove event listener when component unmounts
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full" style={{ backgroundColor: "#734297" }}>
            <Header />
            <Pattern rotate='false'/>
            <div className="container mx-auto px-4 py-8 lg:py-16">

                <Faculty width={width} />
                <Coordinators width={width} />

            </div>
            <Pattern rotate='true' />
            <Footer />
        </div>
    );
}

export default Team;
