import { useState, useEffect, useCallback, useRef } from "react";

const C = {
  bg:"#0F1419", s1:"#161C24", s2:"#1E252E", s3:"#262E38", s4:"#121820",
  t1:"#E8EAED", t2:"#8A919A", t3:"#5A6270",
  ac:"#B8BFC8", acB:"rgba(184,191,200,0.06)", acD:"rgba(184,191,200,0.18)",
  li:"#C8FF6B", liB:"rgba(200,255,107,0.04)", liD:"rgba(200,255,107,0.12)",
  tl:"#9AC5B9", tlB:"rgba(154,197,185,0.08)", tlD:"rgba(154,197,185,0.2)", tl2:"#698886",
  am:"#FFB454", amB:"rgba(255,180,84,0.08)", amD:"rgba(255,180,84,0.2)",
  rd:"#FF4D5A", rdB:"rgba(255,77,90,0.08)", rdD:"rgba(255,77,90,0.2)",
  vi:"#6B8AE6", viB:"rgba(107,138,230,0.08)",
  bd:"#262E38"
};
const FT="'GeistMono',monospace",FB="'Pixelify Sans',sans-serif",MN="'GeistMono',monospace";
const CSS=`@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&display=swap');@font-face{font-family:'GeistMono';src:url('https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/GeistMono-Regular.woff2') format('woff2');font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:'GeistMono';src:url('https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/GeistMono-Medium.woff2') format('woff2');font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:'GeistMono';src:url('https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/GeistMono-SemiBold.woff2') format('woff2');font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:'GeistMono';src:url('https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/GeistMono-Bold.woff2') format('woff2');font-weight:700;font-style:normal;font-display:swap}*{margin:0;padding:0;box-sizing:border-box}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(184,191,200,0.1);border-radius:3px}@keyframes fu{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes fi{from{opacity:0}to{opacity:1}}@keyframes si{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}@keyframes gl{0%,100%{box-shadow:0 0 8px rgba(154,197,185,0.3)}50%{box-shadow:0 0 24px rgba(154,197,185,0.6)}}@keyframes bo{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}@keyframes pu{0%,100%{opacity:1}50%{opacity:0.5}}@keyframes twinkle{0%,100%{opacity:0.15}50%{opacity:0.8}}@keyframes confetti{0%{transform:translateY(-10px) rotate(0);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}@keyframes mGlow{0%,100%{box-shadow:0 0 6px rgba(154,197,185,0.3),0 0 20px rgba(154,197,185,0.15)}50%{box-shadow:0 0 14px rgba(154,197,185,0.6),0 0 40px rgba(154,197,185,0.3)}}@keyframes vGlow{0%,100%{box-shadow:0 0 8px rgba(154,197,185,0.2),inset 0 0 2px rgba(154,197,185,0.05)}50%{box-shadow:0 0 20px rgba(154,197,185,0.5),inset 0 0 6px rgba(154,197,185,0.1)}}@keyframes orbit{from{transform:rotate(0deg) translateX(var(--r)) rotate(0deg)}to{transform:rotate(360deg) translateX(var(--r)) rotate(-360deg)}}@keyframes ping{0%{opacity:0;transform:scale(0)}30%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0)}}.fu{animation:fu .4s ease-out both}.fi{animation:fi .3s ease-out both}.si{animation:si .3s ease-out both}.gl{animation:gl 2s ease-in-out infinite}.bo{animation:bo 1s ease-in-out infinite}.pu{animation:pu 2s ease-in-out infinite}@keyframes tilt{0%,100%{transform:rotateY(-8deg) rotateX(2deg)}50%{transform:rotateY(8deg) rotateX(-2deg)}}@keyframes wave{0%{background-position:0% 50%}25%{background-position:100% 25%}50%{background-position:50% 100%}75%{background-position:25% 0%}100%{background-position:0% 50%}}@keyframes pcGlow{0%,100%{box-shadow:0 0 20px rgba(154,197,185,.12)}50%{box-shadow:0 0 40px rgba(154,197,185,.28)}}`;
function Logo({size=20}){return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="4" r="1.5" fill={C.tl}/><circle cx="6" cy="10" r="1.5" fill={C.tl}/><circle cx="18" cy="9" r="1.5" fill={C.tl}/><circle cx="10" cy="15" r="1.5" fill={C.tl}/><circle cx="16" cy="16" r="1.5" fill={C.tl}/><circle cx="4" cy="19" r="1.2" fill={C.tl} opacity="0.6"/><circle cx="20" cy="20" r="1.2" fill={C.tl} opacity="0.6"/><line x1="12" y1="4" x2="6" y2="10" stroke={C.tl} strokeWidth="0.6" opacity="0.5"/><line x1="12" y1="4" x2="18" y2="9" stroke={C.tl} strokeWidth="0.6" opacity="0.5"/><line x1="6" y1="10" x2="10" y2="15" stroke={C.tl} strokeWidth="0.6" opacity="0.5"/><line x1="18" y1="9" x2="16" y2="16" stroke={C.tl} strokeWidth="0.6" opacity="0.5"/><line x1="10" y1="15" x2="16" y2="16" stroke={C.tl} strokeWidth="0.6" opacity="0.5"/><line x1="10" y1="15" x2="4" y2="19" stroke={C.tl2} strokeWidth="0.4" opacity="0.3"/><line x1="16" y1="16" x2="20" y2="20" stroke={C.tl2} strokeWidth="0.4" opacity="0.3"/></svg>);}
const SATS=[{id:"NS-001",nm:"Sentinel-7A",ob:"LEO",al:"550 km",st:"Nominal",mg:14.2,ow:"Planet Labs",ms:"TerraScan",hp:98,tp:"22C",fl:87,pw:"1.2 kW",bt:94,up:"99.7%",tl:[14.2,13.8,14.5,13.1,14.8,14.0,13.5,14.2,15.1,14.6,13.9,14.3]},{id:"NS-002",nm:"Meridian-3",ob:"MEO",al:"8200 km",st:"Nominal",mg:11.8,ow:"NRO",ms:"ShieldNet",hp:95,tp:"19C",fl:92,pw:"2.1 kW",bt:97,up:"99.9%",tl:[11.8,12.1,11.5,12.4,11.9,12.0,11.7,12.3,11.6,12.2,11.8,12.1]},{id:"NS-003",nm:"Aegis-12",ob:"GEO",al:"35786 km",st:"Degraded",mg:6.1,ow:"USSF",ms:"EagleWatch",hp:72,tp:"31C",fl:64,pw:"3.4 kW",bt:81,up:"97.2%",tl:[8.1,7.5,7.2,6.8,6.5,6.1,6.3,6.0,5.8,6.1,5.9,6.1]},{id:"NS-004",nm:"Horizon-2B",ob:"LEO",al:"520 km",st:"Nominal",mg:15.7,ow:"Planet Labs",ms:"TerraScan",hp:99,tp:"21C",fl:91,pw:"1.1 kW",bt:96,up:"99.8%",tl:[15.7,15.2,15.9,15.4,15.6,15.1,15.8,15.3,15.5,15.7,15.2,15.9]},{id:"NS-005",nm:"Pathfinder-9",ob:"LEO",al:"480 km",st:"Critical",mg:2.3,ow:"USSF",ms:"EagleWatch",hp:41,tp:"38C",fl:23,pw:"0.8 kW",bt:52,up:"89.1%",tl:[5.2,4.8,4.1,3.7,3.2,2.8,2.5,2.3,2.1,2.3,2.0,2.3]},{id:"NS-006",nm:"Atlas-14",ob:"MEO",al:"12550 km",st:"Nominal",mg:12.4,ow:"Intelsat",ms:"CommBridge",hp:96,tp:"20C",fl:88,pw:"2.8 kW",bt:95,up:"99.6%",tl:[12.4,12.1,12.6,12.3,12.5,12.2,12.7,12.0,12.4,12.3,12.5,12.4]},{id:"NS-007",nm:"Vigil-4C",ob:"LEO",al:"600 km",st:"Nominal",mg:13.1,ow:"NOAA",ms:"ArcticView",hp:94,tp:"18C",fl:85,pw:"1.4 kW",bt:93,up:"99.5%",tl:[13.1,13.4,12.9,13.2,13.5,13.0,13.3,12.8,13.1,13.6,13.2,13.1]},{id:"NS-008",nm:"Relay-X1",ob:"GEO",al:"35786 km",st:"Nominal",mg:10.5,ow:"Intelsat",ms:"CommBridge",hp:91,tp:"24C",fl:78,pw:"4.2 kW",bt:89,up:"99.3%",tl:[10.5,10.8,10.2,10.6,10.9,10.3,10.7,10.1,10.5,10.4,10.8,10.5]}];
const SITES=[{id:"NW-01",nm:"Vandenberg",rg:"CONUS-W",la:34.7,lo:-120.6,st:"Online",ut:78,ar:4,bm:12,mx:16,ev:"Clear",tp:"18C",wd:"12 kts",bh:"Fiber 10G",up:"99.8%",bn:"S/X/Ka"},{id:"NW-02",nm:"Cape Canaveral",rg:"CONUS-E",la:28.5,lo:-80.6,st:"Online",ut:84,ar:6,bm:18,mx:24,ev:"Clear",tp:"28C",wd:"8 kts",bh:"Fiber 10G",up:"99.9%",bn:"S/X/Ka/UHF"},{id:"NW-03",nm:"Svalbard",rg:"Arctic",la:78.2,lo:15.6,st:"Online",ut:62,ar:3,bm:9,mx:12,ev:"Snow",tp:"-12C",wd:"22 kts",bh:"Fiber 1G+Sat",up:"99.1%",bn:"S/X"},{id:"NW-04",nm:"Darwin",rg:"APAC",la:-12.4,lo:130.8,st:"Degraded",ut:45,ar:4,bm:8,mx:16,ev:"Storm",tp:"34C",wd:"45 kts",bh:"Fiber 10G",up:"96.4%",bn:"S/X/Ka"},{id:"NW-05",nm:"Paumalu",rg:"Pacific",la:21.7,lo:-158.0,st:"Online",ut:71,ar:3,bm:9,mx:12,ev:"Clear",tp:"26C",wd:"15 kts",bh:"Fiber 10G",up:"99.6%",bn:"S/X"},{id:"NW-06",nm:"Goonhilly",rg:"Europe",la:50.0,lo:-5.2,st:"Online",ut:69,ar:5,bm:15,mx:20,ev:"Overcast",tp:"14C",wd:"18 kts",bh:"Fiber 40G",up:"99.7%",bn:"S/X/Ka"},{id:"NW-07",nm:"Alice Springs",rg:"APAC-BK",la:-23.7,lo:133.9,st:"Commissioning",ut:0,ar:2,bm:0,mx:8,ev:"Clear",tp:"30C",wd:"5 kts",bh:"Fiber 1G",up:"--",bn:"S/X"},{id:"NW-08",nm:"Guam",rg:"Pacific-W",la:13.4,lo:144.8,st:"Planned",ut:0,ar:0,bm:0,mx:12,ev:"--",tp:"--",wd:"--",bh:"TBD",up:"--",bn:"S/X/Ka"}];
const MSNS=[{id:"MSN-001",nm:"EagleWatch",cu:"USSF",sl:"SCN Critical",sc:2,st:"Active",pr:"P0",dv:"2.4 TB/day",ds:"Persistent GEO/LEO surveillance for space domain awareness via Aegis-12 and Pathfinder-9."},{id:"MSN-002",nm:"TerraScan",cu:"Planet Labs",sl:"Commercial",sc:3,st:"Active",pr:"P2",dv:"18 TB/day",ds:"High-res Earth imaging for agriculture, urban planning, and environmental monitoring."},{id:"MSN-003",nm:"ShieldNet",cu:"NRO",sl:"Gov High",sc:1,st:"Active",pr:"P1",dv:"800 GB/day",ds:"Classified SIGINT relay for national intelligence via Meridian-3."},{id:"MSN-004",nm:"ArcticView",cu:"NOAA",sl:"Gov Std",sc:1,st:"Scheduled",pr:"P2",dv:"4 TB/day",ds:"Polar weather monitoring using Vigil-4C in sun-synchronous LEO."},{id:"MSN-005",nm:"CommBridge",cu:"Intelsat",sl:"Commercial Prem",sc:2,st:"Active",pr:"P1",dv:"12 TB/day",ds:"Maritime and aviation connectivity via Atlas-14 and Relay-X1."}];
const INCS=[{id:"INC-4401",sv:"Critical",mn:"EagleWatch",si:"Darwin",sy:"Link margin below 5 dB on Pathfinder-9 downlink",ag:"12m",bm:"B-04",sa:"NS-005",as:"J. Chen"},{id:"INC-4402",sv:"Warning",mn:"TerraScan",si:"Svalbard",sy:"Adjacent S-band interference detected",ag:"34m",bm:"B-02",sa:"NS-001",as:"M. Park"},{id:"INC-4403",sv:"Warning",mn:"ShieldNet",si:"Cape Canaveral",sy:"Elevated BER on X-band downlink",ag:"1h 12m",bm:"B-11",sa:"NS-002",as:"R. Singh"},{id:"INC-4404",sv:"Info",mn:"CommBridge",si:"Goonhilly",sy:"Maintenance window B-07 16:00-18:00",ag:"2h 45m",bm:"B-07",sa:"NS-006",as:"System"},{id:"INC-4405",sv:"Critical",mn:"EagleWatch",si:"Darwin",sy:"Array 3 feed temperature critical",ag:"8m",bm:"B-06",sa:"--",as:"K. Tanaka"},{id:"INC-4406",sv:"Warning",mn:"TerraScan",si:"Paumalu",sy:"Doppler compensation drift",ag:"18m",bm:"B-03",sa:"NS-004",as:"A. Kim"}];
const PASSES=[{id:"P-1001",sa:"Sentinel-7A",si:"Vandenberg",mn:"TerraScan",s1:"14:22",s2:"14:38",sl:"Commercial",st:"Active",bm:"B-03",el:"72",rt:"150 Mbps"},{id:"P-1002",sa:"Aegis-12",si:"Cape Canaveral",mn:"EagleWatch",s1:"14:45",s2:"15:12",sl:"SCN Critical",st:"Upcoming",bm:"B-01",el:"45",rt:"50 Mbps"},{id:"P-1003",sa:"Meridian-3",si:"Svalbard",mn:"ShieldNet",s1:"15:00",s2:"15:22",sl:"Gov High",st:"Upcoming",bm:"B-05",el:"38",rt:"75 Mbps"},{id:"P-1004",sa:"Horizon-2B",si:"Paumalu",mn:"TerraScan",s1:"15:30",s2:"15:48",sl:"Commercial",st:"Scheduled",bm:"B-02",el:"65",rt:"150 Mbps"},{id:"P-1005",sa:"Pathfinder-9",si:"Darwin",mn:"EagleWatch",s1:"16:00",s2:"16:18",sl:"SCN Critical",st:"Conflict",bm:"B-04",el:"31",rt:"25 Mbps"},{id:"P-1006",sa:"Atlas-14",si:"Goonhilly",mn:"CommBridge",s1:"16:15",s2:"16:42",sl:"Commercial Prem",st:"Scheduled",bm:"B-09",el:"52",rt:"200 Mbps"}];
const ANOMS=[{id:"AN-301",tp:"RF",ca:"Ionospheric scintillation at Darwin",sv:"High",cf:87,sa:["Pathfinder-9"],si:"Darwin",tm:"13:41",im:"Link margin below threshold for 3+ hours."},{id:"AN-302",tp:"Spectrum",ca:"Adjacent S-band interference Svalbard",sv:"Medium",cf:73,sa:["Sentinel-7A"],si:"Svalbard",tm:"12:58",im:"Increased BER on affected channels."},{id:"AN-303",tp:"Hardware",ca:"Feed assembly temp drift Array 3",sv:"High",cf:91,sa:[],si:"Darwin",tm:"14:05",im:"Array 3 approaching thermal shutdown."},{id:"AN-304",tp:"Link",ca:"Doppler compensation lag on LEO",sv:"Medium",cf:82,sa:["Horizon-2B"],si:"Paumalu",tm:"14:12",im:"Autotrack losing lock on fast passes."}];
const COPILOT=[{sv:"Critical",ti:"Reroute Pathfinder-9 to Paumalu",de:"Darwin link margin critically low. Paumalu B-06 available with 14.1 dB margin.",wh:"Margin 2.3 dB < 5 dB threshold. Scintillation forecast 3+ hours."},{sv:"Critical",ti:"Thermal shutdown Darwin Array 3",de:"Feed temp 68C approaching 70C limit. Graceful shutdown preserves arrays 1,2,4.",wh:"Temp trend +2C/10min. Remaining arrays absorb 60% traffic."},{sv:"Warning",ti:"Reschedule TerraScan +15m",de:"S-band conflict at Svalbard. Shift or switch X-band.",wh:"NTIA overlap 2200-2290 MHz. X-band clear 4 hours."},{sv:"Info",ti:"Optimize Cape beams",de:"11/18 beams active. Rebalance frees 3 for ShieldNet.",wh:"B-12,14,16 on completed passes. ShieldNet needs 2 at 15:00."}];
const ALERTS=[{id:"ALT-001",tm:"14:22:08",sv:"Critical",sr:"Pathfinder-9",de:"Link margin below threshold",ak:false},{id:"ALT-002",tm:"14:18:31",sv:"Critical",sr:"Darwin Array 3",de:"Feed temp 68C",ak:false},{id:"ALT-003",tm:"14:05:12",sv:"Warning",sr:"Svalbard",de:"S-band spectrum conflict",ak:true},{id:"ALT-004",tm:"13:52:44",sv:"Warning",sr:"Paumalu B-03",de:"Doppler drift",ak:true},{id:"ALT-005",tm:"12:30:00",sv:"Info",sr:"Goonhilly B-07",de:"Maintenance 16-18",ak:true}];
const CMDS=[{id:"CMD-401",tm:"14:20",sa:"Pathfinder-9",tp:"Diagnostic",cm:"GET_LINK_STATUS",ss:"Executed",rp:"Margin: 2.3 dB"},{id:"CMD-402",tm:"14:15",sa:"Aegis-12",tp:"Attitude",cm:"SET_ATTITUDE_MODE SAFE",ss:"Queued",rp:"Awaiting contact"},{id:"CMD-403",tm:"14:08",sa:"Sentinel-7A",tp:"Payload",cm:"START_IMAGING seq=4401",ss:"Executed",rp:"12 strips started"},{id:"CMD-404",tm:"13:55",sa:"Meridian-3",tp:"Comms",cm:"SET_DOWNLINK_RATE 75Mbps",ss:"Executed",rp:"Rate set OK"}];
const NAV=[{id:"cmd",ic:"\u25C9",la:"Command Center",su:["overview","alerts"]},{id:"msn",ic:"\u25EB",la:"Missions",su:["gallery","planner","conflicts"]},{id:"net",ic:"\u2B21",la:"Network",su:["sites","topology","spectrum"]},{id:"sat",ic:"\u25CE",la:"Satellite Ops",su:["fleet","telemetry","commands","data"]},{id:"int",ic:"\u25C8",la:"Intelligence",su:["anomalies","simulation","analytics"]},{id:"prv",ic:"\u25A3",la:"Provisioning",su:["pipeline","lifecycle","wizard"]},{id:"gov",ic:"\u25E7",la:"Governance",su:["roles","policies","audit"]}];
const SL={overview:"Overview",alerts:"Alerts",gallery:"Mission Gallery",planner:"Pass Planner",conflicts:"Conflicts",sites:"Sites",topology:"Topology",spectrum:"Spectrum",fleet:"Fleet Overview",telemetry:"Telemetry",commands:"Command & Control",data:"Data Transfer",anomalies:"Anomaly Wall",simulation:"Scenario Builder",analytics:"Analytics Dashboard",pipeline:"Pipeline",lifecycle:"Lifecycle",wizard:"Provisioning",roles:"Roles & Access",policies:"Policy Engine",audit:"Audit Trail"};
const SD={overview:"Real-time overview of Northwood's global phased-array ground network with live satellite tracking, site health, and AI Copilot.",alerts:"Centralized alert hub with severity filtering and escalation tracking across all assets.",gallery:"Mission portfolio across commercial and government customers, with SLA tiers and satellite assignments.",planner:"Contact window scheduling with interactive Gantt timeline, beam allocation, and SLA-based filtering.",conflicts:"Conflict resolution for beam contention and scheduling overlaps.",sites:"Ground station management with per-site utilization, environment, and connectivity.",topology:"Network topology with site interconnections and regional coverage.",spectrum:"Frequency band management with licensing and coordination status.",fleet:"Fleet-wide satellite health with orbit classification and real-time link margins.",telemetry:"Real-time and historical telemetry charts across all tracked satellites.",commands:"Command log with uplink history and execution status.",data:"Data transfer sessions with throughput metrics.",anomalies:"AI-classified anomalies grouped by cause, severity, and confidence.",simulation:"What-if scenario builder for resilience testing.",analytics:"Network-wide analytics with throughput trends, capacity forecasting, and utilization.",pipeline:"Portal deployment tracking from manufacturing to operational.",lifecycle:"Station lifecycle grouping by operational phase.",wizard:"Site provisioning workflow for new ground stations.",roles:"Role-based access control matrix.",policies:"Operational policy engine for priority rules and automation.",audit:"Complete operational audit trail."};
const SECS=[{t:"Operations Core",s:["cmd-overview","cmd-alerts","msn-gallery","msn-planner","msn-conflicts"]},{t:"Network & Fleet",s:["net-sites","net-topology","net-spectrum","sat-fleet","sat-telemetry","sat-commands","sat-data"]},{t:"Intelligence & Infrastructure",s:["int-anomalies","int-simulation","int-analytics","prv-pipeline","prv-lifecycle","prv-wizard"]},{t:"Governance",s:["gov-roles","gov-policies","gov-audit"]}];
const SEC_DESC={"Operations Core":"Real-time situational awareness, mission management, and incident response.","Network & Fleet":"Ground infrastructure, satellite fleet, telemetry, and data operations.","Intelligence & Infrastructure":"AI anomaly detection, simulation, analytics, and deployment management.","Governance":"Access control, policy management, and audit."};
const BLOG=[{d:"Apr 5, 2026",t:"What Makes Ground Infrastructure Beautiful",tg:"Vision",b:"There's a beauty to infrastructure that most people never see. The elegance of a well-planned ground network, with sites positioned for optimal coverage, beams coordinated across spectrum bands, and data flowing reliably from orbit to operator.",sec:[{h:"Key Insight",items:["Infrastructure beauty comes from clarity and precision, not decoration","The best ops tools make complex systems feel inevitable","NorthStar should reveal the underlying elegance of Northwood's network"]}]},{d:"Apr 1, 2026",t:"Building NorthStar",tg:"Process",b:"I've started building NorthStar as a speculative product experience for Northwood Space. The process has been deeply rewarding: using AI tools to accelerate research and prototyping while keeping all design decisions human-led.",sec:[{h:"Process Highlights",items:["20/60/20 approach: human-led framing, AI-accelerated building, human-led polish","Every screen grounded in real operational needs from transcript analysis","AI supplements the creative process but never replaces design judgment"]}]},{d:"Mar 30, 2026",t:"Life-Centered Design in Space",tg:"Vision",b:"My approach to design has always been rooted in empathy, and I believe that extends beyond the immediate user. Space infrastructure enables climate monitoring, disaster response, and communications for underserved communities.",sec:[{h:"Why This Matters",items:["When we design better ground ops tools, we make the entire space-to-ground chain more reliable","Space infrastructure is ultimately infrastructure for life on Earth","Design has the power to connect technical systems to human impact"]}]},{d:"Mar 25, 2026",t:"Lessons from NOC Design",tg:"Research",b:"I spent time studying how traditional Network Operations Centers are designed, both physical layouts and software interfaces. The best NOCs share common patterns.",sec:[{h:"NOC Design Principles",items:["Status-at-a-glance dashboards for immediate situational awareness","Drill-down capability from overview to granular detail","Clear escalation paths with visual severity indicators","Calm by default, sharp on anomaly visual design"]}]},{d:"Mar 20, 2026",t:"The SCN Modernization Opportunity",tg:"Industry",b:"The Space Force's Space Communications Network is going through a generational modernization. Northwood's $50M contract positions them right at the center of this transformation.",sec:[{h:"Design Implications",items:["Priority overrides need thoughtful UI treatment for dual-use scenarios","Classification handling must be seamless, not burdensome","Assured access patterns require different visual hierarchy than commercial"]}]},{d:"Mar 15, 2026",t:"Spectrum as a Design Problem",tg:"Design",b:"Spectrum management might be the most under-designed area in the entire ground segment. Frequency coordination, licensing status, NTIA interactions, interference detection are all critical operational concerns.",sec:[{h:"Opportunity Areas",items:["Make spectrum a first-class citizen in the ops console","Visual spectrum allocation maps alongside satellite and site views","Regulatory status surfaced proactively, not buried in settings"]}]},{d:"Mar 10, 2026",t:"International Ground Footprints",tg:"Industry",b:"Every conversation about ground infrastructure eventually leads to the international dimension. You simply cannot operate a global satellite constellation from a single country.",sec:[{h:"Regulatory Complexity",items:["Each jurisdiction has unique spectrum and licensing requirements","Allied partnerships require trust frameworks in the product","Site-specific constraints should surface as naturally as utilization metrics"]}]},{d:"Mar 5, 2026",t:"AI in Mission-Critical Systems",tg:"Technology",b:"I've been exploring how AI could augment ground network operations. The key insight: operators should always see raw telemetry alongside AI recommendations.",sec:[{h:"Copilot Design Principles",items:["Transparency in AI reasoning builds operator trust","The Copilot suggests and explains, the human decides and executes","AI should reduce cognitive load during incidents, not add uncertainty","Every recommendation should show its reasoning chain"]}]},{d:"Feb 28, 2026",t:"The Forbes 30 Under 30 Moment",tg:"Industry",b:"Congratulations to the Northwood team on the Forbes 30 Under 30 recognition! Following their journey from Home Depot antenna prototypes to a $50M Space Force contract has been genuinely inspiring.",sec:[{h:"What Stands Out",items:["Novel in the aggregate: remixing proven approaches with domain understanding","The pandemic project that became a real company","Build faster, deploy faster, connect faster"]}]},{d:"Feb 20, 2026",t:"Resilience as a Design Principle",tg:"Design",b:"I've been thinking about resilience not just as a system property but as a design principle. What if the interface actively showed you failover pathways before you needed them?",sec:[{h:"Design Ideas",items:["Visual rerouting suggestions overlaid on the network map during degradation","Proactive design that anticipates failure modes","Simulation tools that let operators rehearse incident response","Making the invisible backup paths visible and accessible"]}]},{d:"Feb 12, 2026",t:"Studying Quindar's Blog Posts",tg:"Research",b:"Shaurya shared some incredible resources from Quindar about satellite contact scheduling and mission management. What struck me was how much complexity is hidden from operators today.",sec:[{h:"Key Takeaways",items:["Contact scheduling involves multi-variable optimization across time, geometry, and spectrum","Mission management requires balancing competing priorities with limited resources","The best ops tools make the invisible visible without overwhelming"]}]},{d:"Feb 5, 2026",t:"Why Space Needs Design Thinking",tg:"Design",b:"The more I study this industry, the more I see opportunities where thoughtful product design could change outcomes. When a satellite operator is trying to recover a link during an anomaly, every second counts.",sec:[{h:"Impact of Design",items:["30 seconds vs 5 minutes to find the right action can mean lost data or missed objectives","Design is operational infrastructure in mission-critical contexts","Information hierarchy directly impacts decision speed"]}]},{d:"Jan 28, 2026",t:"Dual-Use Design Considerations",tg:"Design",b:"Northwood's dual-use model (commercial + government/SCN) introduces fascinating design tensions. Commercial operators want efficiency. Government operators need assured access and security.",sec:[{h:"Design Tensions",items:["Role-based progressive disclosure for different operator needs","Same underlying system, different priority surfaces","Beam fairness policies need visual representation","Security classification handling without friction"]}]},{d:"Jan 18, 2026",t:"Phased Arrays and the UX Challenge",tg:"Technology",b:"Spent time learning about phased-array antennas and their multi-beam capabilities. The technology is fascinating, but what really caught my attention is the UX challenge of making beam management legible.",sec:[{h:"Technical Insights",items:["Multi-beam steering creates complex allocation problems","Traditional dashboard patterns break down at this complexity level","Beams should be treated as first-class resources with their own visual language","Real-time beam utilization needs to be as visible as site utilization"]}]},{d:"Jan 10, 2026",t:"The Ground Segment Gap",tg:"Industry",b:"I've been deep-diving into the space infrastructure landscape and one thing keeps standing out: the ground segment is dramatically under-invested relative to its importance.",sec:[{h:"Market Context",items:["Launch has had its revolution with SpaceX","Satellite manufacturing is getting commoditized","But the connective tissue between space and Earth still runs on decades-old paradigms","The design opportunity here is enormous"]}]}];

function Badge({type="neutral",children}){const m={success:[C.tlB,C.tl,C.tlD],warning:[C.amB,C.am,C.amD],critical:[C.rdB,C.rd,C.rdD],info:[C.acB,C.ac,C.acD],cyan:[C.acB,C.ac,C.acD],neutral:["rgba(255,255,255,0.03)",C.t2,C.bd]};const[bg,co,bd]=m[type]||m.neutral;return (
<span style={{display:"inline-flex",alignItems:"center",padding:"2px 7px",borderRadius:6,fontSize:11,fontWeight:500,background:bg,color:co,border:"1px solid "+bd,whiteSpace:"nowrap",fontFamily:FT}}>{children}</span>);}
function Btn({children,primary,sm,onClick,active,style:sx,id}){return (
<button id={id} style={{padding:sm?"4px 11px":"6px 14px",borderRadius:6,border:primary?"none":"1px solid "+(active?C.acD:C.bd),background:primary?C.tl:active?C.acB:"transparent",color:primary?C.bg:active?C.ac:C.t1,fontSize:sm?11:12,fontWeight:primary?600:500,cursor:"pointer",fontFamily:FT,transition:"all 0.15s",...sx}} onClick={onClick}>{children}</button>);}
function SlidingTabs({items,active,onSelect}){
  return (
    <div style={{display:"inline-flex",flexWrap:"wrap",gap:2,padding:"3px 4px",borderRadius:20,background:"rgba(30,37,46,0.5)",border:"1px solid "+C.bd,position:"relative"}}>
      {items.map(function(it){
        var isA = it===active;
        return (
          <button key={it} onClick={function(){onSelect(it);}} style={{padding:"4px 12px",borderRadius:18,fontSize:11,fontWeight:600,border:isA?"1.5px solid "+C.tl:"1.5px solid transparent",background:"transparent",color:isA?"#fff":C.t2,cursor:"pointer",fontFamily:FT,transition:"border-color .3s, color .3s",whiteSpace:"nowrap"}}>{it}</button>
        );
      })}
    </div>
  );
}
function KPI({label,value,sub}){return (
<div className="fu" style={{background:C.s1,border:"1px solid "+C.bd,borderRadius:10,padding:"14px 16px",flex:1,minWidth:0}}>
<div style={{fontSize:10,fontWeight:600,color:C.t3,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:5,fontFamily:FT}}>{label}</div>
<div style={{fontSize:22,fontWeight:600,color:"#fff",letterSpacing:"-0.02em",fontVariantNumeric:"tabular-nums",lineHeight:1,fontFamily:FT}}>{value}</div>
{sub&&<div style={{fontSize:11,color:C.t3,marginTop:4,fontFamily:FB}}>{sub}</div>}</div>);}
function Card({children,style:sx,onClick,anim}){return (
<div className={anim?"fu":""} onClick={onClick} style={{background:C.s1,border:"1px solid "+C.bd,borderRadius:10,padding:16,cursor:onClick?"pointer":"default",transition:"border-color 0.2s,transform 0.15s",...sx}} onMouseEnter={onClick?(e=>{e.currentTarget.style.borderColor=C.acD;e.currentTarget.style.transform="translateY(-1px)";}):undefined} onMouseLeave={onClick?(e=>{e.currentTarget.style.borderColor=sx?.borderColor||C.bd;e.currentTarget.style.transform="translateY(0)";}):undefined}>{children}</div>);}
function Mono({children}){return (
<span style={{fontFamily:MN,fontSize:11,color:C.t2}}>{children}</span>);}
function BarC({pct,color=C.tl}){return (
<div style={{display:"flex",alignItems:"center",gap:5}}>
<div style={{flex:1,height:3,background:"rgba(154,197,185,0.08)",borderRadius:2,overflow:"hidden"}}>
<div style={{width:pct+"%",height:"100%",background:color,borderRadius:2,transition:"width 0.6s"}}/></div>
<span style={{fontSize:11,color:C.t2,fontVariantNumeric:"tabular-nums",minWidth:28,textAlign:"right",fontFamily:FB}}>{pct}%</span></div>);}
function MC({data,color=C.tl,h=55,thr}){if(!data||!data.length) return null;const mn=Math.min(...data),mx=Math.max(...data),r=mx-mn||1;const pts=data.map((v,i)=>((i/(data.length-1))*200)+","+(h-((v-mn)/r)*(h-6)-3)).join(" ");return (
<svg viewBox={"0 0 200 "+h} style={{width:"100%",height:h}}>
<polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
{thr!=null&&<line x1="0" y1={h-((thr-mn)/r)*(h-6)-3} x2="200" y2={h-((thr-mn)/r)*(h-6)-3} stroke={C.rd} strokeWidth="0.5" strokeDasharray="2,3" opacity="0.5"/>
}</svg>);}
function TH({cols}){return (
<div style={{display:"grid",gridTemplateColumns:cols.map(c=>c.w||"1fr").join(" "),padding:"6px 12px",borderBottom:"1px solid "+C.s3,background:C.s2,gap:5}}>{cols.map((c,i)=>(<div key={i} style={{fontSize:10,fontWeight:600,color:C.t3,textTransform:"uppercase",letterSpacing:"0.07em",fontFamily:FT}}>{c.l}</div>))}</div>);}
function TR({cols,vals,onClick,active}){return (
<div onClick={onClick} style={{display:"grid",gridTemplateColumns:cols.map(c=>c.w||"1fr").join(" "),padding:"8px 12px",borderBottom:"1px solid "+C.bd,gap:5,cursor:onClick?"pointer":"default",background:active?C.acB:"transparent",transition:"background 0.12s"}} onMouseEnter={e=>{if(!active)e.currentTarget.style.background=C.s4;}} onMouseLeave={e=>{if(!active)e.currentTarget.style.background="transparent";}}>{vals.map((v,i)=>(<div key={i} style={{fontSize:12,color:C.t1,display:"flex",alignItems:"center",fontFamily:FB}}>{v}</div>))}</div>);}
function Chips({items,active,set}){return (
<div style={{display:"flex",gap:3,flexWrap:"wrap"}}>{items.map(f=>(<Btn key={f} sm active={active===f} onClick={()=>set(f)}>{f}</Btn>))}</div>);}
function DP({title,onBack,children}){return (
<div className="fi" style={{padding:"16px 20px",overflow:"auto",height:"100%"}}>
<div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}>
<button onClick={onBack} style={{background:C.acB,border:"1px solid "+C.acD,borderRadius:6,padding:"4px 12px",color:C.ac,fontSize:11,fontWeight:500,cursor:"pointer",fontFamily:FT}}>Back</button>
<h1 style={{fontSize:18,fontWeight:600,color:"#fff",fontFamily:FT}}>{title}</h1></div>
{children}</div>);}
function LiveMap({onSite,onSat}){const[tk,setTk]=useState(0);useEffect(()=>{const iv=setInterval(()=>setTk(t=>t+1),80);return()=>clearInterval(iv);},[]);const sP=SITES.filter(s=>s.la).map(s=>({...s,x:((s.lo+180)/360)*780+10,y:((90-s.la)/180)*380+10}));const saP=SATS.map((s,i)=>{const sp=s.ob==="LEO"?0.8:s.ob==="MEO"?0.3:0.05;return{...s,x:(i*110+tk*sp)%800,y:180+Math.sin(((i*110+tk*sp)%800/800)*Math.PI*2+i)*40+(s.ob==="GEO"?-60:s.ob==="MEO"?-20:30)};});return (
<div style={{position:"relative",background:"linear-gradient(180deg,"+C.bg+","+C.s1+")",borderRadius:8,border:"1px solid "+C.bd,overflow:"hidden"}}>
<svg viewBox="0 0 800 400" style={{width:"100%",display:"block"}}>
<defs>
<radialGradient id="gl">
<stop offset="0%" stopColor={C.tl} stopOpacity="0.03"/>
<stop offset="100%" stopColor="transparent"/></radialGradient></defs>
<rect fill="url(#gl)" width="800" height="400"/>
{[0,1,2,3,4].map(i=>(<line key={i} x1="0" y1={80*i+80} x2="800" y2={80*i+80} stroke="rgba(154,197,185,0.04)" strokeWidth="0.3"/>))}
<path d="M18,56 L24,58 L33,64 L44,69 L56,73 L67,71 L78,71 L89,76 L100,80 L109,82 L116,84 L122,87 L127,89 L129,93 L129,98 L127,104 L127,111 L129,116 L133,120 L138,124 L144,131 L149,138 L153,144 L156,149 L162,156 L169,160 L178,164 L189,167 L200,162 L207,156 L211,151 L216,149 L222,144 L224,140 L227,133 L229,127 L231,120 L233,113 L236,109 L240,104 L247,100 L256,98 L264,98 L271,96 L273,91 L271,84 L267,78 L260,71 L253,64 L249,58 L247,53 L244,49 L236,44 L224,42 L211,40 L198,38 L184,38 L171,40 L158,42 L144,44 L131,44 L118,47 L102,49 L87,51 L71,53 L56,56 L40,58 Z" fill={C.s2} stroke={C.tl2} strokeWidth="0.5" opacity="0.35"/>
<path d="M164,176 L169,178 L176,180 L184,180 L193,178 L200,176 L207,176 L216,178 L224,180 L233,182 L244,184 L256,187 L267,189 L278,191 L289,193 L298,198 L307,204 L313,211 L318,218 L320,224 L318,231 L316,238 L311,244 L307,251 L300,258 L293,264 L284,271 L276,278 L269,284 L262,293 L256,302 L251,311 L249,318 L247,324 L244,320 L242,313 L240,304 L240,296 L242,287 L244,278 L244,271 L242,264 L240,256 L236,247 L233,240 L229,231 L227,222 L224,213 L222,204 L222,196 L220,189 L218,182 L211,176 L204,173 L198,171 L191,169 L184,169 L176,171 L169,173 Z" fill={C.s2} stroke={C.tl2} strokeWidth="0.5" opacity="0.35"/>
<path d="M376,118 L382,120 L389,122 L396,120 L400,116 L404,111 L407,104 L404,98 L400,93 L396,87 L393,80 L391,73 L393,67 L398,62 L404,58 L411,56 L420,56 L427,58 L433,60 L440,62 L447,64 L453,62 L458,58 L462,56 L467,58 L471,62 L473,69 L476,76 L478,84 L480,93 L480,102 L480,111 L478,116 L473,118 L467,118 L460,116 L453,113 L447,111 L440,109 L433,109 L427,109 L420,111 L413,113 L407,116 L400,118 L393,120 L387,122 Z" fill={C.s2} stroke={C.tl2} strokeWidth="0.5" opacity="0.35"/>
<path d="M384,124 L389,122 L396,120 L404,120 L411,118 L418,118 L422,120 L418,124 L413,129 L409,133 L404,138 L398,144 L393,149 L387,153 L380,158 L373,162 L367,167 L362,169 L364,173 L369,178 L376,182 L384,187 L393,189 L400,191 L407,193 L413,196 L418,200 L422,207 L424,213 L427,220 L429,229 L431,238 L433,247 L436,256 L440,262 L444,269 L449,273 L456,276 L462,276 L467,271 L471,264 L476,256 L478,247 L480,238 L480,229 L482,220 L487,211 L491,204 L496,196 L502,189 L509,182 L513,178 L511,173 L507,169 L502,167 L496,164 L489,162 L484,158 L480,151 L476,144 L473,138 L471,133 L467,129 L462,127 L456,127 L449,127 L442,124 L436,124 L429,122 L422,122 L413,120 L404,120 L396,120 Z" fill={C.s2} stroke={C.tl2} strokeWidth="0.5" opacity="0.35"/>
<path d="M480,111 L484,107 L489,102 L496,98 L504,96 L511,98 L518,102 L524,107 L531,107 L538,102 L547,98 L556,96 L564,93 L573,91 L580,93 L587,98 L593,104 L598,111 L602,118 L609,122 L616,127 L622,131 L627,138 L631,144 L636,151 L640,158 L642,162 L644,167 L647,173 L653,176 L658,173 L662,169 L664,162 L667,156 L669,149 L671,142 L673,136 L676,131 L680,124 L684,120 L689,118 L696,116 L702,118 L707,120 L711,118 L716,113 L720,107 L722,100 L724,93 L727,87 L731,82 L738,76 L744,73 L751,71 L758,69 L764,67 L771,62 L778,58 L784,53 L791,49 L796,47 L796,42 L789,40 L780,38 L769,37 L756,36 L742,36 L727,37 L711,38 L696,40 L680,42 L664,44 L649,47 L636,49 L622,51 L609,53 L596,56 L582,58 L569,60 L556,62 L542,64 L531,67 L520,69 L511,71 L502,73 L496,76 L491,80 L487,87 L484,93 L482,100 L480,107 Z" fill={C.s2} stroke={C.tl2} strokeWidth="0.5" opacity="0.35"/>
<path d="M656,267 L658,260 L662,253 L667,247 L671,242 L676,236 L682,231 L689,227 L696,227 L704,229 L711,231 L718,233 L724,236 L729,240 L733,247 L736,253 L738,260 L740,267 L740,273 L738,278 L733,282 L727,284 L720,284 L713,282 L707,280 L700,278 L693,276 L684,276 L676,276 L669,273 L664,271 Z" fill={C.s2} stroke={C.tl2} strokeWidth="0.5" opacity="0.35"/>
{[140,190,240].map((y,i)=>(<path key={i} d={"M0,"+y+" Q200,"+(y-50+i*20)+" 400,"+y+" Q600,"+(y+50-i*20)+" 800,"+y} fill="none" stroke={C.tl} strokeWidth="0.5" opacity="0.1" strokeDasharray="5,4"/>))}{sP.map((s,i)=>{const col=s.st==="Online"?C.tl:s.st==="Degraded"?C.am:s.st==="Commissioning"?C.vi:C.t3;return (
<g key={i} style={{cursor:"pointer"}} onClick={()=>onSite&&onSite(i)}>
<circle cx={s.x} cy={s.y} r={5} fill={col} opacity={0.85}/>
<circle cx={s.x} cy={s.y} r={9} fill="none" stroke={col} strokeWidth="0.4" opacity={0.2+Math.sin(tk/20+i)*0.15}/>
{s.st==="Degraded"&&<circle cx={s.x} cy={s.y} r={14} fill="none" stroke={C.am} strokeWidth="0.3" opacity={0.15+Math.sin(tk/8)*0.12}/>
}<text x={s.x} y={s.y-13} textAnchor="middle" fill={C.t2} fontSize="10" fontFamily={FT} fontWeight="500">{s.nm}</text></g>);})}{saP.map((s,i)=>{const col=s.st==="Critical"?C.rd:s.st==="Degraded"?C.am:C.tl;return (
<g key={i} style={{cursor:"pointer"}} onClick={()=>onSat&&onSat(i)}>
<circle cx={s.x} cy={s.y} r={2.5} fill={col} opacity={0.9}/>
{sP[i%sP.length]&&<line x1={s.x} y1={s.y} x2={sP[i%sP.length].x} y2={sP[i%sP.length].y} stroke={col} strokeWidth="0.2" opacity={0.1+Math.sin(tk/15+i)*0.07} strokeDasharray="2,4"/>
}<text x={s.x} y={s.y-7} textAnchor="middle" fill={C.t3} fontSize="10" fontFamily={MN}>{s.nm.split("-")[0]}</text></g>);})}</svg>
<div style={{position:"absolute",bottom:6,left:10,display:"flex",gap:12,fontSize:10,color:C.t3,fontFamily:FB}}>{[["Online",C.tl],["Degraded",C.am],["Satellite",C.tl],["Critical",C.rd]].map(([l,c])=>(<span key={l} style={{display:"flex",alignItems:"center",gap:3}}>
<span style={{width:5,height:5,borderRadius:"50%",background:c,display:"inline-block"}}/>
{l}</span>))}</div>
<div className="pu" style={{position:"absolute",top:6,right:10,fontSize:10,color:C.tl,fontFamily:MN,fontWeight:500}}>LIVE</div></div>);}
function CopilotPanel({goD}){return (
<div style={{width:300,borderLeft:"1px solid "+C.bd,background:C.s1,padding:"16px 14px",overflow:"auto",flexShrink:0}}>
<div style={{display:"flex",alignItems:"center",gap:6,marginBottom:14}}>
<div className="gl" style={{width:7,height:7,borderRadius:"50%",background:C.tl}}/>
<span style={{fontSize:13,fontWeight:600,color:"#fff",fontFamily:FT}}>NorthStar Copilot</span></div>
{COPILOT.map((s,i)=>(<Card key={i} anim style={{marginBottom:8,borderColor:s.sv==="Critical"?C.rdD:C.acD,padding:12}}>
<div style={{display:"flex",alignItems:"center",gap:4,marginBottom:5}}>
<Badge type={s.sv==="Critical"?"critical":s.sv==="Warning"?"warning":"info"}>{s.sv}</Badge>
<span style={{fontSize:12,fontWeight:600,color:"#fff",fontFamily:FT}}>{s.ti}</span></div>
<p style={{fontSize:11,color:C.t1,lineHeight:1.5,marginBottom:6,fontFamily:FB}}>{s.de}</p>
<details>
<summary style={{fontSize:10,color:C.tl,cursor:"pointer",fontWeight:500,fontFamily:FT}}>Why this recommendation</summary>
<p style={{fontSize:11,color:C.t2,lineHeight:1.4,marginTop:3,paddingLeft:6,borderLeft:"2px solid "+C.tlD,fontFamily:FB}}>{s.wh}</p></details>
<div style={{display:"flex",gap:3,marginTop:6}}>
<Btn sm primary onClick={()=>goD("apply",{title:"Apply: "+s.ti,cop:s})}>Apply</Btn>
<Btn sm onClick={()=>goD("sim",{title:"Simulate: "+s.ti,cop:s})}>Simulate</Btn></div></Card>))}</div>);}

// Layout 1: Timeline + KPI + Action (Apply)
function ApplyD({data,onBack}){
  return (
    <DP title={"Applied: "+(data.cop?data.cop.ti:data.title)} onBack={onBack}>
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:16,marginBottom:16}}>
        <Card anim style={{borderColor:C.tlD}}>
          <div style={{display:"flex",gap:6,marginBottom:10}}>
            <Badge type="success">Executed</Badge>
            <span style={{fontSize:14,fontWeight:600,color:"#fff",fontFamily:FT}}>Action applied successfully</span>
          </div>
          <p style={{fontSize:12,color:C.t1,lineHeight:1.6,fontFamily:FB,marginBottom:12}}>{data.cop?data.cop.de:"Recommended action executed. Systems being monitored."}</p>
          <div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:8,fontFamily:FT}}>Execution Timeline</div>
          {[["14:22:08","Action initiated"],["14:22:09","Copilot validated"],["14:22:10","Commands queued"],["14:22:15","Confirmed"],["14:22:18","Monitoring active"]].map(function(x,i){
            return (
              <div key={i} className="si" style={{display:"flex",gap:10,padding:"6px 0",borderBottom:"1px solid "+C.bd,animationDelay:i*0.08+"s"}}>
                <Mono>{x[0]}</Mono>
                <div style={{width:6,height:6,borderRadius:"50%",background:C.tl,marginTop:5,flexShrink:0}}/>
                <span style={{fontSize:12,color:C.t1,fontFamily:FB}}>{x[1]}</span>
              </div>
            );
          })}
        </Card>
        <div>
          <KPI label="Status" value="Applied" sub="Executed"/>
          <div style={{height:10}}/>
          <KPI label="Confidence" value="94%" sub="AI score"/>
          <div style={{height:10}}/>
          <KPI label="Impact" value="Nominal"/>
          <Card anim style={{marginTop:10,borderColor:C.tlD,padding:12}}>
            <div style={{fontSize:11,color:C.tl,fontWeight:600,marginBottom:4,fontFamily:FT}}>Next Steps</div>
            <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>Monitor affected assets for 30 minutes. Verify SLA compliance on next pass window.</p>
          </Card>
        </div>
      </div>
    </DP>
  );
}

// Layout 2: Progress bar + Split panels (Simulation)
function SimD({data,onBack}){
  var ps = useState(0); var prog = ps[0]; var setProg = ps[1];
  useEffect(function(){var iv=setInterval(function(){setProg(function(p){return Math.min(p+2,100);});},100);return function(){clearInterval(iv);};},[]);
  return (
    <DP title={"Simulation: "+(data.cop?data.cop.ti:data.title)} onBack={onBack}>
      <Card anim style={{marginBottom:16,borderColor:prog>=100?C.tlD:C.acD}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
          <div style={{display:"flex",gap:6}}>
            <Badge type={prog<100?"info":"success"}>{prog<100?"Running":"Complete"}</Badge>
            <span style={{fontSize:14,fontWeight:600,color:"#fff",fontFamily:FT}}>Deterministic Simulation</span>
          </div>
          <span style={{fontSize:18,fontWeight:700,color:prog>=100?C.tl:C.ac,fontFamily:FT}}>{prog}%</span>
        </div>
        <BarC pct={prog} color={prog>=100?C.tl:C.ac}/>
      </Card>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:16}}>
        <KPI label="Passes" value={Math.floor(prog/10)+"/10"}/>
        <KPI label="Conflicts" value={prog>60?"0":"..."}/>
        <KPI label="SLA" value={prog>80?"100%":"..."}/>
      </div>
      {prog>=100 && (
        <div>
          <Card anim style={{marginBottom:12}}>
            <div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:8,fontFamily:FT}}>Simulation Results</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {[["Throughput","4.8 Gbps maintained"],["Latency","No increase detected"],["Coverage","100% mission coverage"],["Failover","Seamless rerouting confirmed"]].map(function(r,i){
                return (
                  <div key={i} style={{padding:10,background:C.s2,borderRadius:6,border:"1px solid "+C.bd}}>
                    <div style={{fontSize:11,fontWeight:600,color:C.tl,fontFamily:FT}}>{r[0]}</div>
                    <div style={{fontSize:11,color:C.t1,marginTop:2,fontFamily:FB}}>{r[1]}</div>
                  </div>
                );
              })}
            </div>
          </Card>
          <div style={{display:"flex",gap:6}}>
            <Btn primary>Accept</Btn>
            <Btn>Modify</Btn>
            <Btn>Export</Btn>
          </div>
        </div>
      )}
    </DP>
  );
}

// Layout 3: Form layout with sections (Edit)
function EditD({data,onBack}){
  var fields = data.fields||[["Name",data.title],["Status","Active"],["Priority","P1"],["Notes",""]];
  return (
    <DP title={"Edit: "+data.title} onBack={onBack}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
        <Card anim>
          <div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:12,fontFamily:FT}}>Properties</div>
          {fields.slice(0,Math.ceil(fields.length/2)).map(function(f,i){
            return (
              <div key={i} style={{marginBottom:14}}>
                <div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:3,fontFamily:FT}}>{f[0]}</div>
                <div style={{padding:"8px 12px",borderRadius:6,border:"1px solid "+C.bd,background:C.s2,fontSize:12,color:f[1]?"#fff":C.t3,fontFamily:FB}}>{f[1]||"Enter value..."}</div>
              </div>
            );
          })}
        </Card>
        <Card anim>
          <div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:12,fontFamily:FT}}>Configuration</div>
          {fields.slice(Math.ceil(fields.length/2)).map(function(f,i){
            return (
              <div key={i} style={{marginBottom:14}}>
                <div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:3,fontFamily:FT}}>{f[0]}</div>
                <div style={{padding:"8px 12px",borderRadius:6,border:"1px solid "+C.bd,background:C.s2,fontSize:12,color:f[1]?"#fff":C.t3,fontFamily:FB}}>{f[1]||"Enter value..."}</div>
              </div>
            );
          })}
          <div style={{display:"flex",gap:6,marginTop:16}}>
            <Btn primary>Save Changes</Btn>
            <Btn onClick={onBack}>Cancel</Btn>
          </div>
        </Card>
      </div>
    </DP>
  );
}

// Layout 4: Investigation with cross-layer timeline + root cause (Investigate)
function InvD({data,onBack}){
  return (
    <DP title={"Investigate: "+data.title} onBack={onBack}>
      <div style={{display:"flex",gap:10,marginBottom:16}}>
        <KPI label="Anomaly" value={data.anom?data.anom.id:"AN-301"}/>
        <KPI label="AI Confidence" value={(data.anom?data.anom.cf:87)+"%"}/>
        <KPI label="Duration" value="2h 41m"/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:16}}>
        <Card anim>
          <div style={{fontSize:14,fontWeight:600,color:"#fff",marginBottom:10,fontFamily:FT}}>Cross-Layer Timeline</div>
          {[["13:41","RF anomaly detected at Darwin",C.rd,"System"],["13:42","AI classifier: RF type, 87% confidence",C.tl,"AI"],["13:45","Link margin dropped below 5 dB",C.am,"Telemetry"],["13:48","Copilot generated reroute recommendation",C.tl,"Copilot"],["14:05","Correlated: Array 3 temp drift",C.rd,"Hardware"]].map(function(x,i){
            return (
              <div key={i} className="si" style={{display:"flex",gap:10,padding:"8px 0",borderBottom:"1px solid "+C.bd,animationDelay:i*0.06+"s"}}>
                <Mono>{x[0]}</Mono>
                <div style={{width:6,height:6,borderRadius:"50%",background:x[2],marginTop:5,flexShrink:0}}/>
                <div style={{flex:1}}>
                  <div style={{fontSize:12,color:C.t1,fontFamily:FB}}>{x[1]}</div>
                  <div style={{fontSize:10,color:C.t3,marginTop:1,fontFamily:FB}}>{x[3]}</div>
                </div>
              </div>
            );
          })}
        </Card>
        <div>
          <Card anim style={{borderColor:C.tlD,padding:14,marginBottom:12}}>
            <div style={{fontSize:12,color:C.tl,fontWeight:600,marginBottom:6,fontFamily:FT}}>AI Root Cause Analysis</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,fontFamily:FB}}>Primary cause: ionospheric scintillation affecting S-band signals at Darwin. Temperature drift on Array 3 is a secondary correlated effect.</p>
          </Card>
          <Card anim style={{padding:14}}>
            <div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:6,fontFamily:FT}}>Recommended Actions</div>
            {["Reroute to Paumalu","Schedule Array 3 assessment","Monitor scintillation forecast"].map(function(a,i){
              return (
                <div key={i} style={{display:"flex",gap:6,padding:"4px 0",fontSize:12,color:C.t1,fontFamily:FB}}>
                  <span style={{color:C.tl}}>+</span>{a}
                </div>
              );
            })}
          </Card>
        </div>
      </div>
    </DP>
  );
}

// Layout 5: Graph visualization (Correlate)
function CorD({data,onBack}){
  return (
    <DP title={"Correlate: "+data.title} onBack={onBack}>
      <Card anim style={{marginBottom:16}}>
        <div style={{fontSize:14,fontWeight:600,color:"#fff",marginBottom:10,fontFamily:FT}}>Correlation Graph</div>
        <svg viewBox="0 0 500 150" style={{width:"100%",height:150}}>
          <circle cx="80" cy="75" r="28" fill={C.rdB} stroke={C.rd} strokeWidth="1.5"/>
          <text x="80" y="72" textAnchor="middle" fill={C.rd} fontSize="11" fontFamily={FT}>AN-301</text>
          <text x="80" y="86" textAnchor="middle" fill={C.t3} fontSize="10" fontFamily={FB}>RF</text>
          <circle cx="250" cy="40" r="24" fill={C.amB} stroke={C.am} strokeWidth="1.5"/>
          <text x="250" y="37" textAnchor="middle" fill={C.am} fontSize="11" fontFamily={FT}>AN-303</text>
          <text x="250" y="51" textAnchor="middle" fill={C.t3} fontSize="10" fontFamily={FB}>Thermal</text>
          <circle cx="250" cy="115" r="20" fill={C.acB} stroke={C.ac} strokeWidth="1"/>
          <text x="250" y="118" textAnchor="middle" fill={C.ac} fontSize="11" fontFamily={FT}>AN-304</text>
          <circle cx="420" cy="75" r="30" fill={C.tlB} stroke={C.tl} strokeWidth="1.5"/>
          <text x="420" y="72" textAnchor="middle" fill={C.tl} fontSize="11" fontFamily={FT}>Root</text>
          <text x="420" y="86" textAnchor="middle" fill={C.tl} fontSize="10" fontFamily={FB}>Cause</text>
          <line x1="108" y1="68" x2="226" y2="45" stroke={C.rd} strokeWidth="1" strokeDasharray="4,3"/>
          <line x1="108" y1="82" x2="230" y2="110" stroke={C.am} strokeWidth="0.8" strokeDasharray="4,3"/>
          <line x1="274" y1="40" x2="390" y2="70" stroke={C.am} strokeWidth="1"/>
          <line x1="270" y1="112" x2="390" y2="80" stroke={C.ac} strokeWidth="0.8" strokeDasharray="4,3"/>
        </svg>
      </Card>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
        {[{id:"AN-301",ev:"Ionospheric scintillation",si:"Darwin",cf:"87%",sv:"critical"},{id:"AN-303",ev:"Feed temp drift Array 3",si:"Darwin",cf:"91%",sv:"warning"},{id:"AN-304",ev:"Doppler compensation lag",si:"Paumalu",cf:"42%",sv:"neutral"}].map(function(e){
          return (
            <Card key={e.id} anim style={{padding:12}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                <Mono>{e.id}</Mono>
                <Badge type={e.sv}>{e.cf}</Badge>
              </div>
              <div style={{fontSize:13,fontWeight:500,color:"#fff",fontFamily:FT}}>{e.ev}</div>
              <div style={{fontSize:11,color:C.t2,marginTop:2,fontFamily:FB}}>Site: {e.si}</div>
            </Card>
          );
        })}
      </div>
    </DP>
  );
}

// Layout 6: Generic detail with flexible content (fields, charts, body)
function GenD({data,onBack}){
  return (
    <DP title={data.title} onBack={onBack}>
      {data.fields && (
        <div style={{display:"grid",gridTemplateColumns:data.fields.length>4?"1fr 1fr":"1fr",gap:16,marginBottom:16}}>
          <Card anim>
            <div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:10,fontFamily:FT}}>Details</div>
            {data.fields.slice(0,Math.ceil(data.fields.length/2)).map(function(f,i){
              return (
                <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:"1px solid "+C.bd,fontSize:12}}>
                  <span style={{color:C.t2,fontFamily:FT}}>{f[0]}</span>
                  <span style={{color:"#fff",fontWeight:500,fontFamily:FB}}>{f[1]}</span>
                </div>
              );
            })}
          </Card>
          {data.fields.length>4 && (
            <Card anim>
              <div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:10,fontFamily:FT}}>Additional Info</div>
              {data.fields.slice(Math.ceil(data.fields.length/2)).map(function(f,i){
                return (
                  <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:"1px solid "+C.bd,fontSize:12}}>
                    <span style={{color:C.t2,fontFamily:FT}}>{f[0]}</span>
                    <span style={{color:"#fff",fontWeight:500,fontFamily:FB}}>{f[1]}</span>
                  </div>
                );
              })}
            </Card>
          )}
        </div>
      )}
      {data.body && (
        <Card anim style={{marginBottom:16}}>
          <p style={{fontSize:12,color:C.t1,lineHeight:1.6,fontFamily:FB,margin:0}}>{data.body}</p>
        </Card>
      )}
      {data.charts && (
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {data.charts.map(function(ch,i){
            return (
              <Card key={i} anim style={{padding:12}}>
                <div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:6,fontFamily:FT}}>{ch[0]}</div>
                <MC data={ch[1]} color={ch[2]} h={65}/>
              </Card>
            );
          })}
        </div>
      )}
    </DP>
  );
}

// Layout 7: Mission creation wizard (New Mission)
function NewMsnD({onBack}){
  return (
    <DP title="Create New Mission" onBack={onBack}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
        <Card anim>
          <div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:12,fontFamily:FT}}>Mission Identity</div>
          {[["Mission Name",""],["Customer",""],["SLA Tier",""],["Priority",""]].map(function(f,i){
            return (
              <div key={i} style={{marginBottom:14}}>
                <div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:3,fontFamily:FT}}>{f[0]}</div>
                <div style={{padding:"8px 12px",borderRadius:6,border:"1px solid "+C.bd,background:C.s2,fontSize:12,color:C.t3,fontFamily:FB}}>Enter {f[0].toLowerCase()}...</div>
              </div>
            );
          })}
        </Card>
        <Card anim>
          <div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:12,fontFamily:FT}}>Technical Configuration</div>
          {[["Satellite Assignment",""],["Primary Sites",""],["Data Volume Target",""],["Spectrum Bands",""],["Description",""]].map(function(f,i){
            return (
              <div key={i} style={{marginBottom:14}}>
                <div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:3,fontFamily:FT}}>{f[0]}</div>
                <div style={{padding:"8px 12px",borderRadius:6,border:"1px solid "+C.bd,background:C.s2,fontSize:12,color:C.t3,fontFamily:FB}}>Enter {f[0].toLowerCase()}...</div>
              </div>
            );
          })}
        </Card>
      </div>
      <div style={{display:"flex",gap:6,marginTop:16}}>
        <Btn primary style={{flex:1}}>Create Mission</Btn>
        <Btn onClick={onBack}>Cancel</Btn>
      </div>
    </DP>
  );
}

// Layout 8: Command entry with safety panel (New Command)
function NewCmdD({onBack}){
  return (
    <DP title="New Command" onBack={onBack}>
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:16}}>
        <Card anim>
          <div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:12,fontFamily:FT}}>Command Configuration</div>
          {[["Target Satellite",""],["Command Type",""],["Command String",""],["Parameters",""],["Execution Window",""],["Priority","Normal"]].map(function(f,i){
            return (
              <div key={i} style={{marginBottom:12}}>
                <div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:3,fontFamily:FT}}>{f[0]}</div>
                <div style={{padding:"8px 12px",borderRadius:6,border:"1px solid "+C.bd,background:C.s2,fontSize:12,color:f[1]?C.t1:C.t3,fontFamily:FB}}>{f[1]||"Select..."}</div>
              </div>
            );
          })}
          <div style={{display:"flex",gap:6,marginTop:16}}>
            <Btn primary style={{flex:1}}>Queue Command</Btn>
            <Btn onClick={onBack}>Cancel</Btn>
          </div>
        </Card>
        <div>
          <Card anim style={{borderColor:C.amD,padding:14,marginBottom:12}}>
            <div style={{fontSize:12,color:C.am,fontWeight:600,marginBottom:6,fontFamily:FT}}>Safety Check</div>
            <p style={{fontSize:11,color:C.t2,lineHeight:1.5,fontFamily:FB}}>Commands validated against spacecraft state. Critical commands require dual-operator confirmation.</p>
          </Card>
          <Card anim style={{padding:14}}>
            <div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:6,fontFamily:FT}}>Recent Commands</div>
            {CMDS.slice(0,3).map(function(c,i){
              return (
                <div key={i} style={{padding:"6px 0",borderBottom:"1px solid "+C.bd,fontSize:11}}>
                  <div style={{color:C.t1,fontFamily:FT}}>{c.cm}</div>
                  <div style={{color:C.t3,marginTop:1,fontFamily:FB}}>{c.sa} - {c.ss}</div>
                </div>
              );
            })}
          </Card>
        </div>
      </div>
    </DP>
  );
}

// Layout 9: Simulation runner with live metrics (RunSim)
function RunSimD({data,onBack}){
  var ps = useState(0); var prog = ps[0]; var setProg = ps[1];
  var ds = useState(false); var done = ds[0]; var setDone = ds[1];
  useEffect(function(){var iv=setInterval(function(){setProg(function(p){if(p>=100){setDone(true);return 100;}return p+3;});},120);return function(){clearInterval(iv);};},[]);
  return (
    <DP title={"Running: "+data.title} onBack={onBack}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:10,marginBottom:16}}>
        <KPI label="Progress" value={prog+"%"}/>
        <KPI label="Scenarios" value={done?"4/4":Math.floor(prog/25)+"/4"}/>
        <KPI label="Passes" value={done?"24":"..."}/>
        <KPI label="Conflicts" value={done?"0":"..."}/>
      </div>
      <Card anim style={{marginBottom:16,borderColor:done?C.tlD:C.acD}}>
        <div style={{display:"flex",gap:6,marginBottom:8}}>
          <Badge type={done?"success":"info"}>{done?"Complete":"Simulating"}</Badge>
          <span style={{fontSize:14,fontWeight:600,color:"#fff",fontFamily:FT}}>{data.title}</span>
        </div>
        <BarC pct={prog} color={done?C.tl:C.ac}/>
        {done && (
          <div style={{marginTop:12}}>
            <p style={{fontSize:12,color:C.tl,fontWeight:500,fontFamily:FB,marginBottom:10}}>All SLA targets met across all scenarios.</p>
            <div style={{display:"flex",gap:6}}>
              <Btn primary>Apply to Prod</Btn>
              <Btn>Modify</Btn>
              <Btn>Export</Btn>
            </div>
          </div>
        )}
      </Card>
    </DP>
  );
}

// Layout 10: Configuration with grouped settings (Configure)
function ConfigD({data,onBack}){
  return (
    <DP title={"Configure: "+data.title} onBack={onBack}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
        <Card anim>
          <div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:12,fontFamily:FT}}>Scenario Parameters</div>
          {[["Failure Type","Site Offline"],["Duration","4 hours"],["Affected Assets","Darwin (NW-04)"]].map(function(f,i){
            return (
              <div key={i} style={{marginBottom:12}}>
                <div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:3,fontFamily:FT}}>{f[0]}</div>
                <div style={{padding:"8px 12px",borderRadius:6,border:"1px solid "+C.bd,background:C.s2,fontSize:12,color:"#fff",fontFamily:FB}}>{f[1]}</div>
              </div>
            );
          })}
        </Card>
        <Card anim>
          <div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:12,fontFamily:FT}}>Recovery Settings</div>
          {[["Reroute Targets","Paumalu, Vandenberg"],["Success Criteria","100% SLA compliance"],["Monitor Period","24 hours"]].map(function(f,i){
            return (
              <div key={i} style={{marginBottom:12}}>
                <div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:3,fontFamily:FT}}>{f[0]}</div>
                <div style={{padding:"8px 12px",borderRadius:6,border:"1px solid "+C.bd,background:C.s2,fontSize:12,color:"#fff",fontFamily:FB}}>{f[1]}</div>
              </div>
            );
          })}
        </Card>
      </div>
      <div style={{display:"flex",gap:6,marginTop:16}}>
        <Btn primary>Save</Btn>
        <Btn onClick={onBack}>Cancel</Btn>
      </div>
    </DP>
  );
}

var DM={apply:ApplyD,sim:SimD,edit:EditD,investigate:InvD,correlate:CorD,generic:GenD,newmission:NewMsnD,newcommand:NewCmdD,runsim:RunSimD,configure:ConfigD};

function CmdOv({nav,goD}){return (
<div style={{display:"flex",height:"100%"}}>
<div style={{flex:1,padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
<div>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Command Center</h1>
<p style={{fontSize:12,color:C.t2,marginTop:1,fontFamily:FB}}>Global ground network operations</p></div>
<div style={{display:"flex",gap:4}}>
<Badge type="success">PROD</Badge>
<Btn sm onClick={()=>nav("cmd","alerts")}>Alerts ({ALERTS.filter(a=>!a.ak).length})</Btn></div></div>
<div style={{display:"flex",gap:8,marginBottom:16}}>
<KPI label="Satellites" value={SATS.filter(s=>s.st!=="Critical").length+"/"+SATS.length} sub="tracked"/>
<KPI label="Sites" value={SITES.filter(s=>s.st==="Online").length+"/"+SITES.filter(s=>s.st!=="Planned").length} sub="1 degraded"/>
<KPI label="Links" value="23" sub="11.4 dB avg"/>
<KPI label="Incidents" value={""+INCS.length} sub={INCS.filter(i=>i.sv==="Critical").length+" critical"}/>
<KPI label="Throughput" value="4.8 Gbps" sub="Peak 6.2"/></div>
<Card style={{marginBottom:16,padding:0,overflow:"hidden"}}>
<div style={{padding:"10px 14px",borderBottom:"1px solid "+C.bd,display:"flex",justifyContent:"space-between"}}>
<span style={{fontSize:14,fontWeight:600,color:"#fff",fontFamily:FT}}>Global Situation</span>
<div style={{display:"flex",gap:3}}>
<Badge type="cyan">{SATS.length} sats</Badge>
<Badge type="success">{SITES.filter(s=>s.st==="Online").length} sites</Badge></div></div>
<LiveMap onSite={i=>goD("generic",{title:"Site: "+SITES[i].nm,fields:[["ID",SITES[i].id],["Region",SITES[i].rg],["Status",SITES[i].st],["Utilization",SITES[i].ut+"%"],["Arrays",""+SITES[i].ar],["Beams",SITES[i].bm+"/"+SITES[i].mx],["Environment",SITES[i].ev],["Backhaul",SITES[i].bh]]})} onSat={i=>goD("generic",{title:"Satellite: "+SATS[i].nm,fields:[["ID",SATS[i].id],["Orbit",SATS[i].ob+" "+SATS[i].al],["Status",SATS[i].st],["Link Margin",SATS[i].mg+" dB"],["Health",SATS[i].hp+"%"],["Mission",SATS[i].ms]],charts:[["Link Margin",SATS[i].tl,C.tl]]})}/></Card>
<Card style={{padding:0,overflow:"hidden"}}>
<div style={{padding:"10px 14px",borderBottom:"1px solid "+C.bd,display:"flex",justifyContent:"space-between"}}>
<span style={{fontSize:14,fontWeight:600,color:"#fff",fontFamily:FT}}>Active Incidents</span>
<Btn sm onClick={()=>nav("cmd","alerts")}>All</Btn></div>
<TH cols={[{l:"Sev",w:"70px"},{l:"ID",w:"80px"},{l:"Mission"},{l:"Site"},{l:"Symptom",w:"1.4fr"},{l:"Age",w:"55px"}]}/>
{INCS.map(i=>(<TR key={i.id} cols={[{w:"70px"},{w:"80px"},{},{},{w:"1.4fr"},{w:"55px"}]} onClick={()=>goD("generic",{title:"Incident "+i.id,fields:[["Severity",i.sv],["Mission",i.mn],["Site",i.si],["Beam",i.bm],["Satellite",i.sa],["Assigned",i.as],["Age",i.ag],["Symptom",i.sy]]})} vals={[<Badge type={i.sv==="Critical"?"critical":i.sv==="Warning"?"warning":"info"}>{i.sv}</Badge>,<Mono>{i.id}</Mono>,<span>{i.mn}</span>,<span>{i.si}</span>,<span style={{color:C.t2}}>{i.sy}</span>,<span style={{color:C.t3}}>{i.ag}</span>]}/>))}</Card></div>
<CopilotPanel goD={goD}/></div>);}
function CmdAl({nav,goD}){const[f,sF]=useState("All");const fl=f==="All"?ALERTS:ALERTS.filter(a=>a.sv===f);return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Alerts</h1>
<Btn sm onClick={()=>nav("cmd","overview")}>Overview</Btn></div>
<div style={{display:"flex",gap:8,marginBottom:14}}>
<KPI label="Unack" value={""+ALERTS.filter(a=>!a.ak).length}/>
<KPI label="Critical" value={""+ALERTS.filter(a=>a.sv==="Critical").length}/>
<KPI label="Total" value={""+ALERTS.length}/></div>
<div style={{marginBottom:12}}>
<Chips items={["All","Critical","Warning","Info"]} active={f} set={sF}/></div>
<Card style={{padding:0,overflow:"hidden"}}>
<TH cols={[{l:"Time",w:"90px"},{l:"Sev",w:"70px"},{l:"Source",w:"120px"},{l:"Description",w:"1.5fr"},{l:"Ack",w:"60px"}]}/>
{fl.map(a=>(<TR key={a.id} cols={[{w:"90px"},{w:"70px"},{w:"120px"},{w:"1.5fr"},{w:"60px"}]} onClick={()=>goD("generic",{title:"Alert "+a.id,fields:[["Time",a.tm],["Severity",a.sv],["Source",a.sr],["Description",a.de]]})} vals={[<Mono>{a.tm}</Mono>,<Badge type={a.sv==="Critical"?"critical":a.sv==="Warning"?"warning":"info"}>{a.sv}</Badge>,<span style={{fontWeight:500}}>{a.sr}</span>,<span style={{color:C.t1}}>{a.de}</span>,a.ak?<Badge type="success">ACK</Badge>:<Badge type="critical">NEW</Badge>]}/>))}</Card></div>);}
function MsnGal({nav,goD}){return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Mission Gallery</h1>
<Btn primary sm onClick={()=>goD("newmission",{})}>+ New Mission</Btn></div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:10}}>{MSNS.map((m,i)=>(<Card key={m.id} anim onClick={()=>goD("generic",{title:"Mission: "+m.nm,fields:[["ID",m.id],["Customer",m.cu],["SLA",m.sl],["Priority",m.pr],["Satellites",""+m.sc],["Data",m.dv],["Status",m.st],["Description",m.ds]]})}>
<div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
<div>
<div style={{fontSize:15,fontWeight:600,color:"#fff",fontFamily:FT}}>{m.nm}</div>
<div style={{fontSize:11,color:C.t2,fontFamily:FB}}>{m.cu}</div></div>
<Badge type={m.pr==="P0"?"critical":m.pr==="P1"?"warning":"neutral"}>{m.pr}</Badge></div>
<p style={{fontSize:11,color:C.t2,lineHeight:1.4,marginBottom:10,fontFamily:FB}}>{m.ds}</p>
<div style={{display:"flex",gap:3}}>
<Badge type={m.st==="Active"?"success":"neutral"}>{m.st}</Badge>
<Badge type="cyan">{m.sc} sats</Badge></div></Card>))}</div></div>);}
function MsnPl({nav,goD}){const[sf,sS]=useState("All");const[sel,setSel]=useState(null);const fl=sf==="All"?PASSES:PASSES.filter(p=>p.sl.includes(sf));const pass=sel!=null?fl[sel]:null;return (
<div style={{display:"flex",height:"100%"}}>
<div style={{flex:1,padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:12}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Pass Planner</h1>
<div style={{display:"flex",gap:4}}>
<Btn sm onClick={()=>nav("msn","gallery")}>Missions</Btn>
<Btn sm onClick={()=>nav("msn","conflicts")}>Conflicts</Btn></div></div>
<div style={{marginBottom:10}}>
<Chips items={["All","SCN","Gov","Commercial"]} active={sf} set={sS}/></div>
<Card style={{padding:0,overflow:"hidden"}}>
<TH cols={[{l:"Time",w:"90px"},{l:"Satellite",w:"100px"},{l:"Site"},{l:"Mission"},{l:"SLA",w:"110px"},{l:"Rate",w:"75px"},{l:"Status",w:"80px"}]}/>
{fl.map((p,i)=>(<TR key={p.id} active={sel===i} onClick={()=>setSel(i)} cols={[{w:"90px"},{w:"100px"},{},{},{w:"110px"},{w:"75px"},{w:"80px"}]} vals={[<Mono>{p.s1}-{p.s2}</Mono>,<span>{p.sa}</span>,<span>{p.si}</span>,<span style={{color:C.t2}}>{p.mn}</span>,<Badge type={p.sl.includes("SCN")?"critical":p.sl.includes("Gov")?"warning":"neutral"}>{p.sl}</Badge>,<Mono>{p.rt}</Mono>,<Badge type={p.st==="Active"?"success":p.st==="Conflict"?"critical":p.st==="Upcoming"?"cyan":"neutral"}>{p.st}</Badge>]}/>))}</Card></div>
{pass&&<div style={{width:280,borderLeft:"1px solid "+C.bd,background:C.s1,padding:"16px 14px",overflow:"auto",flexShrink:0}}>
<div className="si" style={{fontSize:14,fontWeight:600,color:"#fff",marginBottom:10,fontFamily:FT}}>{pass.sa} to {pass.si}</div>
{[["Mission",pass.mn],["Time",pass.s1+"-"+pass.s2],["SLA",pass.sl],["Beam",pass.bm],["Elevation",pass.el+"deg"],["Rate",pass.rt]].map(([l,v])=>(<div key={l} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid "+C.bd,fontSize:12}}>
<span style={{color:C.t2,fontFamily:FT}}>{l}</span>
<span style={{color:"#fff",fontWeight:500,fontFamily:FB}}>{v}</span></div>))}<div style={{marginTop:10,display:"flex",gap:4}}>
<Btn sm primary onClick={()=>goD("edit",{title:pass.sa+" Pass",fields:[["Satellite",pass.sa],["Site",pass.si],["Time",pass.s1+"-"+pass.s2],["SLA",pass.sl],["Beam",pass.bm]]})}>Edit</Btn>
<Btn sm onClick={()=>goD("sim",{title:pass.sa+" Sim",cop:null})}>Simulate</Btn></div></div>}</div>);}
function MsnCf({nav,goD}){const cf=PASSES.filter(p=>p.st==="Conflict");return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Conflicts</h1>
<Btn sm onClick={()=>nav("msn","planner")}>Planner</Btn></div>
{cf.map(p=>(<Card key={p.id} anim style={{marginBottom:10,borderColor:C.rdD}}>
<div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
<div style={{display:"flex",gap:4,alignItems:"center"}}>
<Badge type="critical">Conflict</Badge>
<span style={{fontSize:13,fontWeight:600,color:"#fff",fontFamily:FT}}>{p.sa} at {p.si}</span></div>
<Mono>{p.s1}-{p.s2}</Mono></div>
<p style={{fontSize:11,color:C.t2,marginBottom:8,fontFamily:FB}}>Beam {p.bm} contention on {p.sl} mission "{p.mn}".</p>
<div style={{display:"flex",gap:4}}>
<Btn sm primary onClick={()=>goD("apply",{title:"Override for "+p.mn,cop:{ti:"Override",de:"Applying priority override"}})}>Apply Override</Btn>
<Btn sm onClick={()=>goD("edit",{title:"Reschedule "+p.sa,fields:[["Satellite",p.sa],["New Time",""],["Alt Beam",""],["Priority",p.sl]]})}>Reschedule</Btn>
<Btn sm onClick={()=>goD("sim",{title:"Conflict Resolution",cop:{ti:"Resolve",de:"Testing options"}})}>Simulate</Btn></div></Card>))}</div>);}
function NetSi({nav,goD}){const[sel,setSel]=useState(0);const s=SITES[sel];return (
<div style={{display:"flex",height:"100%"}}>
<div style={{flex:1,padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:14}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Network & Sites</h1>
<div style={{display:"flex",gap:4}}>
<Btn sm onClick={()=>nav("net","topology")}>Topology</Btn>
<Btn sm onClick={()=>nav("net","spectrum")}>Spectrum</Btn></div></div>
<Card style={{padding:0,overflow:"hidden"}}>
<TH cols={[{l:"Site",w:"100px"},{l:"Region",w:"80px"},{l:"Status",w:"90px"},{l:"Util",w:"100px"},{l:"Beams",w:"70px"},{l:"Bands",w:"80px"},{l:"Uptime",w:"55px"}]}/>
{SITES.map((x,i)=>(<TR key={x.id} active={sel===i} onClick={()=>setSel(i)} cols={[{w:"100px"},{w:"80px"},{w:"90px"},{w:"100px"},{w:"70px"},{w:"80px"},{w:"55px"}]} vals={[<span style={{fontWeight:sel===i?600:400,color:sel===i?C.tl:C.t1}}>{x.nm}</span>,<span style={{color:C.t2}}>{x.rg}</span>,<Badge type={x.st==="Online"?"success":x.st==="Degraded"?"warning":"neutral"}>{x.st}</Badge>,x.ut>0?<BarC pct={x.ut} color={x.ut>80?C.am:C.tl}/>:<span style={{color:C.t3}}>--</span>,<span>{x.bm}/{x.mx}</span>,<Mono>{x.bn}</Mono>,<span style={{color:C.t2}}>{x.up}</span>]}/>))}</Card></div>
<div style={{width:310,borderLeft:"1px solid "+C.bd,background:C.s1,padding:"16px 14px",overflow:"auto",flexShrink:0}}>
<div style={{fontSize:10,color:C.t3,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:4,fontFamily:FT}}>Site Detail</div>
<h3 style={{fontSize:16,fontWeight:600,color:"#fff",marginBottom:3,fontFamily:FT}}>{s.nm}</h3>
<Mono>{s.id}</Mono>
<div style={{display:"flex",gap:4,margin:"8px 0 12px"}}>
<Badge type={s.st==="Online"?"success":"warning"}>{s.st}</Badge>
<Badge type="cyan">{s.rg}</Badge></div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:12}}>{[["Arrays",""+s.ar],["Beams",s.bm+"/"+s.mx],["Util",s.ut+"%"],["Uptime",s.up]].map(([l,v])=>(<Card key={l} style={{padding:8}}>
<div style={{fontSize:10,color:C.t3,textTransform:"uppercase",fontFamily:FT}}>{l}</div>
<div style={{fontSize:16,fontWeight:600,color:"#fff",marginTop:2,fontFamily:FT}}>{v}</div></Card>))}</div>
<Card style={{padding:10,marginBottom:10}}>
<div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:6,fontFamily:FT}}>Environment</div>
{[["Temp",s.tp],["Wind",s.wd],["Condition",s.ev],["Backhaul",s.bh]].map(([l,v])=>(<div key={l} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",fontSize:12,borderBottom:"1px solid "+C.bd}}>
<span style={{color:C.t2,fontFamily:FT}}>{l}</span>
<span style={{color:s.ev==="Storm"?C.rd:"#fff",fontWeight:500,fontFamily:FB}}>{v}</span></div>))}</Card>
<Btn sm primary style={{width:"100%"}} onClick={()=>goD("edit",{title:"Edit "+s.nm,fields:[["Site Name",s.nm],["Region",s.rg],["Status",s.st],["Max Beams",""+s.mx],["Backhaul",s.bh],["Bands",s.bn]]})}>Edit Site</Btn></div></div>);}
function NetTo({nav}){return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Network Topology</h1>
<Btn sm onClick={()=>nav("net","sites")}>Sites</Btn></div>
<Card style={{padding:0,overflow:"hidden"}}>
<LiveMap/></Card>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginTop:16}}>{[{r:"CONUS",s:2,b:30,u:81},{r:"Europe/Arctic",s:2,b:24,u:65},{r:"APAC/Pacific",s:2,b:17,u:58}].map(x=>(<Card key={x.r} anim>
<div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:6,fontFamily:FT}}>{x.r}</div>
<div style={{fontSize:11,color:C.t2,marginBottom:3,fontFamily:FB}}>{x.s} sites, {x.b} beams</div>
<BarC pct={x.u} color={x.u>80?C.am:C.tl}/></Card>))}</div></div>);}
function NetSp({nav,goD}){return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Spectrum & Regulatory</h1>
<Btn sm onClick={()=>nav("net","sites")}>Sites</Btn></div>
<Card style={{padding:0,overflow:"hidden"}}>
<TH cols={[{l:"Band"},{l:"Freq",w:"130px"},{l:"Usage",w:"1.2fr"},{l:"License",w:"80px"},{l:"Coord",w:"80px"},{l:"Sites"}]}/>
{[{b:"S-band",f:"2.2-2.3 GHz",u:"TT&C, LEO downlink",l:"Active",c:"Current",s:"All"},{b:"X-band",f:"8.0-8.4 GHz",u:"High-rate imaging",l:"Active",c:"Current",s:"VAN,CC,GH,DAR"},{b:"Ka-band",f:"25.5-27.0 GHz",u:"High-throughput relay",l:"Active",c:"Pending",s:"CC,GH,DAR"},{b:"UHF",f:"390-399 MHz",u:"SCN legacy TT&C",l:"Gov",c:"N/A",s:"CC"}].map(x=>(<TR key={x.b} cols={[{},{w:"130px"},{w:"1.2fr"},{w:"80px"},{w:"80px"},{}]} onClick={()=>goD("generic",{title:x.b,fields:[["Frequency",x.f],["Usage",x.u],["License",x.l],["Coordination",x.c],["Sites",x.s]]})} vals={[<span style={{fontWeight:600,color:C.t1}}>{x.b}</span>,<Mono>{x.f}</Mono>,<span style={{color:C.t1}}>{x.u}</span>,<Badge type="success">{x.l}</Badge>,<Badge type={x.c==="Pending"?"warning":"success"}>{x.c}</Badge>,<span style={{color:C.t2}}>{x.s}</span>]}/>))}</Card></div>);}
function SatFl({nav,goD}){const[sel,setSel]=useState(0);const[f,sF]=useState("All");const sat=SATS[sel];const fl=f==="All"?SATS:SATS.filter(s=>s.ob===f);return (
<div style={{display:"flex",height:"100%"}}>
<div style={{flex:1,padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:12}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Fleet Overview</h1>
<div style={{display:"flex",gap:4}}>
<Btn sm onClick={()=>nav("sat","telemetry")}>Telemetry</Btn>
<Btn sm onClick={()=>nav("sat","commands")}>Commands</Btn>
<Btn sm onClick={()=>nav("sat","data")}>Data</Btn></div></div>
<div style={{marginBottom:10}}>
<Chips items={["All","LEO","MEO","GEO"]} active={f} set={sF}/></div>
<Card style={{padding:0,overflow:"hidden"}}>
<TH cols={[{l:"Satellite",w:"110px"},{l:"Orbit",w:"55px"},{l:"Owner",w:"90px"},{l:"Status",w:"80px"},{l:"Margin",w:"60px"},{l:"Health",w:"90px"}]}/>
{fl.map(s=>(<TR key={s.id} active={sel===SATS.indexOf(s)} onClick={()=>setSel(SATS.indexOf(s))} cols={[{w:"110px"},{w:"55px"},{w:"90px"},{w:"80px"},{w:"60px"},{w:"90px"}]} vals={[<span style={{fontWeight:500}}>{s.nm}</span>,<Badge type="cyan">{s.ob}</Badge>,<span style={{color:C.t2}}>{s.ow}</span>,<Badge type={s.st==="Nominal"?"success":s.st==="Degraded"?"warning":"critical"}>{s.st}</Badge>,<span style={{fontFamily:MN,color:s.mg<5?C.rd:s.mg<10?C.am:C.t1}}>{s.mg}</span>,<BarC pct={s.hp} color={s.hp>90?C.tl:s.hp>60?C.am:C.rd}/>]}/>))}</Card></div>
<div style={{width:290,borderLeft:"1px solid "+C.bd,background:C.s1,padding:"16px 14px",overflow:"auto",flexShrink:0}}>
<h3 style={{fontSize:16,fontWeight:600,color:"#fff",marginBottom:2,fontFamily:FT}}>{sat.nm}</h3>
<Mono>{sat.id}</Mono>
<div style={{display:"flex",gap:3,margin:"6px 0 12px"}}>
<Badge type="cyan">{sat.ob} {sat.al}</Badge>
<Badge type={sat.st==="Nominal"?"success":sat.st==="Degraded"?"warning":"critical"}>{sat.st}</Badge></div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5,marginBottom:12}}>{[["Temp",sat.tp],["Fuel",sat.fl+"%"],["Power",sat.pw],["Bat",sat.bt+"%"]].map(([l,v])=>(<Card key={l} style={{padding:7}}>
<div style={{fontSize:10,color:C.t3,textTransform:"uppercase",fontFamily:FT}}>{l}</div>
<div style={{fontSize:15,fontWeight:600,color:"#fff",marginTop:1,fontFamily:FT}}>{v}</div></Card>))}</div>
<Card style={{padding:10,marginBottom:10}}>
<div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:4,fontFamily:FT}}>Link Margin</div>
<MC data={sat.tl} color={sat.mg<5?C.rd:C.tl} thr={5}/></Card>
<Btn sm primary style={{width:"100%"}} onClick={()=>goD("edit",{title:"Edit "+sat.nm,fields:[["Name",sat.nm],["Orbit",sat.ob],["Mission",sat.ms],["Owner",sat.ow]]})}>Edit</Btn></div></div>);}
function SatTl({nav}){const[sel,setSel]=useState(0);const sat=SATS[sel];return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:14}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Telemetry</h1>
<Btn sm onClick={()=>nav("sat","fleet")}>Fleet</Btn></div>
<div style={{display:"flex",gap:2,marginBottom:14,flexWrap:"wrap"}}>{SATS.map((s,i)=>(<Btn key={s.id} sm active={sel===i} onClick={()=>setSel(i)}>{s.nm}</Btn>))}</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>{[["Link Margin (dB)",sat.tl,C.tl,5],["Temperature",[22,23,24,25,26,27,28,29,30,31,32,parseInt(sat.tp)],parseInt(sat.tp)>35?C.rd:C.tl,35],["Battery %",[95,94,93,92,91,90,89,88,87,86,85,sat.bt],C.tl,50],["Power (kW)",[1.1,1.2,1.0,1.3,1.1,1.2,1.0,1.1,1.3,1.2,1.1,parseFloat(sat.pw)],C.vi,null]].map(([l,d,c,th])=>(<Card key={l} anim>
<div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:3,fontFamily:FT}}>{l}</div>
<div style={{fontSize:22,fontWeight:600,color:"#fff",marginBottom:6,fontVariantNumeric:"tabular-nums",fontFamily:FT}}>{d[d.length-1]}</div>
<MC data={d} color={c} thr={th} h={65}/></Card>))}</div></div>);}
function SatCm({nav,goD}){return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Command & Control</h1>
<div style={{display:"flex",gap:4}}>
<Btn sm onClick={()=>nav("sat","fleet")}>Fleet</Btn>
<Btn primary sm onClick={()=>goD("newcommand",{})}>+ Command</Btn></div></div>
<Card style={{padding:0,overflow:"hidden"}}>
<TH cols={[{l:"Time",w:"55px"},{l:"ID",w:"80px"},{l:"Satellite",w:"100px"},{l:"Type",w:"80px"},{l:"Command",w:"1.2fr"},{l:"Status",w:"75px"}]}/>
{CMDS.map(c=>(<TR key={c.id} cols={[{w:"55px"},{w:"80px"},{w:"100px"},{w:"80px"},{w:"1.2fr"},{w:"75px"}]} onClick={()=>goD("generic",{title:"Command "+c.id,fields:[["Time",c.tm],["Satellite",c.sa],["Type",c.tp],["Command",c.cm],["Status",c.ss],["Response",c.rp]]})} vals={[<Mono>{c.tm}</Mono>,<Mono>{c.id}</Mono>,<span>{c.sa}</span>,<Badge type="neutral">{c.tp}</Badge>,<span style={{fontFamily:MN,color:C.t1}}>{c.cm}</span>,<Badge type={c.ss==="Executed"?"success":"warning"}>{c.ss}</Badge>]}/>))}</Card></div>);}
function SatDt({nav,goD}){return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Data Transfer</h1>
<Btn sm onClick={()=>nav("sat","fleet")}>Fleet</Btn></div>
<div style={{display:"flex",gap:8,marginBottom:16}}>
<KPI label="Active" value="1"/>
<KPI label="Volume" value="74.6 GB"/>
<KPI label="Throughput" value="175 Mbps"/></div>
<Card style={{padding:0,overflow:"hidden"}}>
<TH cols={[{l:"Source",w:"110px"},{l:"Dest",w:"110px"},{l:"Mission"},{l:"Rate",w:"80px"},{l:"Data",w:"70px"},{l:"Status",w:"85px"}]}/>
{[{sr:"Sentinel-7A",ds:"Vandenberg",st:"Active",da:"4.2 GB",rt:"150 Mbps",mn:"TerraScan"},{sr:"Atlas-14",ds:"Goonhilly",st:"Completed",da:"28.1 GB",rt:"200 Mbps",mn:"CommBridge"},{sr:"Meridian-3",ds:"Svalbard",st:"Queued",da:"--",rt:"75 Mbps",mn:"ShieldNet"}].map((d,i)=>(<TR key={i} cols={[{w:"110px"},{w:"110px"},{},{w:"80px"},{w:"70px"},{w:"85px"}]} onClick={()=>goD("generic",{title:d.sr+" to "+d.ds,fields:[["Source",d.sr],["Dest",d.ds],["Mission",d.mn],["Rate",d.rt],["Data",d.da],["Status",d.st]]})} vals={[<span>{d.sr}</span>,<span>{d.ds}</span>,<span style={{color:C.t2}}>{d.mn}</span>,<Mono>{d.rt}</Mono>,<span>{d.da}</span>,<Badge type={d.st==="Active"?"success":d.st==="Completed"?"neutral":"cyan"}>{d.st}</Badge>]}/>))}</Card></div>);}
function IntAn({nav,goD}){const[f,sF]=useState("All");const fl=f==="All"?ANOMS:ANOMS.filter(a=>a.sv===f);return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:12}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Anomaly Wall</h1>
<div style={{display:"flex",gap:4}}>
<Btn sm onClick={()=>nav("int","analytics")}>Analytics</Btn>
<Btn sm onClick={()=>nav("int","simulation")}>Simulation</Btn></div></div>
<div style={{marginBottom:10}}>
<Chips items={["All","High","Medium","Low"]} active={f} set={sF}/></div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(350px,1fr))",gap:10}}>{fl.map((a,i)=>(<Card key={a.id} anim style={{borderColor:a.sv==="High"?C.rdD:C.bd}} onClick={()=>goD("generic",{title:"Anomaly "+a.id,fields:[["Type",a.tp],["Severity",a.sv],["Confidence",a.cf+"%"],["Site",a.si],["Time",a.tm+" UTC"],["Cause",a.ca],["Impact",a.im]]})}>
<div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
<div style={{display:"flex",gap:3}}>
<Badge type={a.sv==="High"?"critical":a.sv==="Medium"?"warning":"neutral"}>{a.sv}</Badge>
<Badge type="neutral">{a.tp}</Badge></div>
<Mono>{a.id}</Mono></div>
<div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:3,fontFamily:FT}}>{a.ca}</div>
<p style={{fontSize:11,color:C.t2,marginBottom:5,fontFamily:FB}}>{a.im}</p>
<div style={{display:"flex",alignItems:"center",gap:6,marginBottom:8}}>
<span style={{fontSize:10,color:C.tl,fontWeight:500,fontFamily:FT}}>AI {a.cf}%</span>
<BarC pct={a.cf} color={C.tl}/></div>
<div style={{display:"flex",gap:3}}>
<Btn sm primary onClick={e=>{e.stopPropagation();goD("investigate",{title:a.ca,anom:a});}}>Investigate</Btn>
<Btn sm onClick={e=>{e.stopPropagation();goD("correlate",{title:a.ca,anom:a});}}>Correlate</Btn></div></Card>))}</div></div>);}
function IntSim({nav,goD}){return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Scenario Builder</h1>
<div style={{display:"flex",gap:4}}>
<Btn sm onClick={()=>nav("int","anomalies")}>Anomalies</Btn>
<Btn primary sm onClick={()=>goD("configure",{title:"New Scenario"})}>+ Scenario</Btn></div></div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:10}}>{[{n:"Site Failover - Darwin",d:"Test rerouting SCN missions.",s:"Ready"},{n:"SCN Surge - 3x",d:"Triple SCN load test.",s:"Ready"},{n:"Spectrum Conflict",d:"S-band interference test.",s:"Draft"},{n:"Multi-site Outage",d:"Darwin + Svalbard simultaneous.",s:"Ready"}].map(x=>(<Card key={x.n} anim>
<div style={{fontSize:14,fontWeight:600,color:"#fff",marginBottom:3,fontFamily:FT}}>{x.n}</div>
<p style={{fontSize:11,color:C.t2,lineHeight:1.4,marginBottom:8,fontFamily:FB}}>{x.d}</p>
<div style={{marginBottom:8}}>
<Badge type={x.s==="Ready"?"success":"neutral"}>{x.s}</Badge></div>
<div style={{display:"flex",gap:3}}>
<Btn sm primary onClick={()=>goD("runsim",{title:x.n})}>Run</Btn>
<Btn sm onClick={()=>goD("configure",{title:x.n})}>Configure</Btn></div></Card>))}</div></div>);}
function IntAy({nav,goD}){return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Analytics Dashboard</h1>
<Btn sm onClick={()=>nav("int","anomalies")}>Anomalies</Btn></div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>{[["Throughput (Gbps)",[3.2,3.8,4.1,4.5,4.2,4.8,5.1,4.9,5.3,4.7,5.0,4.8],C.tl],["Signal (dB)",[12.1,11.8,12.4,11.5,12.0,11.9,12.3,11.7,12.1,12.0,11.8,12.2],C.tl],["Error Rate (%)",[0.8,1.1,0.9,1.5,1.2,2.1,1.8,1.4,1.1,0.9,1.3,1.0],C.am],["Beams Active",[52,55,58,54,60,62,58,64,61,59,63,65],C.vi]].map(([l,d,c])=>(<Card key={l} anim onClick={()=>goD("generic",{title:l,charts:[[l,d,c]]})}>
<div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:3,fontFamily:FT}}>{l}</div>
<div style={{fontSize:22,fontWeight:600,color:"#fff",marginBottom:6,fontFamily:FT}}>{d[d.length-1]}</div>
<MC data={d} color={c} h={70}/></Card>))}</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16}}>
<KPI label="Contacts" value="142" sub="8% up"/>
<KPI label="Data" value="847 GB"/>
<KPI label="Pass Dur" value="16.4m"/>
<KPI label="Beam Util" value="73%"/>
<KPI label="Avail" value="98.4%"/>
<KPI label="Anomalies" value="6"/></div>
<Card style={{marginBottom:16}}>
<div style={{fontSize:14,fontWeight:600,color:"#fff",marginBottom:10,fontFamily:FT}}>Site Utilization</div>
{SITES.filter(s=>s.ut>0).map(s=>(<div key={s.id} style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
<span style={{fontSize:11,color:C.t2,width:90,fontFamily:FB}}>{s.nm}</span>
<BarC pct={s.ut} color={s.ut>80?C.am:C.tl}/></div>))}</Card></div>);}
function PrvPl({nav,goD}){const stg=["Mfg","Ship","Site","Install","Cal","Ops"];return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Deploy Pipeline</h1>
<div style={{display:"flex",gap:4}}>
<Btn sm onClick={()=>nav("prv","lifecycle")}>Lifecycle</Btn>
<Btn sm onClick={()=>nav("prv","wizard")}>New Site</Btn></div></div>
{[{u:"Portal-NW-042",d:"Guam",s:2,e:"Apr 18",x:"On Track"},{u:"Portal-NW-043",d:"Thule",s:1,e:"May 02",x:"On Track"},{u:"Portal-NW-044",d:"Diego Garcia",s:3,e:"Apr 22",x:"Delayed"},{u:"Portal-NW-045",d:"Alice Springs",s:5,e:"Apr 12",x:"On Track"}].map(u=>(<Card key={u.u} anim style={{marginBottom:10,borderColor:u.x==="Delayed"?C.rdD:C.bd}} onClick={()=>goD("generic",{title:u.u,fields:[["Destination",u.d],["Stage",stg[u.s]],["ETA",u.e],["Status",u.x]]})}>
<div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
<span style={{fontSize:13,fontWeight:600,color:"#fff",fontFamily:FT}}>{u.u} - {u.d}</span>
<Badge type={u.x==="On Track"?"success":"critical"}>{u.x}</Badge></div>
<div style={{display:"flex",gap:2}}>{stg.map((s,j)=>(<div key={s} style={{flex:1,textAlign:"center"}}>
<div style={{height:3,background:j<=u.s?C.tl:C.s3,borderRadius:2,marginBottom:3}}/>
<div style={{fontSize:10,color:j<=u.s?C.tl:C.t3,fontWeight:500,fontFamily:FT}}>{s}</div></div>))}</div></Card>))}</div>);}
function PrvLc({nav}){return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Station Lifecycle</h1>
<Btn sm onClick={()=>nav("prv","pipeline")}>Pipeline</Btn></div>
{["Active","Commissioning","Degraded","Planned"].map(ph=>{const ss=SITES.filter(s=>ph==="Active"?s.st==="Online":s.st===ph);return (
<div key={ph} style={{marginBottom:20}}>
<div style={{fontSize:12,fontWeight:600,color:C.t1,marginBottom:6,fontFamily:FT}}>{ph} ({ss.length})</div>
{ss.length?ss.map(s=>(<Card key={s.id} anim style={{marginBottom:5,padding:10}}>
<div style={{display:"flex",justifyContent:"space-between"}}>
<span style={{fontSize:12,fontWeight:500,color:C.t1,fontFamily:FB}}>{s.nm}</span>
<Badge type={s.st==="Online"?"success":s.st==="Degraded"?"warning":"neutral"}>{s.st}</Badge></div></Card>)):<div style={{fontSize:11,color:C.t3,padding:6,fontFamily:FB}}>None</div>}</div>);})}</div>);}
function PrvWz({nav,goD}){return (
<div style={{padding:"16px 20px",overflow:"auto",maxWidth:640}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Site Provisioning</h1>
<Btn sm onClick={()=>nav("prv","pipeline")}>Pipeline</Btn></div>
<Card anim>{[["Site Name",""],["Location",""],["Region",""],["Antenna","Phased Array Portal NW"]].map(([l,v])=>(<div key={l} style={{marginBottom:12}}>
<div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:3,fontFamily:FT}}>{l}</div>
<div style={{padding:"8px 12px",borderRadius:6,border:"1px solid "+C.bd,background:C.s2,fontSize:12,color:v?C.t1:C.t3,fontFamily:FB}}>{v||"Enter "+l.toLowerCase()+"..."}</div></div>))}{[["Dish","Parabolic A200"],["Modem","SDR NW-M1"],["Power","Solar+Grid"]].map(([c,d])=>(<Card key={c} style={{marginBottom:6,padding:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div>
<div style={{fontSize:12,fontWeight:600,color:C.t1,fontFamily:FT}}>{c}</div>
<div style={{fontSize:11,color:C.t2,fontFamily:FB}}>{d}</div></div>
<Btn sm onClick={()=>goD("configure",{title:c+" Configuration"})}>Configure</Btn></Card>))}<Btn primary style={{marginTop:12,width:"100%",padding:"8px 0"}} onClick={()=>goD("apply",{title:"Site Provisioning",cop:{ti:"Provision",de:"Request submitted."}})}>Provision Site</Btn></Card></div>);}
function GovRo({nav}){const rl=["NOC","RF Eng","Sat Op","Admin","SCN","Sec"];const cp=["Command","Schedule","Network","Sat Ops","Sim","Prov","Gov"];const mx=[["Full","Read","Scoped","Full","Scoped","Audit"],["Edit","Read","Edit Own","Full","Priority","Audit"],["Full","Full","Read","Read","Scoped","Audit"],["Read","Read","Full","Scoped","Scoped","Audit"],["Full","Full","Edit","Full","Full","Read"],["Full","Read","None","Read","None","Audit"],["Read","None","None","Read","Read","Full"]];return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Roles & Access</h1>
<div style={{display:"flex",gap:4}}>
<Btn sm onClick={()=>nav("gov","policies")}>Policies</Btn>
<Btn sm onClick={()=>nav("gov","audit")}>Audit</Btn></div></div>
<Card style={{padding:0,overflow:"auto"}}>
<table style={{width:"100%",borderCollapse:"collapse"}}>
<thead>
<tr>{["Capability",...rl].map(h=>(<th key={h} style={{padding:"7px 8px",textAlign:"left",fontSize:10,fontWeight:600,color:C.t3,textTransform:"uppercase",borderBottom:"1px solid "+C.s3,background:C.s2,whiteSpace:"nowrap",fontFamily:FT}}>{h}</th>))}</tr></thead>
<tbody>{cp.map((c,ci)=>(<tr key={c}>{[c,...mx[ci]].map((cell,j)=>(<td key={j} style={{padding:"7px 8px",borderBottom:"1px solid "+C.bd,color:j===0?"#fff":cell==="Full"?C.tl:cell==="None"?C.t3:C.t1,fontWeight:j===0?500:400,fontSize:12,fontFamily:j===0?FT:FB}}>{cell}</td>))}</tr>))}</tbody></table></Card></div>);}
function GovPo({nav,goD}){return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Policy Engine</h1>
<div style={{display:"flex",gap:4}}>
<Btn sm onClick={()=>nav("gov","roles")}>Roles</Btn>
<Btn primary sm onClick={()=>goD("edit",{title:"New Policy",fields:[["Policy Name",""],["Type",""],["Conditions",""],["Scope",""],["Enforcement","Active"]]})}>+ Policy</Btn></div></div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(330px,1fr))",gap:10}}>{[{n:"SCN Priority Override",d:"SCN Critical preempts Commercial.",t:"Priority"},{n:"ITAR Export Control",d:"ITAR telemetry restricted.",t:"Security"},{n:"Allied-Only Sites",d:"Five Eyes restrictions.",t:"Governance"},{n:"Sim Isolation",d:"Sim isolated from production.",t:"Safety"},{n:"Beam Fairness",d:"Max 40% per customer.",t:"Capacity"},{n:"Auto-Failover",d:"Copilot failover for P0.",t:"Automation",s:"Draft"}].map(p=>(<Card key={p.n} anim onClick={()=>goD("generic",{title:p.n,fields:[["Type",p.t],["Status",p.s||"Active"],["Description",p.d]]})}>
<div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
<span style={{fontSize:13,fontWeight:600,color:"#fff",fontFamily:FT}}>{p.n}</span>
<Badge type={p.s==="Draft"?"neutral":"success"}>{p.s||"Active"}</Badge></div>
<p style={{fontSize:11,color:C.t2,lineHeight:1.4,marginBottom:6,fontFamily:FB}}>{p.d}</p>
<div style={{display:"flex",gap:4}}>
<Badge type="neutral">{p.t}</Badge>
<Btn sm onClick={e=>{e.stopPropagation();goD("edit",{title:"Edit "+p.n,fields:[["Name",p.n],["Type",p.t],["Description",p.d]]});}}>Edit</Btn></div></Card>))}</div></div>);}
function GovAu({nav,goD}){return (
<div style={{padding:"16px 20px",overflow:"auto"}}>
<div className="fu" style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
<h1 style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:FT}}>Audit Trail</h1>
<Btn sm onClick={()=>nav("gov","roles")}>Roles</Btn></div>
<Card style={{padding:0,overflow:"hidden"}}>
<TH cols={[{l:"Time",w:"80px"},{l:"User",w:"90px"},{l:"Action",w:"1.5fr"},{l:"Target",w:"110px"},{l:"Cat",w:"90px"}]}/>
{[{t:"14:22:08",u:"J. Chen",a:"Ack INC-4401",g:"Pathfinder-9",c:"Incident"},{t:"14:18:31",u:"System",a:"Escalated INC-4405",g:"Darwin",c:"Escalation"},{t:"14:05:12",u:"M. Park",a:"Spectrum ticket",g:"Svalbard",c:"Spectrum"},{t:"13:55:00",u:"R. Singh",a:"Sent CMD-404",g:"Meridian-3",c:"Command"},{t:"13:41:19",u:"Copilot",a:"Reroute suggestion",g:"Pathfinder-9",c:"AI"},{t:"13:22:00",u:"A. Kim",a:"Ephemeris update",g:"Atlas-14",c:"Nav"},{t:"12:30:00",u:"System",a:"Maintenance sched",g:"GH B-07",c:"Maint"}].map((l,i)=>(<TR key={i} cols={[{w:"80px"},{w:"90px"},{w:"1.5fr"},{w:"110px"},{w:"90px"}]} onClick={()=>goD("generic",{title:"Audit Entry",fields:[["Time",l.t],["User",l.u],["Action",l.a],["Target",l.g]]})} vals={[<Mono>{l.t}</Mono>,<span style={{color:l.u==="System"||l.u==="Copilot"?C.tl:C.t1,fontWeight:500}}>{l.u}</span>,<span style={{color:C.t1}}>{l.a}</span>,<span style={{color:C.t2}}>{l.g}</span>,<Badge type="neutral">{l.c}</Badge>]}/>))}</Card></div>);}
const SC={"cmd-overview":CmdOv,"cmd-alerts":CmdAl,"msn-gallery":MsnGal,"msn-planner":MsnPl,"msn-conflicts":MsnCf,"net-sites":NetSi,"net-topology":NetTo,"net-spectrum":NetSp,"sat-fleet":SatFl,"sat-telemetry":SatTl,"sat-commands":SatCm,"sat-data":SatDt,"int-anomalies":IntAn,"int-simulation":IntSim,"int-analytics":IntAy,"prv-pipeline":PrvPl,"prv-lifecycle":PrvLc,"prv-wizard":PrvWz,"gov-roles":GovRo,"gov-policies":GovPo,"gov-audit":GovAu};

function OverviewPage({setPage}){
  var SH = {fontSize:12,color:C.ac,fontWeight:600,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:FT};
  return (
    <div style={{flex:1,overflow:"auto",padding:"40px 48px",maxWidth:1000,margin:"0 auto"}}>
      <div className="fu" style={{marginBottom:32,textAlign:"center"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16,justifyContent:"center"}}>
          <Logo size={32}/>
          <span style={{fontSize:24,fontWeight:700,color:"#fff",letterSpacing:"-0.03em",fontFamily:FT}}>NorthStar</span>
        </div>
        <p style={{fontSize:14,color:C.t1,lineHeight:1.7,maxWidth:700,fontFamily:FB,margin:"0 auto"}}>A speculative, AI-native product experience designed for Northwood Space, reimagining how satellite operators monitor, manage, and scale ground network infrastructure.</p>
        <div style={{display:"flex",gap:6,marginTop:12,justifyContent:"center"}}>
          <Badge type="info">Speculative Design</Badge>
          <Badge type="neutral">Northwood Space</Badge>
          <Badge type="success">AI-Native</Badge>
        </div>
      </div>
      <Card anim style={{marginBottom:20,padding:0,overflow:"hidden"}}>
        <div style={{padding:"12px 16px",borderBottom:"1px solid "+C.bd}}>
          <div style={SH}>Product Demo Preview</div>
          <p style={{fontSize:11,color:C.t2,marginTop:2,fontFamily:FB}}>Interactive prototype across 7 operational domains</p>
        </div>
        <div style={{padding:0}}><LiveMap/></div>
        <div style={{padding:"12px 16px",borderTop:"1px solid "+C.bd,textAlign:"center"}}>
          <Btn primary onClick={function(){setPage("demo");}}>View Demo</Btn>
        </div>
      </Card>
      <Card anim style={{marginBottom:20}}>
        <div style={SH}>What is NorthStar?</div>
        <p style={{fontSize:13,color:C.t1,lineHeight:1.6,margin:0,fontFamily:FB}}>NorthStar is a speculative product experience exploring what an AI-native ground operations console could look like for Northwood Space. It treats the global phased-array ground network as a programmable, multi-tenant utility where sites, beams, spectrum, and capacity are first-class resources. An embedded AI Copilot surfaces recommendations while raw telemetry and deterministic constraints stay visible, giving operators decision-quality context under stress.</p>
      </Card>
      <Card anim style={{marginBottom:20,borderColor:C.tlD,animation:"vGlow 3s ease-in-out infinite"}}>
        <div style={SH}>The Value of Design</div>
        <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:12,fontFamily:FB}}>In mission-critical systems, product design is operational infrastructure. The difference between a well-designed ops console and a poorly designed one is measured in incident response time, operator cognitive load, and mission success.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[["Cognitive Load Reduction","Complex multi-tenant operations become legible through information hierarchy, progressive disclosure, and contextual AI."],["Decision Confidence","When operators face the worst five minutes of the week, the interface must provide decision-quality context instantly."],["Resilience by Design","Making failover pathways, beam alternatives, and spectrum options visible reduces time-to-mitigation."],["Competitive Differentiation","Superior UX becomes a tangible advantage for customer acquisition and retention."]].map(function(pair,i){
            return (
              <div key={i} style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <div style={{fontSize:12,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>{pair[0]}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{pair[1]}</p>
              </div>
            );
          })}
        </div>
      </Card>
      <Card anim style={{marginBottom:20,borderColor:C.acD}}>
        <div style={SH}>The Problem</div>
        <p style={{fontSize:13,color:C.t1,lineHeight:1.6,margin:0,fontFamily:FB}}>Every satellite requires a connection back to Earth. As launch cadence accelerates, the ground segment has become the critical bottleneck. Operators lack unified tooling to manage multi-tenant scheduling, phased-array beam allocation, spectrum coordination, and resilience across a globally distributed network.</p>
      </Card>
      <Card anim style={{marginBottom:20}}>
        <div style={SH}>The Solution</div>
        <p style={{fontSize:13,color:C.t1,lineHeight:1.6,margin:0,fontFamily:FB}}>NorthStar treats Northwood's ground network as a programmable, multi-tenant utility. Sites, beams, spectrum, and capacity are first-class resources. An embedded AI Copilot surfaces recommendations while raw telemetry stays visible.</p>
      </Card>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20}}>
        <Card anim>
          <div style={SH}>Product Goals</div>
          {["Decision-quality context under stress","Fair, explainable multi-tenant scheduling","Explicit resilience and failover pathways","AI that augments without obscuring","Dual-use commercial + national security"].map(function(g,i){
            return (<div key={i} style={{display:"flex",gap:6,padding:"4px 0",fontSize:12,color:C.t1,fontFamily:FB}}>+ {g}</div>);
          })}
        </Card>
        <Card anim>
          <div style={SH}>Business Outcomes</div>
          {["Increased beam/site utilization","Reduced incident response time","Faster mission onboarding","SCN modernization alignment","Competitive differentiation via UX"].map(function(g,i){
            return (<div key={i} style={{display:"flex",gap:6,padding:"4px 0",fontSize:12,color:C.t1,fontFamily:FB}}>+ {g}</div>);
          })}
        </Card>
      </div>
      <Card anim style={{marginBottom:20}}>
        <div style={SH}>Design Principles</div>
        {["Make the invisible visible - The ground network is invisible infrastructure. Surface site health, beam allocation, spectrum status, and capacity as legible, controllable resources.","Design for decision confidence under stress - When operators face the worst five minutes of the week, the interface must provide decision-quality context instantly, not more data to parse.","AI-augmented, not AI-obscured - The Copilot suggests and explains. Raw telemetry stays visible alongside recommendations. Operators always see the evidence behind every suggestion.","Calm nominal, sharp anomaly - Default visual state is quiet and restrained. When something goes wrong, the interface sharpens: color, motion, and hierarchy shift to direct attention.","Systems over screens - NorthStar is not a collection of dashboards. It is a programmable surface for operating a multi-tenant ground network as a coherent system."].map(function(p,i){
          return (
            <div key={i} style={{display:"flex",gap:8,padding:"6px 0",borderBottom:i<4?"1px solid "+C.bd:"none"}}>
              <span style={{color:C.tl,fontWeight:600,fontSize:12,flexShrink:0,fontFamily:FT}}>{""+(i+1)+"."}</span>
              <span style={{fontSize:12,color:C.t2,lineHeight:1.5,fontFamily:FB}}>{p}</span>
            </div>
          );
        })}
      </Card>
      <Card anim style={{marginBottom:20}}>
        <div style={SH}>Projected Business Outcomes</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
          {[
            {v:"+40%",l:"Beam Utilization",d:"AI-driven beam allocation and multi-tenant scheduling optimize the use of every phased-array across the network, reducing idle capacity."},
            {v:"-60%",l:"Incident Response Time",d:"Copilot-assisted anomaly detection and automated rerouting recommendations cut mean-time-to-resolution for link margin and spectrum conflicts."},
            {v:"3x",l:"Mission Onboarding Speed",d:"Standardized provisioning workflows with pre-validated site-beam-spectrum assignments accelerate new customer activation."},
            {v:"99.5%",l:"SLA Compliance",d:"Proactive failover planning and simulation tools ensure ground network availability meets or exceeds contracted service levels."}
          ].map(function(k,i){
            return (
              <div key={i} style={{padding:14,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <div style={{fontSize:24,fontWeight:700,color:C.tl,marginBottom:4,fontFamily:FT}}>{k.v}</div>
                <div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:6,fontFamily:FT}}>{k.l}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{k.d}</p>
              </div>
            );
          })}
        </div>
        <Card style={{padding:14}}>
          <div style={SH}>Qualitative Impact</div>
          {["Significant improvement in multi-tenant coordination through shared visibility, reducing scheduling conflicts and SLA disputes","Increased operator trust in AI-assisted workflows with transparent, evidence-based Copilot recommendations","More predictable mission outcomes by transforming complex ground operations into structured, rehearsable processes","Positioned NorthStar as a competitive differentiator, deepening the operator-customer partnership through superior UX"].map(function(q,i){
            return (
              <div key={i} style={{display:"flex",gap:6,padding:"4px 0",fontSize:12,color:C.t2,lineHeight:1.55,fontFamily:FB}}>
                <span style={{color:C.tl,flexShrink:0}}>+</span>{q}
              </div>
            );
          })}
        </Card>
      </Card>
      <Card anim>
        <div style={SH}>Tech Stack</div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          {["Perplexity","Claude Code","Cursor","Paper Design","Figma","Figma MCP","React","InFlight"].map(function(t){
            return (<span key={t} style={{padding:"5px 11px",borderRadius:6,background:C.s2,border:"1px solid "+C.bd,fontSize:11,fontWeight:500,color:C.t1,fontFamily:FB}}>{t}</span>);
          })}
        </div>
      </Card>
    </div>
  );
}

function PostcardFront({onFlip}){
  var tkRef = useState(0);
  var tk = tkRef[0];
  var setTk = tkRef[1];
  useEffect(function(){var iv=setInterval(function(){setTk(function(t){return t+1;});},50);return function(){clearInterval(iv);};}, []);

  return (
    <div style={{textAlign:"center",backfaceVisibility:"hidden"}}>
      <div className="fu" style={{width:"100%",aspectRatio:"1.5",background:"linear-gradient(135deg,#0F1419 0%,#1A2636 12%,#161C24 24%,#1E3040 36%,#1E252E 48%,#0F1419 55%,#162030 65%,#161C24 76%,#1A2636 85%,#0F1419 100%)",backgroundSize:"400% 400%",animation:"wave 14s ease-in-out infinite, pcGlow 4s ease-in-out infinite",borderRadius:12,border:"3px solid "+C.s3,overflow:"hidden",position:"relative",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"}}>
        {Array.from({length:60}).map(function(_,i){
          var sx = (Math.sin(i*7.3)*50+50);
          var sy = (Math.cos(i*5.1)*50+50);
          var sz = (i%3===0) ? 2 : (i%2===0 ? 1.5 : 1);
          var dur = 3 + (i%5)*1;
          return (
            <div key={"s"+i} style={{position:"absolute",left:sx+"%",top:sy+"%",width:sz,height:sz,borderRadius:"50%",background:"#fff",animation:"twinkle "+dur+"s ease-in-out infinite",animationDelay:(i*0.1)+"s"}}/>
          );
        })}
        {[
          {x:12,y:18,sp:9,col:C.tl,a:0},
          {x:78,y:25,sp:6,col:C.ac,a:45},
          {x:35,y:60,sp:11,col:"#8FAAC8",a:90},
          {x:88,y:50,sp:7,col:C.tl,a:135},
          {x:22,y:78,sp:5,col:C.ac,a:180},
          {x:62,y:12,sp:8,col:"#8FAAC8",a:225},
          {x:50,y:42,sp:10,col:C.tl,a:270}
        ].map(function(sat,si){
          var dx = Math.sin((tk/sat.sp)*0.5 + sat.a) * 10;
          var dy = Math.cos((tk/sat.sp)*0.4 + sat.a) * 8;
          var rot = (tk * (5/sat.sp) + sat.a) % 360;
          return (
            <div key={"sat"+si} style={{position:"absolute",left:(sat.x+dx)+"%",top:(sat.y+dy)+"%",transition:"left 0.1s linear, top 0.1s linear"}}>
              <div style={{width:14,height:6,background:sat.col,borderRadius:2,boxShadow:"0 0 10px "+sat.col,transform:"rotate("+rot+"deg)"}}>
                <div style={{position:"absolute",width:24,height:2,background:sat.col,top:2,left:-5,opacity:0.5,borderRadius:1}}/>
              </div>
            </div>
          );
        })}
        <div style={{position:"absolute",top:"45%",left:"50%",transform:"translate(-50%,-50%)"}}>
          <div style={{padding:"10px 24px",background:C.s1+"ee",border:"1px solid "+C.tlD,borderRadius:"16px 16px 16px 4px",color:C.tl,fontSize:14,fontWeight:600,display:"inline-block",fontFamily:FT,animation:"bo 2s ease-in-out infinite"}}>
            You've got mail!
          </div>
        </div>
        <div style={{position:"absolute",bottom:14,left:0,right:0,textAlign:"center"}}>
          <div style={{padding:"5px 14px",background:C.s1+"ee",border:"1px solid "+C.tlD,borderRadius:6,fontSize:11,color:C.tl,fontWeight:600,display:"inline-block",fontFamily:FT}}>Northwood Space Team</div>
        </div>
      </div>
    </div>
  );
}

function PostcardBack({onClose}){
  var stripes = Array.from({length:40}).map(function(_,i){
    return (<div key={i} style={{width:14,height:6,background:i%2===0?C.s3:"rgba(154,197,185,0.4)",transform:"skewX(-25deg)"}}/>);
  });
  return (
    <div style={{transform:"rotateY(180deg)",backfaceVisibility:"hidden"}}>
      <div style={{background:"#FFFFFF",borderRadius:12,overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.5)",border:"3px solid "+C.s3}}>
        <div style={{display:"flex",justifyContent:"center",gap:0,padding:"5px 0",background:"#E8E2DA",borderBottom:"1px solid #D4CFC4"}}>{stripes}</div>
        <div style={{padding:"16px 28px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
            <div style={{display:"flex",gap:6}}>
              <a href="https://designsbytulcy.weebly.com" target="_blank" rel="noopener noreferrer" style={{padding:"5px 12px",borderRadius:4,background:C.s2,color:C.t1,fontSize:10,fontWeight:600,textDecoration:"none",fontFamily:FT}}>Portfolio</a>
              <a href="https://drive.google.com/file/d/1dvnaJaTdTq2Esx_BNRYnpLAZjJgwRk79/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{padding:"5px 12px",borderRadius:4,background:C.s2,color:C.t1,fontSize:10,fontWeight:600,textDecoration:"none",fontFamily:FT}}>Resume</a>
              <a href="https://www.linkedin.com/in/tulcypatel" target="_blank" rel="noopener noreferrer" style={{padding:"5px 12px",borderRadius:4,background:C.s2,color:C.t1,fontSize:10,fontWeight:600,textDecoration:"none",fontFamily:FT}}>LinkedIn</a>
            </div>
            <div style={{width:64,height:72,border:"2px dashed #999",borderRadius:4,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(154,197,185,0.06)",padding:4}}>
              <svg viewBox="0 0 40 40" width="30" height="30">
                <circle cx="20" cy="20" r="14" fill="none" stroke="#888" strokeWidth="1.5"/>
                <circle cx="20" cy="20" r="8" fill="none" stroke="#888" strokeWidth="1"/>
                <circle cx="20" cy="20" r="2" fill="#888"/>
                <line x1="28" y1="8" x2="36" y2="4" stroke="#888" strokeWidth="0.8"/>
                <line x1="30" y1="10" x2="38" y2="8" stroke="#888" strokeWidth="0.8"/>
                <line x1="31" y1="13" x2="38" y2="12" stroke="#888" strokeWidth="0.8"/>
              </svg>
              <div style={{fontSize:10,color:"#888",marginTop:2,fontFamily:FT}}>NorthStar 2026</div>
            </div>
          </div>
          <div style={{display:"flex",gap:24}}>
            <div style={{flex:1}}>
              <div style={{fontFamily:FB,fontSize:12,lineHeight:1.7,color:"#3A3228"}}>
                <p style={{marginBottom:6}}>Dear Northwood Space team,</p>
                <p style={{marginBottom:6}}>I believe deeply in what you are building, and I want to be part of making it real. When I first learned about Northwood's mission to solve the ground segment bottleneck, something clicked for me. Here was a company tackling one of the most overlooked yet fundamental challenges in space infrastructure, doing it with the kind of ambition and craftsmanship that I find deeply inspiring.</p>
                <p style={{marginBottom:6}}>My background sits at the intersection of computer science and design, and I have always been drawn to nascent spaces where the rules are still being written. I thrive in ambiguity because that is where curiosity becomes the most powerful design tool.</p>
                <p style={{marginBottom:6}}>What excites me most about Northwood is your "novel in the aggregate" philosophy. You are remixing proven approaches from adjacent industries to create something categorically better. That resonates with how I think about design: pulling the best patterns and applying them with deep domain understanding.</p>
                <p style={{marginBottom:6}}>I created NorthStar as a speculative exploration of what Northwood's operations experience could be. Not a finished product, but a conversation starter. It represents my approach: start with deep research, build understanding through making, and let curiosity guide the process.</p>
                <p style={{marginBottom:6}}>I would love the chance to bring my curiosity, my craft, and my passion for designing in complex domains to the Northwood team.</p>
                <p style={{marginBottom:10}}>With genuine excitement,</p>
                <p style={{fontSize:24,fontWeight:700,fontFamily:FB}}>Tulcy</p>
              </div>
            </div>
            <div style={{width:1,background:"#C8C2BA",flexShrink:0}}/>
            <div style={{width:160,flexShrink:0,paddingTop:10}}>
              <div style={{fontSize:12,fontWeight:600,color:"#555",marginBottom:12,fontFamily:FT}}>To:</div>
              <div style={{fontSize:13,color:"#333",fontFamily:FB,lineHeight:1.8}}>Northwood Space Team</div>
              <div style={{fontSize:13,color:"#333",fontFamily:FB,lineHeight:1.8}}>Torrance, CA</div>
              {Array.from({length:4}).map(function(_,i){
                return (<div key={i} style={{borderBottom:"1px solid #C8C2BA",height:24}}/>);
              })}
            </div>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",gap:0,padding:"5px 0",background:"#E8E2DA",borderTop:"1px solid #D4CFC4"}}>{stripes}</div>
      </div>
      <div style={{textAlign:"center",marginTop:16}}>
        <div style={{padding:"8px 20px",background:C.acB,border:"1px solid "+C.acD,borderRadius:20,color:C.tl,fontSize:13,fontWeight:600,display:"inline-block",cursor:"pointer",fontFamily:FT,animation:"mGlow 2s ease-in-out infinite"}} onClick={onClose}>Close</div>
      </div>
    </div>
  );
}

function MementoPage(){
  var flipState = useState(false);
  var flipped = flipState[0];
  var setFlipped = flipState[1];
  var confState = useState([]);
  var confetti = confState[0];
  var setConfetti = confState[1];
  var starsRef = useState(function(){var s=[];for(var i=0;i<80;i++){s.push({x:Math.random()*100,y:Math.random()*100,s:Math.random()*2+0.5,d:Math.random()*5+2});}return s;});
  var stars = starsRef[0];

  var doFlip = function(){
    if(!flipped){
      setFlipped(true);
      var cc=[];
      for(var i=0;i<40;i++){
        cc.push({id:i,x:Math.random()*100,clr:["#9AC5B9","#698886","#B8BFC8","#8FAAC8","#1E252E","#fff","#C8FF6B"][Math.floor(Math.random()*7)],sz:Math.random()*6+4,del:Math.random()*1.5,dur:Math.random()*2+2,rot:Math.random()*360,shape:Math.random()>0.5});
      }
      setConfetti(cc);
      setTimeout(function(){setConfetti([]);},5000);
    } else {
      setFlipped(false);
      setConfetti([]);
    }
  };

  return (
    <div style={{flex:1,overflow:"auto",display:"flex",flexDirection:"column",alignItems:"center",position:"relative",background:C.bg,padding:"40px 20px"}}>
      {stars.map(function(s,i){
        return (<div key={"bg"+i} style={{position:"absolute",left:s.x+"%",top:s.y+"%",width:s.s,height:s.s,borderRadius:"50%",background:"#fff",animation:"twinkle "+s.d+"s ease-in-out infinite",animationDelay:i*0.1+"s"}}/>);
      })}
      {confetti.length>0 && (
        <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:999}}>
          {confetti.map(function(c2){
            return (
              <div key={c2.id} style={{position:"absolute",left:c2.x+"%",top:-20,width:c2.sz,height:c2.sz,background:c2.clr,borderRadius:c2.shape?"50%":"2px",transform:"rotate("+c2.rot+"deg)",animation:"confetti "+c2.dur+"s ease-in "+c2.del+"s forwards"}}/>
            );
          })}
        </div>
      )}
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",zIndex:1,width:flipped?780:520,margin:"auto 0",transition:"width .8s cubic-bezier(.4,0,.2,1)"}}>
        <div style={{textAlign:"center",marginBottom:16}}>
          <div style={{padding:"8px 20px",background:C.acB,border:"1px solid "+C.acD,borderRadius:20,color:C.tl,fontSize:13,fontWeight:600,display:"inline-block",cursor:"pointer",fontFamily:FT,animation:"mGlow 2s ease-in-out infinite"}} onClick={doFlip}>{flipped?"Close":"Open me!"}</div>
        </div>
        <div style={{perspective:1200,width:"100%"}}>
          <div style={{transformStyle:"preserve-3d",animation:flipped?"none":"tilt 6s ease-in-out infinite"}}>
            <div onClick={doFlip} style={{width:"100%",cursor:"pointer"}}>
              <div style={{width:"100%",position:"relative",transformStyle:"preserve-3d",transition:"transform .8s cubic-bezier(.4,0,.2,1)",transform:flipped?"rotateY(180deg)":"rotateY(0)"}}>
                <PostcardFront/>
                <div style={{position:"absolute",top:0,left:0,width:"100%",backfaceVisibility:"hidden",transform:"rotateY(180deg)",borderRadius:12,background:"linear-gradient(135deg,#0F1419 0%,#1A2636 12%,#161C24 24%,#1E3040 36%,#1E252E 48%,#0F1419 55%,#162030 65%,#161C24 76%,#1A2636 85%,#0F1419 100%)",backgroundSize:"400% 400%",animation:"wave 14s ease-in-out infinite, pcGlow 4s ease-in-out infinite",boxShadow:"0 20px 60px rgba(0,0,0,0.5)",overflow:"hidden"}}>
                  <div style={{background:"rgba(255,255,255,0.95)",margin:12,borderRadius:10,overflow:"hidden",border:"1px solid "+C.bd}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"14px 20px",borderBottom:"1px solid "+C.bd}}>
                      <div style={{display:"flex",gap:6}}>
                        <a href="https://designsbytulcy.weebly.com" target="_blank" rel="noopener noreferrer" style={{padding:"5px 12px",borderRadius:4,background:C.s2,color:C.t1,fontSize:10,fontWeight:600,textDecoration:"none",fontFamily:FT}}>Portfolio</a>
                        <a href="https://drive.google.com/file/d/1dvnaJaTdTq2Esx_BNRYnpLAZjJgwRk79/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{padding:"5px 12px",borderRadius:4,background:C.s2,color:C.t1,fontSize:10,fontWeight:600,textDecoration:"none",fontFamily:FT}}>Resume</a>
                        <a href="https://www.linkedin.com/in/tulcypatel" target="_blank" rel="noopener noreferrer" style={{padding:"5px 12px",borderRadius:4,background:C.s2,color:C.t1,fontSize:10,fontWeight:600,textDecoration:"none",fontFamily:FT}}>LinkedIn</a>
                      </div>
                      <div style={{width:80,height:96,border:"2px solid "+C.tl,borderRadius:6,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:C.tlB,padding:4,position:"relative"}}>
                        <div style={{position:"absolute",top:2,left:2,right:2,height:6,background:C.tlD,borderRadius:"4px 4px 0 0"}}/>
                        <div style={{position:"absolute",bottom:2,left:2,right:2,height:6,background:C.tlD,borderRadius:"0 0 4px 4px"}}/>
                        <div style={{position:"absolute",top:2,left:2,bottom:2,width:6,background:C.tlD,borderRadius:"4px 0 0 4px"}}/>
                        <div style={{position:"absolute",top:2,right:2,bottom:2,width:6,background:C.tlD,borderRadius:"0 4px 4px 0"}}/>
                        <Logo size={32}/>
                        <div style={{fontSize:7,color:C.tl,marginTop:4,fontWeight:700,fontFamily:FT,textAlign:"center",lineHeight:1.1}}>NORTHSTAR</div>
                        <div style={{fontSize:6,color:C.t3,fontFamily:FT}}>2026</div>
                      </div>
                    </div>
                    <div style={{padding:"14px 20px",display:"flex",gap:16}}>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontFamily:FB,fontSize:12,lineHeight:1.7,color:"#3A3228"}}>
                          <p style={{marginBottom:6}}>Dear Northwood Space team,</p>
                          <p style={{marginBottom:6}}>I believe deeply in what you are building, and I want to be part of making it real. When I first learned about Northwood's mission to solve the ground segment bottleneck, something clicked for me. Here was a company tackling one of the most overlooked yet fundamental challenges in space infrastructure, doing it with the kind of ambition and craftsmanship that I find deeply inspiring.</p>
                          <p style={{marginBottom:6}}>My background sits at the intersection of computer science and design, and I have always been drawn to nascent spaces where the rules are still being written. I thrive in ambiguity because that is where curiosity becomes the most powerful design tool.</p>
                          <p style={{marginBottom:6}}>What excites me most about Northwood is your "novel in the aggregate" philosophy. You are remixing proven approaches from adjacent industries to create something categorically better. That resonates with how I think about design: pulling the best patterns and applying them with deep domain understanding.</p>
                          <p style={{marginBottom:6}}>I created NorthStar as a speculative exploration of what Northwood's operations experience could be. Not a finished product, but a conversation starter.</p>
                          <p style={{marginBottom:6}}>I would love the chance to bring my curiosity, my craft, and my passion for designing in complex domains to the Northwood team.</p>
                          <p style={{marginBottom:10}}>With genuine excitement,</p>
                          <p style={{fontSize:24,fontWeight:700,fontFamily:FB}}>Tulcy</p>
                        </div>
                      </div>
                      <div style={{width:1,background:"#C8C2BA",flexShrink:0}}/>
                      <div style={{width:160,flexShrink:0,paddingTop:8}}>
                        <div style={{fontSize:12,fontWeight:600,color:"#555",marginBottom:10,fontFamily:FT}}>To:</div>
                        <div style={{fontSize:12,color:"#333",fontFamily:FB,lineHeight:1.8,whiteSpace:"nowrap"}}>Northwood Space Team</div>
                        <div style={{fontSize:12,color:"#333",fontFamily:FB,lineHeight:1.8}}>Torrance, CA</div>
                        {Array.from({length:3}).map(function(_,i){
                          return (<div key={i} style={{borderBottom:"1px solid #C8C2BA",height:20}}/>);
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldNotesPage(){
  var tagState = useState("All");
  var tag = tagState[0];
  var setTag = tagState[1];
  var tags = ["All"].concat(BLOG.map(function(b){return b.tg;}).filter(function(v,i,a){return a.indexOf(v)===i;}));
  var fl = tag === "All" ? BLOG : BLOG.filter(function(b){return b.tg===tag;});
  return (
    <div style={{flex:1,overflow:"auto",padding:"28px 48px",maxWidth:860,margin:"0 auto"}}>
      <div className="fu" style={{marginBottom:24,textAlign:"center"}}>
        <h1 style={{fontSize:22,fontWeight:700,color:"#fff",fontFamily:FT,marginBottom:4}}>Field Notes</h1>
        <p style={{fontSize:12,color:C.t2,fontFamily:FB}}>Observations on the space infrastructure industry, design thinking, and the ground segment opportunity</p>
      </div>
      <div style={{display:"flex",gap:4,marginBottom:20,flexWrap:"wrap"}}>
        {tags.map(function(t){return (<Btn key={t} sm active={tag===t} onClick={function(){setTag(t);}}>{t}</Btn>);})}
      </div>
      {fl.map(function(entry,i){
        return (
          <Card key={i} anim style={{marginBottom:16}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
              <div>
                <div style={{fontSize:15,fontWeight:600,color:"#fff",fontFamily:FT,marginBottom:2}}>{entry.t}</div>
                <div style={{fontSize:11,color:C.t3,fontFamily:FB}}>{entry.d}</div>
              </div>
              <Badge type="neutral">{entry.tg}</Badge>
            </div>
            <p style={{fontSize:12,color:C.t2,lineHeight:1.7,marginBottom:entry.sec?10:0,fontFamily:FB}}>{entry.b}</p>
            {entry.sec && entry.sec.map(function(s,si){
              return (
                <div key={si} style={{marginTop:8,padding:"8px 12px",background:C.s2,borderRadius:6,border:"1px solid "+C.bd}}>
                  <div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:4,fontFamily:FT}}>{s.h}</div>
                  {s.items.map(function(it,ii){
                    return (<div key={ii} style={{fontSize:11,color:C.t2,padding:"2px 0",fontFamily:FB}}>+ {it}</div>);
                  })}
                </div>
              );
            })}
          </Card>
        );
      })}
    </div>
  );
}

function DocsPage({goD}){
  var catState = useState("All");
  var catF = catState[0];
  var setCatF = catState[1];
  var catMap = {cmd:"Command Center",msn:"Missions",net:"Network",sat:"Satellite Ops",int:"Intelligence",prv:"Provisioning",gov:"Governance"};
  var allCats = ["All"].concat(Object.values(catMap).filter(function(v,i,a){return a.indexOf(v)===i;}));
  return (
    <div style={{flex:1,overflow:"auto",padding:"28px 40px"}}>
      <div className="fu" style={{textAlign:"center",marginBottom:24}}>
        <h1 style={{fontSize:26,fontWeight:700,color:"#fff",fontFamily:FT}}>Screens Documentation</h1>
        <p style={{fontSize:12,color:C.t2,marginTop:3,fontFamily:FB}}>Complete screen-by-screen documentation across all operational domains</p>
      </div>
      <div style={{marginBottom:12}}>
        <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:4,fontFamily:FT}}>Category</div>
        <div style={{display:"flex",gap:3,flexWrap:"wrap"}}>
          {allCats.map(function(c){return (<Btn key={c} sm active={catF===c} onClick={function(){setCatF(c);}}>{c}</Btn>);})}
        </div>
      </div>
      {SECS.map(function(sec,si){
        var filtered = sec.s.filter(function(sk){
          var np=sk.split("-")[0], sp=sk.split("-")[1];
          var fullCatName = catMap[np] || np;
          if(catF!=="All" && fullCatName!==catF) return false;
          return true;
        });
        if(!filtered.length) return null;
        return (
          <div key={si} style={{marginBottom:36}}>
            <div className="fu" style={{fontSize:11,fontWeight:600,color:C.t3,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:4,paddingBottom:5,borderBottom:"1px solid "+C.bd,fontFamily:FT}}>{sec.t}</div>
            <p style={{fontSize:12,color:C.t2,marginBottom:14,maxWidth:700,fontFamily:FB}}>{SEC_DESC[sec.t]}</p>
            {filtered.map(function(sk){
              var CompX=SC[sk]; var np=sk.split("-")[0], sp=sk.split("-")[1];
              var fl = (NAV.find(function(n){return n.id===np;})||{}).la+" - "+(SL[sp]||sp);
              return (
                <div key={sk} className="fu" style={{marginBottom:24,background:C.s1,border:"1px solid "+C.bd,borderRadius:10,overflow:"hidden"}}>
                  <div style={{padding:"7px 16px",background:C.s2,borderBottom:"1px solid "+C.bd,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:12,fontWeight:600,color:C.tl,fontFamily:FT}}>{fl}</span>
                    <div style={{display:"flex",gap:3}}>
                      <Badge type="neutral">{np.toUpperCase()}</Badge>
                      <Badge type="info">{sp}</Badge>
                    </div>
                  </div>
                  <div style={{padding:"8px 16px",borderBottom:"1px solid "+C.bd,background:C.bg}}>
                    <p style={{fontSize:12,color:C.tl,margin:0,borderLeft:"2px solid "+C.tlD,paddingLeft:10,fontFamily:FB}}>{SD[sp]||""}</p>
                  </div>
                  <div style={{minHeight:280}}><CompX nav={function(){}} goD={goD}/></div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function ProcessPage(){
  var expState = useState(null);
  var exp = expState[0];
  var setExp = expState[1];
  var iaState = useState(null);
  var iaD = iaState[0];
  var setIaD = iaState[1];
  var ujState = useState(null);
  var ujS = ujState[0];
  var setUjS = ujState[1];
  var uj2State = useState(null);
  var uj2S = uj2State[0];
  var setUj2S = uj2State[1];
  var uj3State = useState(null);
  var uj3S = uj3State[0];
  var setUj3S = uj3State[1];

  var toggle = function(id){setExp(exp===id?null:id);};

  var steps = [
    {id:"plan",num:"01",title:"Planning (20% - Designer Led)",sub:"Deep research, problem framing, requirements",tasks:["Analyzed 7 CEO interview transcripts for Northwood vision","Studied satellite operations via Quindar and NASA resources","Mapped competitive landscape of ground management tools","Defined user personas: NOC operator, RF engineer, satellite operator, SCN liaison","Wrote problem statement and product vision","Identified critical scenarios driving interface priorities"],ai:{tools:"Perplexity",prompt:"Research Northwood Space, ground infrastructure bottlenecks, phased-array technology, and SCN modernization.",output:"40-page research document. Key insight: ground is the critical third pillar."}},
    {id:"define",num:"02",title:"Define & Principles (20%)",sub:"Design principles, anti-patterns, information architecture",tasks:["Defined 4 core design principles","Established ops-grade UX requirements","Created anti-slop visual rules","Mapped 7 sections with 21 sub-screens","Designed information hierarchy"],ai:{tools:"Claude Code",prompt:"Generate design principles for a mission-critical ground ops console.",output:"Make the invisible visible. Design for decision confidence. AI-augmented, not obscured."}},
    {id:"explore",num:"03",title:"Design Exploration (60% - AI Accelerated)",sub:"Layout exploration, wireframing, component design",tasks:["Sketched layouts in Paper Design","AI-generated component state matrices","Explored map visualization approaches","Iterated on table density for NOC readability","Built initial design tokens from reference sites"],ai:{tools:"Claude Code, Cursor, Figma",prompt:"Analyze this layout for cognitive load. Suggest improvements for failure-mode visibility.",output:"KPI top, live map center, incidents below, Copilot panel right."}},
    {id:"system",num:"04",title:"Design System (60%)",sub:"Visual tokens, component library, theming",tasks:["Extracted Northwood brand colors from website","Defined semantic color mapping","Built component library","Established typography: Geist Mono headers, Pixelify Sans body","AI-assisted parity checks"],ai:{tools:"Claude Code, Figma MCP",prompt:"Extract design system from Northwood Space website. Map to dark-mode ops console.",output:"Design system markdown with tokens, typography, spacing, component specs."}},
    {id:"build",num:"05",title:"Build & Implementation (60%)",sub:"Interactive prototype with AI scaffolding",tasks:["Built 21-screen interactive prototype via Cursor","AI scaffolded structures, then refined layouts","Full-page detail views for every element","Live animated map with satellite tracking","Simulation engine with progress indicators","AI handled data modeling and state patterns"],ai:{tools:"Cursor, Claude Code",prompt:"Build React prototype with 21 screens. Every element navigates to a detail page.",output:"React app with 21 screens, detail views, animations, complete navigation."}},
    {id:"polish",num:"06",title:"Refine & Polish (20% - Designer Led)",sub:"Final UX decisions, QA, portfolio presentation",tasks:["Reviewed all screens for consistency","Made final navigation and density decisions","Refined Northwood brand alignment","Added motion design and micro-interactions","Built Memento page","Cross-screen QA and validation"],ai:{tools:"Claude Code",prompt:"QA: verify all buttons, navigation, theming consistency.",output:"All screens verified, detail pages functional, consistent palette."}}
  ];

  var ujSteps = [
    {id:"detect",title:"Anomaly Detected",role:"System / AI",desc:"NorthStar detects an anomaly through automated monitoring. AI classifies type and assigns confidence. Incident appears in Command Center."},
    {id:"assess",title:"Operator Assessment",role:"NOC Operator",desc:"Operator sees alert with severity. Clicks into incident for cross-layer timeline, affected assets, and AI root cause analysis."},
    {id:"decide",title:"Decision Point",role:"NOC Operator",desc:"Evaluates Copilot recommendation. Can Accept (Apply), Test (Simulate), Investigate deeper, or Correlate with related issues."},
    {id:"act",title:"Action Execution",role:"Operator / System",desc:"System executes action with real-time timeline. Simulation shows predicted outcomes before committing. All logged in Audit Trail."},
    {id:"verify",title:"Verification",role:"System / Operator",desc:"Post-action monitoring of affected assets. KPIs update real-time. Operator verifies SLA targets met."}
  ];

  var ujSteps2 = [
    {id:"req",title:"Mission Request",role:"Customer / Admin",desc:"A new customer submits a mission onboarding request specifying satellite type, orbit, data volume requirements, SLA tier, and preferred ground sites."},
    {id:"eval",title:"Capacity Evaluation",role:"NOC Planner",desc:"The planner reviews network capacity across candidate sites, checking beam availability, spectrum licensing status, and scheduling conflicts with existing missions."},
    {id:"alloc",title:"Resource Allocation",role:"System / Planner",desc:"Copilot suggests optimal site-beam-spectrum assignments. Planner reviews, adjusts for policy constraints (ITAR, allied-only), and commits the allocation plan."},
    {id:"test",title:"Integration Testing",role:"RF Engineer",desc:"RF engineer runs a simulation pass to validate link budgets, Doppler compensation, and handoff timing between sites. Results feed back into the allocation."},
    {id:"live",title:"Go Live",role:"NOC Operator",desc:"Mission transitions to active status. First contact window executes. Telemetry confirms nominal link margins. Mission dashboard populates with real-time data."}
  ];

  var ujSteps3 = [
    {id:"degrade",title:"Site Degradation",role:"System",desc:"Environmental monitoring detects a storm approaching Darwin. Wind speeds exceed operational thresholds. System flags the site as degraded and alerts the NOC."},
    {id:"impact",title:"Impact Assessment",role:"NOC Operator",desc:"Operator reviews which missions and satellites depend on Darwin. Copilot calculates the blast radius: 3 missions affected, 2 active passes at risk."},
    {id:"failover",title:"Failover Planning",role:"Copilot / Operator",desc:"Copilot recommends rerouting each affected pass to alternate sites based on geometry, beam availability, and SLA priority. Operator reviews each recommendation."},
    {id:"execute",title:"Reroute Execution",role:"Operator / System",desc:"Operator approves the failover plan. Commands are queued for the next contact windows. Affected customers receive automated SLA notifications."},
    {id:"restore",title:"Site Restoration",role:"System / Operator",desc:"Storm passes. Environmental sensors return to nominal. Operator schedules recalibration. Site transitions from degraded back to online with full capacity."}
  ];

  return (
    <div style={{flex:1,overflow:"auto",padding:"28px 48px",maxWidth:1000,margin:"0 auto"}}>
      <div className="fu" style={{textAlign:"center",marginBottom:32}}>
        <h1 style={{fontSize:26,fontWeight:700,color:"#fff",fontFamily:FT}}>Design Process</h1>
        <p style={{fontSize:12,color:C.t2,marginTop:3,fontFamily:FB}}>AI-native design following a 20/60/20 approach</p>
      </div>
      <Card anim style={{marginBottom:20,borderColor:C.tlD}}>
        <div style={{fontSize:12,color:C.ac,fontWeight:600,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:FT}}>The 20/60/20 AI Approach</div>
        <p style={{fontSize:12,color:C.t2,lineHeight:1.6,marginBottom:12,fontFamily:FB}}>20% human-led planning and research. 60% AI-accelerated design exploration and implementation. 20% human-led refinement and final UX decisions.</p>
        <div style={{display:"flex",gap:4}}>
          {[["20%","Planning",C.ac],["60%","AI-Accelerated",C.tl],["20%","Polish",C.ac]].map(function(arr){
            return (<div key={arr[1]} style={{flex:arr[1]==="AI-Accelerated"?3:1,textAlign:"center"}}><div style={{height:6,background:arr[2],borderRadius:3,marginBottom:4,opacity:0.8}}/><div style={{fontSize:10,color:arr[2],fontWeight:600,fontFamily:FT}}>{arr[0]} {arr[1]}</div></div>);
          })}
        </div>
      </Card>
      <Card anim style={{marginBottom:20}}>
        <div style={{fontSize:12,color:C.ac,fontWeight:600,marginBottom:12,textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:FT}}>Tech Stack</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
          {[["Research","Perplexity","Industry research, competitive analysis, technical synthesis"],["Planning","Claude Code, Cursor, Paper Design, Figma","PRD generation, IA proposals, wireframing, layout"],["Implementation","Cursor, Claude Code, React","Scaffolding, state management, data modeling"],["Feedback","InFlight","Async critique, feedback synthesis, prioritization"],["Design System","Claude Code, Figma MCP","Token extraction, palette mapping, component library"],["QA","Claude Code, Local Dev","Testing, animation validation, syntax verification"]].map(function(arr,i){
            return (
              <Card key={arr[0]} anim style={{padding:12}}>
                <div style={{fontSize:12,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>{arr[0]}</div>
                <div style={{fontSize:11,fontWeight:500,color:"#fff",marginBottom:4,fontFamily:FT}}>{arr[1]}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{arr[2]}</p>
              </Card>
            );
          })}
        </div>
      </Card>
      <Card anim style={{marginBottom:20}}>
        <div style={{fontSize:12,color:C.ac,fontWeight:600,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:FT}}>Information Architecture</div>
        <p style={{fontSize:12,color:C.t2,marginBottom:12,fontFamily:FB}}>Click any section to explore its screens.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:iaD?12:0}}>
          {NAV.map(function(n){
            return (
              <div key={n.id} style={{cursor:"pointer"}} onClick={function(){setIaD(iaD===n.id?null:n.id);}}>
                <div style={{padding:"8px 4px",background:iaD===n.id?C.tlB:C.s2,border:"1px solid "+(iaD===n.id?C.tlD:C.bd),borderRadius:6,textAlign:"center",transition:"all 0.2s"}}>
                  <div style={{fontSize:14,marginBottom:2}}>{n.ic}</div>
                  <div style={{fontSize:10,fontWeight:600,color:iaD===n.id?C.tl:C.t1,fontFamily:FT}}>{n.la}</div>
                  <div style={{fontSize:10,color:C.t3,marginTop:1,fontFamily:FB}}>{n.su.length} screens</div>
                </div>
              </div>
            );
          })}
        </div>
        {iaD && (
          <div className="fi" style={{padding:14,background:C.s2,border:"1px solid "+C.tlD,borderRadius:8}}>
            <div style={{fontSize:13,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>{(NAV.find(function(n){return n.id===iaD;})||{}).la}</div>
            <p style={{fontSize:12,color:C.t2,marginBottom:10,fontFamily:FB}}>{SD[(NAV.find(function(n){return n.id===iaD;})||{}).su[0]]||""}</p>
            {(NAV.find(function(n){return n.id===iaD;})||{}).su.map(function(s){
              return (
                <div key={s} style={{padding:"10px 12px",background:C.s1,borderRadius:6,border:"1px solid "+C.bd,marginBottom:6}}>
                  <div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:3,fontFamily:FT}}>{SL[s]||s}</div>
                  <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{SD[s]||""}</p>
                </div>
              );
            })}
          </div>
        )}
      </Card>
      <Card anim style={{marginBottom:20}}>
        <div style={{fontSize:12,color:C.ac,fontWeight:600,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:FT}}>User Journey - Incident Response</div>
        <p style={{fontSize:12,color:C.t2,marginBottom:12,fontFamily:FB}}>Click each step to explore the operator experience.</p>
        <div style={{display:"flex",gap:4,marginBottom:12}}>
          {ujSteps.map(function(s,i){
            return (
              <div key={s.id} style={{flex:1,cursor:"pointer"}} onClick={function(){setUjS(ujS===s.id?null:s.id);}}>
                <div style={{padding:"10px 6px",background:ujS===s.id?C.tlB:C.s2,border:"1px solid "+(ujS===s.id?C.tlD:C.bd),borderRadius:6,textAlign:"center",transition:"all 0.2s"}}>
                  <div style={{fontSize:18,fontWeight:700,color:ujS===s.id?C.tl:C.t3,marginBottom:2,fontFamily:FT}}>{i+1}</div>
                  <div style={{fontSize:10,fontWeight:600,color:ujS===s.id?C.tl:C.t1,fontFamily:FT}}>{s.title}</div>
                  <div style={{fontSize:10,color:C.t3,marginTop:1,fontFamily:FB}}>{s.role}</div>
                </div>
              </div>
            );
          })}
        </div>
        {ujS && (
          <div className="fi" style={{padding:14,background:C.s1,border:"1px solid "+C.tlD,borderRadius:8}}>
            <div style={{fontSize:13,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>{ujSteps.find(function(s){return s.id===ujS;}).title}</div>
            <div style={{fontSize:11,color:C.t3,marginBottom:6,fontFamily:FB}}>{ujSteps.find(function(s){return s.id===ujS;}).role}</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,margin:0,fontFamily:FB}}>{ujSteps.find(function(s){return s.id===ujS;}).desc}</p>
          </div>
        )}
      </Card>
      <Card anim style={{marginBottom:20}}>
        <div style={{fontSize:12,color:C.ac,fontWeight:600,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:FT}}>User Journey - Mission Onboarding</div>
        <p style={{fontSize:12,color:C.t2,marginBottom:12,fontFamily:FB}}>Click each step to explore how a new mission gets onboarded to the network.</p>
        <div style={{display:"flex",gap:4,marginBottom:12}}>
          {ujSteps2.map(function(s,i){
            return (
              <div key={s.id} style={{flex:1,cursor:"pointer"}} onClick={function(){setUj2S(uj2S===s.id?null:s.id);}}>
                <div style={{padding:"10px 6px",background:uj2S===s.id?C.tlB:C.s2,border:"1px solid "+(uj2S===s.id?C.tlD:C.bd),borderRadius:6,textAlign:"center",transition:"all 0.2s"}}>
                  <div style={{fontSize:18,fontWeight:700,color:uj2S===s.id?C.tl:C.t3,marginBottom:2,fontFamily:FT}}>{i+1}</div>
                  <div style={{fontSize:10,fontWeight:600,color:uj2S===s.id?C.tl:C.t1,fontFamily:FT}}>{s.title}</div>
                  <div style={{fontSize:10,color:C.t3,marginTop:1,fontFamily:FB}}>{s.role}</div>
                </div>
              </div>
            );
          })}
        </div>
        {uj2S && (
          <div className="fi" style={{padding:14,background:C.s1,border:"1px solid "+C.tlD,borderRadius:8}}>
            <div style={{fontSize:13,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>{ujSteps2.find(function(s){return s.id===uj2S;}).title}</div>
            <div style={{fontSize:11,color:C.t3,marginBottom:6,fontFamily:FB}}>{ujSteps2.find(function(s){return s.id===uj2S;}).role}</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,margin:0,fontFamily:FB}}>{ujSteps2.find(function(s){return s.id===uj2S;}).desc}</p>
          </div>
        )}
      </Card>
      <Card anim style={{marginBottom:20}}>
        <div style={{fontSize:12,color:C.ac,fontWeight:600,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:FT}}>User Journey - Site Failover</div>
        <p style={{fontSize:12,color:C.t2,marginBottom:12,fontFamily:FB}}>Click each step to explore how operators handle a ground station going offline.</p>
        <div style={{display:"flex",gap:4,marginBottom:12}}>
          {ujSteps3.map(function(s,i){
            return (
              <div key={s.id} style={{flex:1,cursor:"pointer"}} onClick={function(){setUj3S(uj3S===s.id?null:s.id);}}>
                <div style={{padding:"10px 6px",background:uj3S===s.id?C.tlB:C.s2,border:"1px solid "+(uj3S===s.id?C.tlD:C.bd),borderRadius:6,textAlign:"center",transition:"all 0.2s"}}>
                  <div style={{fontSize:18,fontWeight:700,color:uj3S===s.id?C.tl:C.t3,marginBottom:2,fontFamily:FT}}>{i+1}</div>
                  <div style={{fontSize:10,fontWeight:600,color:uj3S===s.id?C.tl:C.t1,fontFamily:FT}}>{s.title}</div>
                  <div style={{fontSize:10,color:C.t3,marginTop:1,fontFamily:FB}}>{s.role}</div>
                </div>
              </div>
            );
          })}
        </div>
        {uj3S && (
          <div className="fi" style={{padding:14,background:C.s1,border:"1px solid "+C.tlD,borderRadius:8}}>
            <div style={{fontSize:13,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>{ujSteps3.find(function(s){return s.id===uj3S;}).title}</div>
            <div style={{fontSize:11,color:C.t3,marginBottom:6,fontFamily:FB}}>{ujSteps3.find(function(s){return s.id===uj3S;}).role}</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,margin:0,fontFamily:FB}}>{ujSteps3.find(function(s){return s.id===uj3S;}).desc}</p>
          </div>
        )}
      </Card>
      <div style={{fontSize:12,color:C.ac,fontWeight:600,marginBottom:16,textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:FT}}>Design Process</div>
      {steps.map(function(step,i){
        return (
          <Card key={step.id} anim style={{marginBottom:12,cursor:"pointer"}} onClick={function(){toggle(step.id);}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <span style={{fontSize:20,fontWeight:700,color:C.tl,opacity:0.5,fontFamily:FT}}>{step.num}</span>
                <div>
                  <div style={{fontSize:14,fontWeight:600,color:"#fff",fontFamily:FT}}>{step.title}</div>
                  <div style={{fontSize:11,color:C.t2,fontFamily:FB}}>{step.sub}</div>
                </div>
              </div>
              <span style={{fontSize:14,color:C.t3,transition:"transform 0.2s",transform:exp===step.id?"rotate(90deg)":"rotate(0)",fontFamily:FT}}>{"\u2192"}</span>
            </div>
            {exp===step.id && (
              <div className="fi" style={{marginTop:14,paddingTop:14,borderTop:"1px solid "+C.bd}} onClick={function(e){e.stopPropagation();}}>
                <div style={{fontSize:12,fontWeight:600,color:C.t1,marginBottom:8,fontFamily:FT}}>Tasks</div>
                {step.tasks.map(function(t,ti){
                  return (<div key={ti} style={{display:"flex",gap:6,padding:"3px 0",fontSize:12,color:C.t1,fontFamily:FB}}>+ {t}</div>);
                })}
                {step.ai && (
                  <Card style={{borderColor:C.tlD,padding:14,marginTop:12}}>
                    <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:8}}>
                      <span style={{fontSize:11,color:C.tl,fontWeight:600,fontFamily:FT}}>Powered by AI</span>
                      <span style={{fontSize:10,color:C.t3,fontFamily:FB}}>{step.ai.tools}</span>
                    </div>
                    <div style={{fontSize:11,color:C.t3,marginBottom:4,fontFamily:FT}}>Prompt:</div>
                    <div style={{fontSize:11,color:C.t1,fontFamily:MN,padding:"8px 10px",background:C.bg,borderRadius:6,marginBottom:8,lineHeight:1.5,border:"1px solid "+C.bd}}>{step.ai.prompt}</div>
                    <div style={{fontSize:11,color:C.t3,marginBottom:4,fontFamily:FT}}>Output:</div>
                    <div style={{fontSize:11,color:C.tl,lineHeight:1.5,padding:"8px 10px",background:C.bg,borderRadius:6,border:"1px solid "+C.bd,fontFamily:FB}}>{step.ai.output}</div>
                  </Card>
                )}
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}

// ─── Design System Page ───────────────────────────────────────────────
function DesignSystemPage(){
  var secState = useState("principles");
  var dsSec = secState[0];
  var setDsSec = secState[1];

  var DS_NAV = [
    {id:"principles",la:"Design Principles",ic:"\u25C6"},
    {id:"colors",la:"Color Palette",ic:"\u25CF"},
    {id:"typography",la:"Typography",ic:"\u0054"},
    {id:"spacing",la:"Spacing Scale",ic:"\u25A1"},
    {id:"components",la:"Components",ic:"\u25A3"},
    {id:"motion",la:"Motion & Animation",ic:"\u25B7"},
    {id:"patterns",la:"Patterns & Usage",ic:"\u25E7"},
    {id:"icons",la:"Icons & Indicators",ic:"\u2605"},
    {id:"layouts",la:"Layout System",ic:"\u25EB"}
  ];

  var SH = {fontSize:12,color:C.ac,fontWeight:600,marginBottom:10,textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:FT};

  return (
    <div style={{display:"flex",flex:1,overflow:"hidden"}}>
      {/* Sidebar */}
      <div style={{width:200,background:C.s1,borderRight:"1px solid "+C.bd,display:"flex",flexDirection:"column",flexShrink:0,overflow:"auto"}}>
        <div style={{padding:"14px 10px"}}>
          <div style={{fontSize:11,fontWeight:600,color:C.t3,textTransform:"uppercase",letterSpacing:"0.08em",padding:"0 8px",marginBottom:10,fontFamily:FT}}>Design System</div>
          {DS_NAV.map(function(item){
            var isA = dsSec===item.id;
            return (
              <button key={item.id} onClick={function(){setDsSec(item.id);}} style={{width:"100%",padding:"7px 10px",borderRadius:6,border:"none",background:isA?C.tlB:"transparent",color:isA?C.tl:C.t2,cursor:"pointer",display:"flex",alignItems:"center",gap:8,marginBottom:2,fontFamily:FT,fontSize:11,fontWeight:isA?600:400,textAlign:"left",transition:"all 0.15s"}}
                onMouseEnter={function(e){if(!isA)e.currentTarget.style.background=C.s2;}}
                onMouseLeave={function(e){if(!isA)e.currentTarget.style.background="transparent";}}>
                <span style={{fontSize:12,opacity:0.6}}>{item.ic}</span>
                {item.la}
              </button>
            );
          })}
        </div>
      </div>
      {/* Content */}
      <div style={{flex:1,overflow:"auto",padding:"24px 32px"}}>
        {dsSec==="principles" && <DSPrinciples SH={SH}/>}
        {dsSec==="colors" && <DSColors SH={SH}/>}
        {dsSec==="typography" && <DSTypography SH={SH}/>}
        {dsSec==="spacing" && <DSSpacing SH={SH}/>}
        {dsSec==="components" && <DSComponents SH={SH}/>}
        {dsSec==="motion" && <DSMotion SH={SH}/>}
        {dsSec==="patterns" && <DSPatterns SH={SH}/>}
        {dsSec==="icons" && <DSIcons SH={SH}/>}
        {dsSec==="layouts" && <DSLayouts SH={SH}/>}
      </div>
    </div>
  );
}

// ─── DS: Design Principles ───
function DSPrinciples({SH}){
  return (
    <div className="fu" style={{maxWidth:900}}>
      <h1 style={{fontSize:22,fontWeight:700,color:"#fff",marginBottom:6,fontFamily:FT}}>Design Principles</h1>
      <p style={{fontSize:12,color:C.t2,marginBottom:24,fontFamily:FB,lineHeight:1.6}}>The foundational principles that guide every design decision in NorthStar.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:24}}>
        {[
          ["Calm Nominal, Sharp Anomaly","The interface stays quiet and ambient during normal operations, then becomes assertive and directive when something goes wrong. Information density adapts to urgency.",C.tl],
          ["Progressive Disclosure","Start with the overview, drill into detail on demand. Operators see what they need at each level without being overwhelmed by everything at once.",C.ac],
          ["Trust Through Transparency","AI recommendations always show their reasoning. Raw telemetry is visible alongside AI interpretation. The operator decides, the system explains.",C.vi],
          ["Resilience by Design","Failover pathways, beam alternatives, and spectrum options are visible before they're needed. The interface actively shows recovery paths.",C.am],
          ["Decision-Quality Context","Every screen answers: What's happening? Is it normal? What should I do? Information hierarchy is tuned for time-critical decision-making.",C.li],
          ["Dual-Use Coherence","Commercial and government operators share the same system with role-based progressive disclosure. Priority surfaces adapt without separate products.",C.rd]
        ].map(function(p,i){
          return (
            <Card key={i} anim style={{borderLeft:"3px solid "+p[2],padding:16}}>
              <div style={{fontSize:14,fontWeight:600,color:"#fff",marginBottom:6,fontFamily:FT}}>{p[0]}</div>
              <p style={{fontSize:12,color:C.t2,lineHeight:1.6,margin:0,fontFamily:FB}}>{p[1]}</p>
            </Card>
          );
        })}
      </div>
      <Card anim style={{marginBottom:20}}>
        <div style={SH}>Visual Design Philosophy</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
          {[
            ["Dark-First","Dark backgrounds reduce eye strain during extended monitoring sessions and make status colors pop with clarity."],
            ["Monospace Precision","GeistMono for data, IDs, and labels creates scannable columns. Pixelify Sans for descriptions adds warmth while remaining legible."],
            ["Minimal Chrome","Borders are subtle, surfaces are layered by opacity, and decoration is purposeful. Every pixel earns its place."]
          ].map(function(item,i){
            return (
              <div key={i} style={{padding:14,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <div style={{fontSize:12,fontWeight:600,color:C.tl,marginBottom:6,fontFamily:FT}}>{item[0]}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{item[1]}</p>
              </div>
            );
          })}
        </div>
      </Card>
      <Card anim>
        <div style={SH}>Information Hierarchy</div>
        <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:14,fontFamily:FB}}>NorthStar uses a consistent four-level information hierarchy across every screen.</p>
        <div style={{display:"flex",gap:10}}>
          {[
            ["L1: KPI","At-a-glance metrics for instant situational awareness","22px / 600wt / #fff"],
            ["L2: Map/Chart","Spatial and temporal context for pattern recognition","SVG / dynamic"],
            ["L3: Table","Detailed listings for scanning and selection","12px / FB / rows"],
            ["L4: Detail Panel","Deep-dive on demand with full context","Overlay / 18px title"]
          ].map(function(item,i){
            return (
              <div key={i} style={{flex:1,padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd,borderTop:"2px solid "+C.tl}}>
                <div style={{fontSize:11,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>{item[0]}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.4,margin:0,marginBottom:4,fontFamily:FB}}>{item[1]}</p>
                <Mono>{item[2]}</Mono>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

// ─── DS: Colors ───
function DSColors({SH}){
  var hoverState = useState(null);
  var hov = hoverState[0];
  var setHov = hoverState[1];

  function Swatch({name,hex,desc,sub}){
    var isH = hov===name;
    return (
      <div onMouseEnter={function(){setHov(name);}} onMouseLeave={function(){setHov(null);}}
        style={{background:C.s1,border:"1px solid "+(isH?C.acD:C.bd),borderRadius:10,overflow:"hidden",cursor:"pointer",transition:"all 0.2s",transform:isH?"translateY(-2px)":"translateY(0)"}}>
        <div style={{height:56,background:hex,position:"relative"}}>
          {isH && <div className="fi" style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.4)",fontSize:11,color:"#fff",fontFamily:MN,fontWeight:500}}>{hex}</div>}
        </div>
        <div style={{padding:"10px 12px"}}>
          <div style={{fontSize:12,fontWeight:600,color:"#fff",fontFamily:FT}}>{name}</div>
          <div style={{fontSize:10,color:C.t3,fontFamily:FB,marginTop:2}}>{desc}</div>
          {sub && <div style={{fontSize:10,color:C.t3,fontFamily:MN,marginTop:3}}>{sub}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className="fu" style={{maxWidth:900}}>
      <h1 style={{fontSize:22,fontWeight:700,color:"#fff",marginBottom:6,fontFamily:FT}}>Color Palette</h1>
      <p style={{fontSize:12,color:C.t2,marginBottom:24,fontFamily:FB,lineHeight:1.6}}>Hover over any swatch to reveal its hex value. Colors are organized by function.</p>

      <div style={SH}>Backgrounds & Surfaces</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10,marginBottom:24}}>
        <Swatch name="bg" hex={C.bg} desc="Primary background" sub="Base layer"/>
        <Swatch name="s1" hex={C.s1} desc="Card surface" sub="Cards, panels"/>
        <Swatch name="s2" hex={C.s2} desc="Elevated surface" sub="Headers, nested"/>
        <Swatch name="s3" hex={C.s3} desc="Highest surface" sub="Hover states"/>
        <Swatch name="s4" hex={C.s4} desc="Compact surface" sub="Nav bar"/>
      </div>

      <div style={SH}>Text Hierarchy</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:24}}>
        <Swatch name="t1" hex={C.t1} desc="Primary text" sub="Body, labels"/>
        <Swatch name="t2" hex={C.t2} desc="Secondary text" sub="Descriptions"/>
        <Swatch name="t3" hex={C.t3} desc="Tertiary text" sub="Captions, muted"/>
      </div>

      <div style={SH}>Semantic Colors</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10,marginBottom:24}}>
        <Swatch name="Teal" hex={C.tl} desc="Success / Nominal" sub="Primary action"/>
        <Swatch name="Lime" hex={C.li} desc="Highlight / Active" sub="Emphasis"/>
        <Swatch name="Amber" hex={C.am} desc="Warning / Degraded" sub="Caution state"/>
        <Swatch name="Red" hex={C.rd} desc="Critical / Error" sub="Alert state"/>
        <Swatch name="Violet" hex={C.vi} desc="Info / Accent" sub="Secondary info"/>
      </div>

      <div style={SH}>Color Application</div>
      <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:14,fontFamily:FB}}>Each semantic color has three variants for layered usage:</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10,marginBottom:24}}>
        {[
          ["Teal",C.tl,C.tlB,C.tlD],
          ["Lime",C.li,C.liB,C.liD],
          ["Amber",C.am,C.amB,C.amD],
          ["Red",C.rd,C.rdB,C.rdD],
          ["Violet",C.vi,C.viB,"rgba(107,138,230,0.2)"]
        ].map(function(c){
          return (
            <div key={c[0]} style={{background:C.s1,borderRadius:10,border:"1px solid "+C.bd,overflow:"hidden"}}>
              <div style={{padding:"8px 10px",fontSize:11,fontWeight:600,color:c[1],fontFamily:FT}}>{c[0]}</div>
              <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{padding:"10px 12px",background:c[1],display:"flex",justifyContent:"space-between"}}>
                  <span style={{fontSize:10,color:C.bg,fontFamily:MN,fontWeight:600}}>Foreground</span>
                </div>
                <div style={{padding:"10px 12px",background:c[2],borderTop:"1px solid "+C.bd}}>
                  <span style={{fontSize:10,color:c[1],fontFamily:MN}}>Background</span>
                </div>
                <div style={{padding:"10px 12px",background:"transparent",borderTop:"1px solid "+c[3]}}>
                  <span style={{fontSize:10,color:c[1],fontFamily:MN}}>Border</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Card anim>
        <div style={SH}>Usage Rules</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[
            ["Status Mapping","Teal = Nominal/Online, Amber = Warning/Degraded, Red = Critical/Error, Violet = Info/Commissioning, Neutral = Planned/Inactive"],
            ["Contrast","Primary text (#E8EAED) on dark backgrounds maintains WCAG AA. Use t2 for secondary, t3 only for muted captions."],
            ["Backgrounds","Never use semantic foreground colors as backgrounds directly. Use the B (background) variant at 4-8% opacity."],
            ["Borders","Default border is #262E38 (bd). Active/focus states use the D (dark) variant of the relevant semantic color."]
          ].map(function(r,i){
            return (
              <div key={i} style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <div style={{fontSize:11,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>{r[0]}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{r[1]}</p>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

// ─── DS: Typography ───
function DSTypography({SH}){
  return (
    <div className="fu" style={{maxWidth:900}}>
      <h1 style={{fontSize:22,fontWeight:700,color:"#fff",marginBottom:6,fontFamily:FT}}>Typography</h1>
      <p style={{fontSize:12,color:C.t2,marginBottom:24,fontFamily:FB,lineHeight:1.6}}>NorthStar uses two typefaces, each serving a distinct functional purpose.</p>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:24}}>
        <Card anim>
          <div style={{fontSize:11,fontWeight:600,color:C.tl,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:12,fontFamily:FT}}>Primary: GeistMono</div>
          <div style={{fontSize:28,fontWeight:700,color:"#fff",marginBottom:4,fontFamily:FT}}>Aa Bb Cc 123</div>
          <div style={{fontSize:14,fontWeight:400,color:C.t2,marginBottom:12,fontFamily:FT}}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
          <p style={{fontSize:11,color:C.t3,lineHeight:1.5,fontFamily:FB}}>Used for headers, labels, IDs, timestamps, navigation, buttons, and KPI values. Its monospace nature creates scannable columns and precise data alignment.</p>
          <div style={{marginTop:12,display:"flex",gap:4,flexWrap:"wrap"}}>
            <Badge type="info">Headers</Badge><Badge type="info">Labels</Badge><Badge type="info">KPIs</Badge><Badge type="info">Navigation</Badge><Badge type="info">Buttons</Badge>
          </div>
        </Card>
        <Card anim>
          <div style={{fontSize:11,fontWeight:600,color:C.tl,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:12,fontFamily:FT}}>Secondary: Pixelify Sans</div>
          <div style={{fontSize:28,fontWeight:700,color:"#fff",marginBottom:4,fontFamily:FB}}>Aa Bb Cc 123</div>
          <div style={{fontSize:14,fontWeight:400,color:C.t2,marginBottom:12,fontFamily:FB}}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
          <p style={{fontSize:11,color:C.t3,lineHeight:1.5,fontFamily:FB}}>Used for body text, descriptions, paragraphs, and longer-form content. Adds warmth and readability to descriptive text while maintaining character.</p>
          <div style={{marginTop:12,display:"flex",gap:4,flexWrap:"wrap"}}>
            <Badge type="neutral">Body text</Badge><Badge type="neutral">Descriptions</Badge><Badge type="neutral">Paragraphs</Badge>
          </div>
        </Card>
      </div>

      <div style={SH}>Type Scale</div>
      <Card anim style={{marginBottom:24,padding:0,overflow:"hidden"}}>
        {[
          [28,"Page title",700,FT,"#fff","Page-level headers on major screens"],
          [22,"Section title",700,FT,"#fff","KPI values, welcome title"],
          [20,"Screen title",600,FT,"#fff","Screen headers (Alerts, Gallery, Planner)"],
          [18,"Detail title",600,FT,"#fff","Detail panel headers"],
          [15,"Card title",600,FT,"#fff","Mission names, prominent card headers"],
          [14,"Section header",600,FT,"#fff","Card section titles, key info"],
          [13,"Body large",600,FT,C.t1,"Copilot title, nav label"],
          [12,"Body",400,FB,C.t1,"Standard body text, descriptions"],
          [11,"Caption",500,FT,C.t2,"Buttons, labels, small text"],
          [10,"Micro",600,FT,C.t3,"Table headers, uppercase labels"]
        ].map(function(t,i){
          return (
            <div key={i} style={{display:"flex",alignItems:"center",padding:"12px 16px",borderBottom:"1px solid "+C.bd,gap:16,transition:"background 0.12s"}}
              onMouseEnter={function(e){e.currentTarget.style.background=C.s2;}}
              onMouseLeave={function(e){e.currentTarget.style.background="transparent";}}>
              <div style={{width:50,fontSize:10,color:C.t3,fontFamily:MN,textAlign:"right"}}>{t[0]}px</div>
              <div style={{flex:1,fontSize:t[0],fontWeight:t[2],fontFamily:t[3],color:t[4],lineHeight:1.3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{t[1]}</div>
              <div style={{width:90,fontSize:10,color:C.t3,fontFamily:MN}}>{t[2]} wt</div>
              <div style={{width:180,fontSize:10,color:C.t3,fontFamily:FB}}>{t[5]}</div>
            </div>
          );
        })}
      </Card>

      <div style={SH}>Font Weights</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:24}}>
        {[
          [400,"Regular","Body text, default"],
          [500,"Medium","Buttons, secondary emphasis"],
          [600,"Semibold","Labels, section headers, card titles"],
          [700,"Bold","Page titles, KPI values, emphasis"]
        ].map(function(w,i){
          return (
            <Card key={i} anim>
              <div style={{fontSize:24,fontWeight:w[0],color:"#fff",marginBottom:8,fontFamily:FT}}>Ag</div>
              <div style={{fontSize:11,fontWeight:600,color:C.tl,fontFamily:FT}}>{w[0]} {w[1]}</div>
              <div style={{fontSize:10,color:C.t3,marginTop:3,fontFamily:FB}}>{w[2]}</div>
            </Card>
          );
        })}
      </div>

      <Card anim>
        <div style={SH}>Line Heights</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10}}>
          {[[1,"Tight","KPI values, numbers"],[1.3,"Compact","Headers"],[1.4,"Snug","Short descriptions"],[1.5,"Normal","Body text"],[1.6,"Relaxed","Paragraphs, long text"]].map(function(l,i){
            return (
              <div key={i} style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <div style={{fontSize:18,fontWeight:600,color:C.tl,fontFamily:FT,marginBottom:4}}>{l[0]}</div>
                <div style={{fontSize:11,fontWeight:500,color:"#fff",fontFamily:FT}}>{l[1]}</div>
                <div style={{fontSize:10,color:C.t3,marginTop:2,fontFamily:FB}}>{l[2]}</div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

// ─── DS: Spacing ───
function DSSpacing({SH}){
  return (
    <div className="fu" style={{maxWidth:900}}>
      <h1 style={{fontSize:22,fontWeight:700,color:"#fff",marginBottom:6,fontFamily:FT}}>Spacing Scale</h1>
      <p style={{fontSize:12,color:C.t2,marginBottom:24,fontFamily:FB,lineHeight:1.6}}>Spacing is applied consistently using a base-2/4 scale. Hover to see the measurement.</p>

      <div style={SH}>Gap Scale (Flex/Grid)</div>
      <Card anim style={{marginBottom:24}}>
        {[2,3,4,5,6,8,10,12,16,24].map(function(g,i){
          return (
            <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"8px 0",borderBottom:"1px solid "+C.bd}}>
              <div style={{width:50,fontSize:11,fontWeight:600,color:C.tl,fontFamily:MN,textAlign:"right"}}>{g}px</div>
              <div style={{display:"flex",gap:g}}>
                <div style={{width:20,height:20,background:C.tlB,border:"1px solid "+C.tlD,borderRadius:4}}/>
                <div style={{width:20,height:20,background:C.tlB,border:"1px solid "+C.tlD,borderRadius:4}}/>
                <div style={{width:20,height:20,background:C.tlB,border:"1px solid "+C.tlD,borderRadius:4}}/>
              </div>
              <div style={{fontSize:10,color:C.t3,fontFamily:FB}}>
                {g<=4?"Minimal":g<=6?"Small":g<=10?"Medium":g<=16?"Large":"Section"}
              </div>
            </div>
          );
        })}
      </Card>

      <div style={SH}>Padding Scale</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:24}}>
        {[
          ["2px 7px","Badge, tag"],
          ["4px 11px","Button (sm)"],
          ["4px 12px","Tab item"],
          ["6px 14px","Button (default)"],
          ["8px 12px","Table cell, input"],
          ["14px 16px","KPI card"],
          ["16px","Card (default)"],
          ["16px 20px","Detail panel"],
          ["36px 40px","Modal dialog"]
        ].map(function(p,i){
          return (
            <div key={i} style={{background:C.s1,borderRadius:10,border:"1px solid "+C.bd,overflow:"hidden"}}>
              <div style={{padding:p[0],background:C.tlB,border:"1px dashed "+C.tlD,margin:8,borderRadius:6}}>
                <div style={{background:C.s2,borderRadius:4,padding:6,fontSize:10,color:C.t3,fontFamily:MN,textAlign:"center"}}>{p[0]}</div>
              </div>
              <div style={{padding:"6px 10px",borderTop:"1px solid "+C.bd}}>
                <div style={{fontSize:10,color:C.t2,fontFamily:FB}}>{p[1]}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={SH}>Border Radius</div>
      <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:24}}>
        {[
          [4,"Minimal"],[6,"Small (btns)"],[8,"Medium"],[10,"Standard (cards)"],[12,"Large"],[16,"XL (modals)"],[18,"Pill (tabs)"],[20,"Badge"],["50%","Circle"]
        ].map(function(r,i){
          return (
            <div key={i} style={{textAlign:"center"}}>
              <div style={{width:52,height:52,background:C.tlB,border:"2px solid "+C.tl,borderRadius:r[0],margin:"0 auto 6px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:C.tl,fontFamily:MN}}>{typeof r[0]==="number"?r[0]+"px":r[0]}</div>
              <div style={{fontSize:10,color:C.t3,fontFamily:FB}}>{r[1]}</div>
            </div>
          );
        })}
      </div>

      <Card anim>
        <div style={SH}>Spacing Usage Rules</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[
            ["Component spacing","Use gap:8-10 between sibling components within a section. Use gap:16-24 between sections."],
            ["Card padding","Standard cards use 16px. Compact cards (copilot) use 12px. Detail panels use 16px 20px."],
            ["Margin bottom","6px after labels, 10-12px between card sections, 16-20px between major sections, 32px between page sections."],
            ["Table density","6px 12px for headers, 8px 12px for rows. Gap of 5px between columns."]
          ].map(function(r,i){
            return (
              <div key={i} style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <div style={{fontSize:11,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>{r[0]}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{r[1]}</p>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

// ─── DS: Components ───
function DSComponents({SH}){
  var subState = useState("badge");
  var sub = subState[0];
  var setSub = subState[1];
  var hState = useState({});
  var hov = hState[0];
  var setHov = hState[1];
  var loadState = useState(false);
  var loading = loadState[0];
  var setLoading = loadState[1];
  var progState = useState(0);
  var simProg = progState[0];
  var setSimProg = progState[1];
  var chipState = useState("All");
  var chipActive = chipState[0];
  var setChipActive = chipState[1];
  var tabState = useState("Tab 1");
  var tabActive = tabState[0];
  var setTabActive = tabState[1];
  var expState = useState(false);
  var expanded = expState[0];
  var setExpanded = expState[1];

  useEffect(function(){
    if(loading){
      var iv = setInterval(function(){
        setSimProg(function(p){
          if(p>=100){setLoading(false);return 0;}
          return p+3;
        });
      },80);
      return function(){clearInterval(iv);};
    }
  },[loading]);

  var COMP_NAV = [
    {id:"badge",la:"Badge"},{id:"button",la:"Button"},{id:"tabs",la:"Sliding Tabs"},{id:"kpi",la:"KPI Card"},
    {id:"card",la:"Card"},{id:"table",la:"Table"},{id:"chips",la:"Chips/Filters"},{id:"bar",la:"Progress Bar"},
    {id:"chart",la:"Mini Chart"},{id:"detail",la:"Detail Panel"},{id:"mono",la:"Mono Text"},
    {id:"form",la:"Form Input"},{id:"copilot",la:"Copilot Card"}
  ];

  return (
    <div className="fu" style={{maxWidth:960}}>
      <h1 style={{fontSize:22,fontWeight:700,color:"#fff",marginBottom:6,fontFamily:FT}}>Component Library</h1>
      <p style={{fontSize:12,color:C.t2,marginBottom:16,fontFamily:FB,lineHeight:1.6}}>Interactive component catalog. Click on a component to explore its variants and states.</p>

      <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:20}}>
        {COMP_NAV.map(function(c){
          return <Btn key={c.id} sm active={sub===c.id} onClick={function(){setSub(c.id);}}>{c.la}</Btn>;
        })}
      </div>

      {/* Badge */}
      {sub==="badge" && (
        <div className="fi">
          <Card anim style={{marginBottom:16}}>
            <div style={SH}>Badge</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:16,fontFamily:FB}}>Status and severity indicators with semantic color mapping. Used inline with text or as standalone labels.</p>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:8,fontFamily:FT}}>Variants</div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
                <Badge type="success">Success</Badge>
                <Badge type="warning">Warning</Badge>
                <Badge type="critical">Critical</Badge>
                <Badge type="info">Info</Badge>
                <Badge type="cyan">Cyan</Badge>
                <Badge type="neutral">Neutral</Badge>
              </div>
            </div>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:8,fontFamily:FT}}>In Context</div>
              <div style={{display:"flex",gap:12,alignItems:"center"}}>
                <div style={{display:"flex",gap:4}}><Badge type="success">Online</Badge><Badge type="cyan">8 sats</Badge></div>
                <div style={{display:"flex",gap:4}}><Badge type="critical">P0</Badge><span style={{fontSize:12,color:C.t1,fontFamily:FB}}>EagleWatch</span></div>
                <div style={{display:"flex",gap:4}}><Badge type="warning">Degraded</Badge><Badge type="neutral">APAC</Badge></div>
              </div>
            </div>
            <div style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
              <div style={{fontSize:10,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>USAGE RULES</div>
              <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>Use success for nominal/online states. Warning for degraded/caution. Critical for errors and P0 priority. Info/cyan for informational metadata. Neutral for inactive or classification labels.</p>
            </div>
          </Card>
        </div>
      )}

      {/* Button */}
      {sub==="button" && (
        <div className="fi">
          <Card anim style={{marginBottom:16}}>
            <div style={SH}>Button</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:16,fontFamily:FB}}>Primary and secondary buttons with small variants. Hover over each to see interactive states.</p>
            <div style={{marginBottom:20}}>
              <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:8,fontFamily:FT}}>Primary</div>
              <div style={{display:"flex",gap:8,alignItems:"center"}}>
                <Btn primary>Primary Action</Btn>
                <Btn primary sm>Small Primary</Btn>
              </div>
            </div>
            <div style={{marginBottom:20}}>
              <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:8,fontFamily:FT}}>Secondary (Default)</div>
              <div style={{display:"flex",gap:8,alignItems:"center"}}>
                <Btn>Secondary</Btn>
                <Btn sm>Small</Btn>
              </div>
            </div>
            <div style={{marginBottom:20}}>
              <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:8,fontFamily:FT}}>Active State (Selected)</div>
              <div style={{display:"flex",gap:8,alignItems:"center"}}>
                <Btn active>Active</Btn>
                <Btn sm active>Active Small</Btn>
                <Btn>Inactive</Btn>
              </div>
            </div>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:8,fontFamily:FT}}>Button Groups</div>
              <div style={{display:"flex",gap:4}}>
                <Btn sm primary>Apply</Btn>
                <Btn sm>Simulate</Btn>
                <Btn sm>Edit</Btn>
                <Btn sm>Cancel</Btn>
              </div>
            </div>
            <div style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
              <div style={{fontSize:10,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>USAGE RULES</div>
              <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>Use primary (teal fill) for the single most important action. Use secondary (border only) for all other actions. Use sm variant in dense contexts like table rows, copilot cards, and toolbars. Max one primary button per visual group.</p>
            </div>
          </Card>
        </div>
      )}

      {/* Sliding Tabs */}
      {sub==="tabs" && (
        <div className="fi">
          <Card anim style={{marginBottom:16}}>
            <div style={SH}>Sliding Tabs</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:16,fontFamily:FB}}>Segmented control for filtering or switching views. Active tab shows a teal border ring. Click tabs below to interact.</p>
            <div style={{marginBottom:20}}>
              <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:8,fontFamily:FT}}>Interactive Demo</div>
              <SlidingTabs items={["Tab 1","Tab 2","Tab 3","Tab 4"]} active={tabActive} onSelect={setTabActive}/>
              <div style={{marginTop:10,padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <span style={{fontSize:12,color:C.t1,fontFamily:FB}}>Selected: </span>
                <span style={{fontSize:12,color:C.tl,fontWeight:600,fontFamily:FT}}>{tabActive}</span>
              </div>
            </div>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:8,fontFamily:FT}}>In Context: Severity Filter</div>
              <SlidingTabs items={["All","Critical","Warning","Info"]} active="All" onSelect={function(){}}/>
            </div>
            <div style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
              <div style={{fontSize:10,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>USAGE RULES</div>
              <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>Use for mutually exclusive filter sets with 2-6 options. Wraps when options overflow. The pill background container provides visual grouping. Not for navigation between pages.</p>
            </div>
          </Card>
        </div>
      )}

      {/* KPI */}
      {sub==="kpi" && (
        <div className="fi">
          <Card anim style={{marginBottom:16}}>
            <div style={SH}>KPI Card</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:16,fontFamily:FB}}>Key Performance Indicator cards for at-a-glance metrics. Animated on entry with fade-up. Each has label, value, and optional subtitle.</p>
            <div style={{marginBottom:20}}>
              <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:8,fontFamily:FT}}>Standard KPIs</div>
              <div style={{display:"flex",gap:8}}>
                <KPI label="Satellites" value="7/8" sub="tracked"/>
                <KPI label="Sites" value="5/7" sub="1 degraded"/>
                <KPI label="Throughput" value="4.8 Gbps" sub="Peak 6.2"/>
                <KPI label="Incidents" value="6" sub="2 critical"/>
              </div>
            </div>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:8,fontFamily:FT}}>Without Subtitle</div>
              <div style={{display:"flex",gap:8}}>
                <KPI label="Status" value="Applied"/>
                <KPI label="Confidence" value="94%"/>
                <KPI label="Impact" value="Nominal"/>
              </div>
            </div>
            <div style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
              <div style={{fontSize:10,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>USAGE RULES</div>
              <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>Place KPI rows at the top of screens for instant situational awareness. Use 3-5 KPIs per row. Values should be concise (numbers, percentages, short words). Subtitles provide context without detail. Always use tabular-nums for numeric alignment.</p>
            </div>
          </Card>
        </div>
      )}

      {/* Card */}
      {sub==="card" && (
        <div className="fi">
          <Card anim style={{marginBottom:16}}>
            <div style={SH}>Card</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:16,fontFamily:FB}}>Primary container component. Cards can be static, clickable (with hover lift), or animated on entry. Hover over the interactive cards below.</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:16}}>
              <Card>
                <div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:4,fontFamily:FT}}>Static Card</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.4,margin:0,fontFamily:FB}}>Default card with no interaction. Used for display content.</p>
              </Card>
              <Card onClick={function(){}} anim>
                <div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:4,fontFamily:FT}}>Clickable Card</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.4,margin:0,fontFamily:FB}}>Hover to see border glow and lift effect.</p>
              </Card>
              <Card anim style={{borderColor:C.tlD}}>
                <div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:4,fontFamily:FT}}>Accent Border</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.4,margin:0,fontFamily:FB}}>Teal border for emphasis or active state.</p>
              </Card>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:16}}>
              <Card style={{borderColor:C.rdD}}>
                <div style={{fontSize:12,fontWeight:600,color:C.rd,marginBottom:4,fontFamily:FT}}>Critical Border</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.4,margin:0,fontFamily:FB}}>Red border for critical states.</p>
              </Card>
              <Card style={{borderColor:C.amD}}>
                <div style={{fontSize:12,fontWeight:600,color:C.am,marginBottom:4,fontFamily:FT}}>Warning Border</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.4,margin:0,fontFamily:FB}}>Amber border for warnings.</p>
              </Card>
              <Card style={{padding:0,overflow:"hidden"}}>
                <div style={{padding:"10px 14px",borderBottom:"1px solid "+C.bd}}>
                  <span style={{fontSize:12,fontWeight:600,color:"#fff",fontFamily:FT}}>Header Card</span>
                </div>
                <div style={{padding:14}}>
                  <p style={{fontSize:11,color:C.t2,lineHeight:1.4,margin:0,fontFamily:FB}}>Card with header section.</p>
                </div>
              </Card>
            </div>
            <div style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
              <div style={{fontSize:10,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>USAGE RULES</div>
              <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>Cards are the primary grouping container. Use border-color for semantic state (teal=success, amber=warning, red=critical). Clickable cards get hover lift and border glow. Use padding:0 with overflow:hidden for header-card patterns. Animate entry with the anim prop.</p>
            </div>
          </Card>
        </div>
      )}

      {/* Table */}
      {sub==="table" && (
        <div className="fi">
          <Card anim style={{marginBottom:16}}>
            <div style={SH}>Table (TH + TR)</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:16,fontFamily:FB}}>Grid-based table with header and interactive rows. Rows highlight on hover and support active (selected) state. Click rows to see active state.</p>
            <Card style={{padding:0,overflow:"hidden",marginBottom:16}}>
              <TH cols={[{l:"ID",w:"80px"},{l:"Name"},{l:"Status",w:"90px"},{l:"Region",w:"100px"},{l:"Health",w:"80px"}]}/>
              {[
                ["NS-001","Sentinel-7A","Nominal","CONUS-W","98%"],
                ["NS-003","Aegis-12","Degraded","GEO","72%"],
                ["NS-005","Pathfinder-9","Critical","LEO","41%"]
              ].map(function(r,i){
                return (
                  <TR key={i} cols={[{w:"80px"},{},{w:"90px"},{w:"100px"},{w:"80px"}]}
                    active={hov.tableRow===i} onClick={function(){setHov(Object.assign({},hov,{tableRow:hov.tableRow===i?null:i}));}}
                    vals={[
                      <Mono>{r[0]}</Mono>,
                      <span style={{fontWeight:500}}>{r[1]}</span>,
                      <Badge type={r[2]==="Nominal"?"success":r[2]==="Degraded"?"warning":"critical"}>{r[2]}</Badge>,
                      <span style={{color:C.t2}}>{r[3]}</span>,
                      <span>{r[4]}</span>
                    ]}/>
                );
              })}
            </Card>
            <div style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
              <div style={{fontSize:10,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>USAGE RULES</div>
              <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>Tables use CSS Grid for column alignment. TH defines column labels with uppercase styling. TR highlights on hover (s4 background) and shows acB background when active. Use Mono for IDs and timestamps. Use Badge for status columns. Column widths should be explicit for data-heavy columns.</p>
            </div>
          </Card>
        </div>
      )}

      {/* Chips */}
      {sub==="chips" && (
        <div className="fi">
          <Card anim style={{marginBottom:16}}>
            <div style={SH}>Chips / Filter Buttons</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:16,fontFamily:FB}}>Inline filter pills built from small buttons. Click to toggle active state.</p>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:8,fontFamily:FT}}>Interactive Demo</div>
              <Chips items={["All","Critical","Warning","Info","Nominal"]} active={chipActive} set={setChipActive}/>
              <div style={{marginTop:8,fontSize:11,color:C.t2,fontFamily:FB}}>Selected: <span style={{color:C.tl,fontWeight:600,fontFamily:FT}}>{chipActive}</span></div>
            </div>
            <div style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
              <div style={{fontSize:10,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>USAGE RULES</div>
              <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>Use chips for quick inline filtering (severity, type, category). Always include an "All" option. The active chip shows the acB background and acD border. Chips wrap on overflow. Prefer SlidingTabs for pill-contained filters, Chips for inline filter rows.</p>
            </div>
          </Card>
        </div>
      )}

      {/* Progress Bar */}
      {sub==="bar" && (
        <div className="fi">
          <Card anim style={{marginBottom:16}}>
            <div style={SH}>Progress Bar</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:16,fontFamily:FB}}>Horizontal progress indicator with animated fill and percentage label. Click the button to see it animate.</p>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:8,fontFamily:FT}}>Static Examples</div>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                <div><div style={{fontSize:10,color:C.t3,marginBottom:3,fontFamily:FT}}>25%</div><BarC pct={25}/></div>
                <div><div style={{fontSize:10,color:C.t3,marginBottom:3,fontFamily:FT}}>62%</div><BarC pct={62}/></div>
                <div><div style={{fontSize:10,color:C.t3,marginBottom:3,fontFamily:FT}}>100%</div><BarC pct={100}/></div>
                <div><div style={{fontSize:10,color:C.t3,marginBottom:3,fontFamily:FT}}>Warning (amber)</div><BarC pct={45} color={C.am}/></div>
                <div><div style={{fontSize:10,color:C.t3,marginBottom:3,fontFamily:FT}}>Critical (red)</div><BarC pct={18} color={C.rd}/></div>
              </div>
            </div>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:8,fontFamily:FT}}>Live Animation</div>
              <BarC pct={loading?simProg:0} color={simProg>=100?C.tl:C.ac}/>
              <div style={{marginTop:8}}>
                <Btn sm primary onClick={function(){setSimProg(0);setLoading(true);}}>
                  {loading?"Running...":"Start Simulation"}
                </Btn>
              </div>
            </div>
            <div style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
              <div style={{fontSize:10,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>USAGE RULES</div>
              <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>Use teal for standard progress, amber for warning thresholds, red for critical states. The bar transitions width over 0.6s for smooth animation. Always show the percentage label. Height is 3px for an unobtrusive presence.</p>
            </div>
          </Card>
        </div>
      )}

      {/* Mini Chart */}
      {sub==="chart" && (
        <div className="fi">
          <Card anim style={{marginBottom:16}}>
            <div style={SH}>Mini Chart (Sparkline)</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:16,fontFamily:FB}}>SVG-based sparkline chart for inline trend visualization. Supports threshold lines and custom colors.</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
              <Card>
                <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>Teal (Nominal)</div>
                <MC data={[14.2,13.8,14.5,13.1,14.8,14.0,13.5,14.2,15.1,14.6,13.9,14.3]} color={C.tl}/>
              </Card>
              <Card>
                <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>With Threshold</div>
                <MC data={[8.1,7.5,7.2,6.8,6.5,6.1,6.3,6.0,5.8,6.1,5.9,6.1]} color={C.am} thr={5}/>
              </Card>
              <Card>
                <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>Critical Trend</div>
                <MC data={[5.2,4.8,4.1,3.7,3.2,2.8,2.5,2.3,2.1,2.3,2.0,2.3]} color={C.rd} thr={5}/>
              </Card>
              <Card>
                <div style={{fontSize:11,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>Violet Accent</div>
                <MC data={[10.5,10.8,10.2,10.6,10.9,10.3,10.7,10.1,10.5,10.4,10.8,10.5]} color={C.vi}/>
              </Card>
            </div>
            <div style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
              <div style={{fontSize:10,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>USAGE RULES</div>
              <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>Use sparklines for telemetry trends in cards and detail panels. Default height is 55px. Threshold lines appear as dashed red lines. Color should match the semantic state of the data. Provide 8-12 data points for readable trends.</p>
            </div>
          </Card>
        </div>
      )}

      {/* Detail Panel */}
      {sub==="detail" && (
        <div className="fi">
          <Card anim style={{marginBottom:16}}>
            <div style={SH}>Detail Panel (DP)</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:16,fontFamily:FB}}>Full-screen overlay for deep-dive views. Contains a back button, title, and flexible content area. Click "Open Detail" to see the panel pattern rendered inline.</p>
            <div style={{marginBottom:16}}>
              <Btn sm primary onClick={function(){setExpanded(!expanded);}}>{expanded?"Close Detail":"Open Detail Preview"}</Btn>
            </div>
            {expanded && (
              <div className="fi" style={{border:"1px solid "+C.bd,borderRadius:10,overflow:"hidden",background:C.bg}}>
                <div style={{padding:"16px 20px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}>
                    <button onClick={function(){setExpanded(false);}} style={{background:C.acB,border:"1px solid "+C.acD,borderRadius:6,padding:"4px 12px",color:C.ac,fontSize:11,fontWeight:500,cursor:"pointer",fontFamily:FT}}>Back</button>
                    <h1 style={{fontSize:18,fontWeight:600,color:"#fff",fontFamily:FT}}>Detail: Sentinel-7A</h1>
                  </div>
                  <div style={{display:"flex",gap:8,marginBottom:12}}>
                    <KPI label="Health" value="98%" sub="Nominal"/>
                    <KPI label="Orbit" value="LEO" sub="550 km"/>
                    <KPI label="Link" value="14.2 dB" sub="Margin"/>
                  </div>
                  <Card style={{borderColor:C.tlD,padding:12}}>
                    <div style={{fontSize:11,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>Telemetry</div>
                    <MC data={[14.2,13.8,14.5,13.1,14.8,14.0,13.5,14.2,15.1,14.6,13.9,14.3]} color={C.tl}/>
                  </Card>
                </div>
              </div>
            )}
            <div style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd,marginTop:16}}>
              <div style={{fontSize:10,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>USAGE RULES</div>
              <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>Detail panels overlay the screen content. Always include a Back button and title. Use KPI row at top for key metrics. Content below can use any layout pattern (timeline, form, grid, charts). Panel fades in with the fi animation class.</p>
            </div>
          </Card>
        </div>
      )}

      {/* Mono */}
      {sub==="mono" && (
        <div className="fi">
          <Card anim style={{marginBottom:16}}>
            <div style={SH}>Mono Text</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:16,fontFamily:FB}}>Monospace-styled inline text for IDs, timestamps, and technical values.</p>
            <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:16}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <span style={{width:80,fontSize:10,color:C.t3,fontFamily:FT}}>Timestamp</span>
                <Mono>14:22:08</Mono>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <span style={{width:80,fontSize:10,color:C.t3,fontFamily:FT}}>ID</span>
                <Mono>NS-001</Mono>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <span style={{width:80,fontSize:10,color:C.t3,fontFamily:FT}}>Command</span>
                <Mono>GET_LINK_STATUS</Mono>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <span style={{width:80,fontSize:10,color:C.t3,fontFamily:FT}}>Data Rate</span>
                <Mono>150 Mbps</Mono>
              </div>
            </div>
            <div style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
              <div style={{fontSize:10,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>USAGE RULES</div>
              <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>Use Mono for machine-generated values: IDs, timestamps, commands, data rates, hex codes. Rendered at 11px in t2 color. Provides visual distinction from human-readable body text.</p>
            </div>
          </Card>
        </div>
      )}

      {/* Form Input */}
      {sub==="form" && (
        <div className="fi">
          <Card anim style={{marginBottom:16}}>
            <div style={SH}>Form Input</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:16,fontFamily:FB}}>Text inputs used in edit and configuration panels. Dark surface with subtle border.</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
              <div>
                <div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:3,fontFamily:FT}}>Filled</div>
                <div style={{padding:"8px 12px",borderRadius:6,border:"1px solid "+C.bd,background:C.s2,fontSize:12,color:"#fff",fontFamily:FB}}>Sentinel-7A</div>
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:3,fontFamily:FT}}>Placeholder</div>
                <div style={{padding:"8px 12px",borderRadius:6,border:"1px solid "+C.bd,background:C.s2,fontSize:12,color:C.t3,fontFamily:FB}}>Enter value...</div>
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:3,fontFamily:FT}}>Focus State</div>
                <div style={{padding:"8px 12px",borderRadius:6,border:"1px solid "+C.tlD,background:C.s2,fontSize:12,color:"#fff",fontFamily:FB,boxShadow:"0 0 0 2px rgba(154,197,185,0.1)"}}>Active editing</div>
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:600,color:C.t1,marginBottom:3,fontFamily:FT}}>With Label</div>
                <div style={{padding:"8px 12px",borderRadius:6,border:"1px solid "+C.bd,background:C.s2,fontSize:12,color:"#fff",fontFamily:FB}}>P1 - High</div>
              </div>
            </div>
            <div style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
              <div style={{fontSize:10,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>USAGE RULES</div>
              <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>Inputs use s2 background with bd border. Focus state shows teal border with subtle glow. Labels above inputs use 11px FT semibold. Place inputs in 2-column grids for edit/config panels. 14px margin between input groups.</p>
            </div>
          </Card>
        </div>
      )}

      {/* Copilot Card */}
      {sub==="copilot" && (
        <div className="fi">
          <Card anim style={{marginBottom:16}}>
            <div style={SH}>Copilot Card</div>
            <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:16,fontFamily:FB}}>AI recommendation card used in the Copilot sidebar. Contains severity badge, title, description, expandable reasoning, and action buttons.</p>
            <div style={{maxWidth:320,marginBottom:16}}>
              <Card anim style={{borderColor:C.rdD,padding:12,marginBottom:8}}>
                <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:5}}>
                  <Badge type="critical">Critical</Badge>
                  <span style={{fontSize:12,fontWeight:600,color:"#fff",fontFamily:FT}}>Reroute Pathfinder-9</span>
                </div>
                <p style={{fontSize:11,color:C.t1,lineHeight:1.5,marginBottom:6,fontFamily:FB}}>Darwin link margin critically low. Paumalu B-06 available with 14.1 dB margin.</p>
                <details>
                  <summary style={{fontSize:10,color:C.tl,cursor:"pointer",fontWeight:500,fontFamily:FT}}>Why this recommendation</summary>
                  <p style={{fontSize:11,color:C.t2,lineHeight:1.4,marginTop:3,paddingLeft:6,borderLeft:"2px solid "+C.tlD,fontFamily:FB}}>Margin 2.3 dB {"<"} 5 dB threshold. Scintillation forecast 3+ hours.</p>
                </details>
                <div style={{display:"flex",gap:3,marginTop:6}}>
                  <Btn sm primary>Apply</Btn>
                  <Btn sm>Simulate</Btn>
                </div>
              </Card>
              <Card anim style={{borderColor:C.acD,padding:12}}>
                <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:5}}>
                  <Badge type="info">Info</Badge>
                  <span style={{fontSize:12,fontWeight:600,color:"#fff",fontFamily:FT}}>Optimize Cape beams</span>
                </div>
                <p style={{fontSize:11,color:C.t1,lineHeight:1.5,marginBottom:6,fontFamily:FB}}>11/18 beams active. Rebalance frees 3 for ShieldNet.</p>
                <details>
                  <summary style={{fontSize:10,color:C.tl,cursor:"pointer",fontWeight:500,fontFamily:FT}}>Why this recommendation</summary>
                  <p style={{fontSize:11,color:C.t2,lineHeight:1.4,marginTop:3,paddingLeft:6,borderLeft:"2px solid "+C.tlD,fontFamily:FB}}>B-12,14,16 on completed passes. ShieldNet needs 2 at 15:00.</p>
                </details>
                <div style={{display:"flex",gap:3,marginTop:6}}>
                  <Btn sm primary>Apply</Btn>
                  <Btn sm>Simulate</Btn>
                </div>
              </Card>
            </div>
            <div style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
              <div style={{fontSize:10,fontWeight:600,color:C.t3,marginBottom:6,fontFamily:FT}}>USAGE RULES</div>
              <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>Copilot cards live in the 300px right sidebar. Border color matches severity (red=critical, amber=warning, default=info). The "Why this recommendation" uses a details/summary pattern for progressive disclosure. Always provide Apply and Simulate actions. The copilot indicator uses a gl (glow) animated dot.</p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

// ─── DS: Motion ───
function DSMotion({SH}){
  var playState = useState({});
  var plays = playState[0];
  var setPlays = playState[1];
  function toggle(k){setPlays(function(p){var n={};for(var x in p)n[x]=p[x];n[k]=!n[k];return n;});}

  return (
    <div className="fu" style={{maxWidth:900}}>
      <h1 style={{fontSize:22,fontWeight:700,color:"#fff",marginBottom:6,fontFamily:FT}}>Motion & Animation</h1>
      <p style={{fontSize:12,color:C.t2,marginBottom:24,fontFamily:FB,lineHeight:1.6}}>Purposeful animation that guides attention and communicates state. Click "Play" to trigger each animation.</p>

      <div style={SH}>Entrance Animations</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:24}}>
        {[
          ["fu","Fade Up","translateY(10px) to 0, opacity 0 to 1","0.4s ease-out","Cards, KPIs, sections"],
          ["fi","Fade In","opacity 0 to 1","0.3s ease-out","Detail panels, expanded content"],
          ["si","Slide In","translateX(-6px) to 0, opacity 0 to 1","0.3s ease-out","Timeline items, list entries"]
        ].map(function(a){
          return (
            <Card key={a[0]} style={{overflow:"hidden"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                <div style={{fontSize:12,fontWeight:600,color:"#fff",fontFamily:FT}}>{a[1]}</div>
                <Btn sm onClick={function(){toggle(a[0]);setTimeout(function(){toggle(a[0]);},600);}}>Play</Btn>
              </div>
              <div style={{height:48,display:"flex",alignItems:"center",justifyContent:"center",background:C.s2,borderRadius:6,marginBottom:8}}>
                {plays[a[0]] ? (
                  <div className={a[0]} style={{padding:"8px 16px",background:C.tlB,border:"1px solid "+C.tlD,borderRadius:6,fontSize:11,color:C.tl,fontFamily:FT}}>Animated Element</div>
                ) : (
                  <div style={{fontSize:10,color:C.t3,fontFamily:FB}}>Click Play</div>
                )}
              </div>
              <div style={{fontSize:10,color:C.t3,fontFamily:MN,marginBottom:2}}>{a[3]}</div>
              <div style={{fontSize:10,color:C.t2,fontFamily:FB}}>{a[4]}</div>
            </Card>
          );
        })}
      </div>

      <div style={SH}>Continuous Animations</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:24}}>
        <Card>
          <div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:8,fontFamily:FT}}>Glow (gl)</div>
          <div style={{display:"flex",justifyContent:"center",marginBottom:8}}>
            <div className="gl" style={{width:40,height:40,borderRadius:"50%",background:C.tl,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <div style={{width:12,height:12,borderRadius:"50%",background:"#fff"}}/>
            </div>
          </div>
          <div style={{fontSize:10,color:C.t3,fontFamily:MN}}>2s ease-in-out infinite</div>
          <div style={{fontSize:10,color:C.t2,fontFamily:FB,marginTop:2}}>Copilot indicator, active elements</div>
        </Card>
        <Card>
          <div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:8,fontFamily:FT}}>Bounce (bo)</div>
          <div style={{display:"flex",justifyContent:"center",marginBottom:8}}>
            <div className="bo" style={{padding:"6px 14px",background:C.tl,borderRadius:6,fontSize:11,color:C.bg,fontWeight:600,fontFamily:FT}}>CTA Button</div>
          </div>
          <div style={{fontSize:10,color:C.t3,fontFamily:MN}}>1s ease-in-out infinite</div>
          <div style={{fontSize:10,color:C.t2,fontFamily:FB,marginTop:2}}>Call-to-action emphasis</div>
        </Card>
        <Card>
          <div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:8,fontFamily:FT}}>Pulse (pu)</div>
          <div style={{display:"flex",justifyContent:"center",marginBottom:8}}>
            <div className="pu" style={{fontSize:12,color:C.tl,fontWeight:600,fontFamily:MN}}>LIVE</div>
          </div>
          <div style={{fontSize:10,color:C.t3,fontFamily:MN}}>2s ease-in-out infinite</div>
          <div style={{fontSize:10,color:C.t2,fontFamily:FB,marginTop:2}}>Live indicator, attention pulse</div>
        </Card>
      </div>

      <div style={SH}>Hover Transitions</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:24}}>
        <Card>
          <div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:8,fontFamily:FT}}>Card Hover</div>
          <p style={{fontSize:11,color:C.t2,marginBottom:10,fontFamily:FB}}>Cards lift 1px and border glows on hover. Try it:</p>
          <Card onClick={function(){}}>
            <div style={{fontSize:11,color:C.t1,fontFamily:FB,textAlign:"center"}}>Hover over me</div>
          </Card>
          <div style={{fontSize:10,color:C.t3,fontFamily:MN,marginTop:8}}>border-color 0.2s, transform 0.15s</div>
        </Card>
        <Card>
          <div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:8,fontFamily:FT}}>Button Hover</div>
          <p style={{fontSize:11,color:C.t2,marginBottom:10,fontFamily:FB}}>Buttons transition all properties smoothly. Try it:</p>
          <div style={{display:"flex",gap:6}}>
            <Btn primary>Primary</Btn>
            <Btn>Secondary</Btn>
          </div>
          <div style={{fontSize:10,color:C.t3,fontFamily:MN,marginTop:8}}>all 0.15s</div>
        </Card>
      </div>

      <div style={SH}>Staggered Entry</div>
      <Card anim style={{marginBottom:24}}>
        <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:12,fontFamily:FB}}>Timeline items and list entries use staggered animation delays for a cascading entrance effect.</p>
        <div style={{marginBottom:8}}>
          <Btn sm onClick={function(){toggle("stagger");setTimeout(function(){toggle("stagger");},2000);}}>Play Staggered Entry</Btn>
        </div>
        {plays.stagger && [0,1,2,3,4].map(function(i){
          return (
            <div key={i} className="si" style={{display:"flex",gap:10,padding:"6px 0",borderBottom:"1px solid "+C.bd,animationDelay:i*0.08+"s"}}>
              <Mono>14:22:0{i}</Mono>
              <div style={{width:6,height:6,borderRadius:"50%",background:C.tl,marginTop:5,flexShrink:0}}/>
              <span style={{fontSize:12,color:C.t1,fontFamily:FB}}>Timeline entry {i+1}</span>
            </div>
          );
        })}
      </Card>

      <Card anim>
        <div style={SH}>Special Effects</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
          <div style={{padding:14,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
            <div style={{fontSize:11,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>mGlow</div>
            <div style={{animation:"mGlow 2s ease-in-out infinite",padding:"10px 14px",borderRadius:8,background:C.s1,fontSize:11,color:C.tl,textAlign:"center",fontFamily:FT}}>Memento Tab</div>
            <div style={{fontSize:10,color:C.t3,marginTop:6,fontFamily:FB}}>Subtle box-shadow pulse for attention</div>
          </div>
          <div style={{padding:14,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
            <div style={{fontSize:11,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>vGlow</div>
            <div style={{animation:"vGlow 2s ease-in-out infinite",padding:"10px 14px",borderRadius:8,background:C.s1,fontSize:11,color:C.tl,textAlign:"center",fontFamily:FT}}>Featured Card</div>
            <div style={{fontSize:10,color:C.t3,marginTop:6,fontFamily:FB}}>Inset + outer glow for featured content</div>
          </div>
          <div style={{padding:14,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
            <div style={{fontSize:11,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>pcGlow</div>
            <div style={{animation:"pcGlow 4s ease-in-out infinite",padding:"10px 14px",borderRadius:8,background:C.s1,fontSize:11,color:C.tl,textAlign:"center",fontFamily:FT}}>Ambient Card</div>
            <div style={{fontSize:10,color:C.t3,marginTop:6,fontFamily:FB}}>Slow ambient glow for passive attention</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// ─── DS: Patterns & Usage ───
function DSPatterns({SH}){
  return (
    <div className="fu" style={{maxWidth:900}}>
      <h1 style={{fontSize:22,fontWeight:700,color:"#fff",marginBottom:6,fontFamily:FT}}>Patterns & Usage</h1>
      <p style={{fontSize:12,color:C.t2,marginBottom:24,fontFamily:FB,lineHeight:1.6}}>Recurring design patterns and their application contexts across NorthStar.</p>

      <div style={SH}>Screen Anatomy</div>
      <Card anim style={{marginBottom:20}}>
        <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:14,fontFamily:FB}}>Every operational screen follows a consistent top-to-bottom structure.</p>
        <div style={{display:"flex",flexDirection:"column",gap:6}}>
          {[
            ["1. Header Bar","Screen title + navigation buttons + action button","Top of screen",C.tl],
            ["2. KPI Row","3-5 metric cards for instant situational awareness","Below header",C.ac],
            ["3. Primary Content","Map, chart, table, or card grid as the main data display","Center",C.vi],
            ["4. Secondary Content","Supporting tables, lists, or smaller cards","Below primary",C.am],
            ["5. Detail Panel","Overlay panel triggered by row/card click","On interaction",C.li]
          ].map(function(s,i){
            return (
              <div key={i} style={{display:"flex",gap:12,padding:"10px 14px",background:C.s2,borderRadius:8,border:"1px solid "+C.bd,borderLeft:"3px solid "+s[3],alignItems:"center"}}>
                <div style={{width:140,fontSize:12,fontWeight:600,color:s[3],fontFamily:FT}}>{s[0]}</div>
                <div style={{flex:1,fontSize:11,color:C.t1,fontFamily:FB}}>{s[1]}</div>
                <div style={{fontSize:10,color:C.t3,fontFamily:MN}}>{s[2]}</div>
              </div>
            );
          })}
        </div>
      </Card>

      <div style={SH}>Detail Panel Layouts</div>
      <Card anim style={{marginBottom:20}}>
        <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:14,fontFamily:FB}}>Ten distinct detail panel layout patterns handle different information types.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[
            ["Apply (ApplyD)","Timeline + KPI sidebar. For action execution confirmation with step-by-step progress."],
            ["Simulate (SimD)","Progress bar + split panels. For simulation runs with live progress and results reveal."],
            ["Edit (EditD)","Two-column form. For property editing with grouped fields and save/cancel actions."],
            ["Investigate (InvD)","Cross-layer timeline + root cause. For anomaly investigation with AI analysis."],
            ["Correlate (CorD)","SVG graph visualization. For showing relationships between anomalies and systems."],
            ["Generic (GenD)","Flexible fields + charts + body. The fallback for any detail view."],
            ["New Mission (NewMsnD)","Wizard form. For creating new missions with structured input."],
            ["New Command (NewCmdD)","Command entry + safety panel. For sending satellite commands with safety checks."],
            ["Run Sim (RunSimD)","Live metrics. For running what-if simulations with real-time parameter display."],
            ["Configure (ConfigD)","Grouped settings. For system configuration with categorized toggles and values."]
          ].map(function(d,i){
            return (
              <div key={i} style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <div style={{fontSize:11,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>{d[0]}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{d[1]}</p>
              </div>
            );
          })}
        </div>
      </Card>

      <div style={SH}>Navigation Patterns</div>
      <Card anim style={{marginBottom:20}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
          {[
            ["Tour Bar","Top header with pill buttons for page-level navigation between Overview, Demo, Process, etc. Uses button group in s2 container."],
            ["Side Navigation","168px left panel with collapsible section groups. Active item shows teal background and font weight. Sub-items indent under parent."],
            ["Breadcrumb via Back","Detail panels use Back button rather than breadcrumbs. One level deep only. Back clears the detail overlay."]
          ].map(function(n,i){
            return (
              <div key={i} style={{padding:14,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <div style={{fontSize:12,fontWeight:600,color:C.tl,marginBottom:6,fontFamily:FT}}>{n[0]}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{n[1]}</p>
              </div>
            );
          })}
        </div>
      </Card>

      <div style={SH}>Interaction Patterns</div>
      <Card anim>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[
            ["Click to Drill","Clicking a table row, card, or map element opens a detail panel overlay with full context."],
            ["Filter to Narrow","Chips and SlidingTabs filter list content in place. Always include an All option for reset."],
            ["Hover to Preview","Cards lift and glow on hover. Table rows highlight. Map elements show labels."],
            ["Expand to Reveal","Details/summary pattern for progressive disclosure (Copilot reasoning, process AI notes)."],
            ["Simulate Before Apply","Two-step action pattern: Simulate first to preview impact, then Apply to execute."],
            ["Stagger to Guide","Timeline entries and list items animate in with sequential delays to guide reading order."]
          ].map(function(p,i){
            return (
              <div key={i} style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <div style={{fontSize:11,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>{p[0]}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{p[1]}</p>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

// ─── DS: Icons & Indicators ───
function DSIcons({SH}){
  return (
    <div className="fu" style={{maxWidth:900}}>
      <h1 style={{fontSize:22,fontWeight:700,color:"#fff",marginBottom:6,fontFamily:FT}}>Icons & Indicators</h1>
      <p style={{fontSize:12,color:C.t2,marginBottom:24,fontFamily:FB,lineHeight:1.6}}>NorthStar uses Unicode symbols and colored dots instead of icon libraries for maximum performance and consistency.</p>

      <div style={SH}>Navigation Icons</div>
      <Card anim style={{marginBottom:20}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:10}}>
          {NAV.map(function(n){
            return (
              <div key={n.id} style={{textAlign:"center",padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <div style={{fontSize:24,marginBottom:6}}>{n.ic}</div>
                <div style={{fontSize:10,fontWeight:600,color:C.tl,fontFamily:FT}}>{n.la}</div>
                <div style={{fontSize:10,color:C.t3,fontFamily:MN,marginTop:2}}>{n.ic}</div>
              </div>
            );
          })}
        </div>
      </Card>

      <div style={SH}>Status Indicators</div>
      <Card anim style={{marginBottom:20}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
          {[
            ["Online / Nominal",C.tl,"Filled circle, 5px on map"],
            ["Degraded / Warning",C.am,"Pulsing ring around dot"],
            ["Critical / Error",C.rd,"Alert state, high contrast"],
            ["Planned / Offline",C.t3,"Muted, low opacity"]
          ].map(function(s,i){
            return (
              <div key={i} style={{textAlign:"center",padding:14,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <div style={{display:"flex",justifyContent:"center",marginBottom:8}}>
                  <div style={{position:"relative"}}>
                    <div style={{width:14,height:14,borderRadius:"50%",background:s[1]}}/>
                    {i===1 && <div style={{position:"absolute",inset:-4,borderRadius:"50%",border:"1.5px solid "+s[1],opacity:0.3,animation:"pu 2s ease-in-out infinite"}}/>}
                  </div>
                </div>
                <div style={{fontSize:11,fontWeight:600,color:s[1],fontFamily:FT,marginBottom:2}}>{s[0]}</div>
                <div style={{fontSize:10,color:C.t3,fontFamily:FB}}>{s[2]}</div>
              </div>
            );
          })}
        </div>
      </Card>

      <div style={SH}>Copilot Indicator</div>
      <Card anim style={{marginBottom:20}}>
        <div style={{display:"flex",alignItems:"center",gap:16}}>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <div className="gl" style={{width:7,height:7,borderRadius:"50%",background:C.tl}}/>
            <span style={{fontSize:13,fontWeight:600,color:"#fff",fontFamily:FT}}>NorthStar Copilot</span>
          </div>
          <div className="pu" style={{fontSize:10,color:C.tl,fontFamily:MN,fontWeight:500}}>LIVE</div>
        </div>
        <p style={{fontSize:11,color:C.t2,lineHeight:1.5,marginTop:8,fontFamily:FB}}>The Copilot uses a continuously glowing (gl) 7px teal dot to indicate active AI monitoring. The LIVE text pulses (pu) to reinforce real-time state.</p>
      </Card>

      <div style={SH}>Map Markers</div>
      <Card anim>
        <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:14,fontFamily:FB}}>Ground stations and satellites use distinct visual treatments on the LiveMap.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <div style={{padding:14,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
            <div style={{fontSize:11,fontWeight:600,color:C.tl,marginBottom:8,fontFamily:FT}}>Ground Stations</div>
            <div style={{display:"flex",gap:16,alignItems:"center",marginBottom:6}}>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:10,height:10,borderRadius:"50%",background:C.tl}}/>
                <span style={{fontSize:10,color:C.t2,fontFamily:FB}}>Online</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:10,height:10,borderRadius:"50%",background:C.am}}/>
                <span style={{fontSize:10,color:C.t2,fontFamily:FB}}>Degraded</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:10,height:10,borderRadius:"50%",background:C.vi}}/>
                <span style={{fontSize:10,color:C.t2,fontFamily:FB}}>Commissioning</span>
              </div>
            </div>
            <p style={{fontSize:10,color:C.t3,fontFamily:FB}}>5px filled circles with pulsing ring for degraded. Name label above in t2.</p>
          </div>
          <div style={{padding:14,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
            <div style={{fontSize:11,fontWeight:600,color:C.tl,marginBottom:8,fontFamily:FT}}>Satellites</div>
            <div style={{display:"flex",gap:16,alignItems:"center",marginBottom:6}}>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:5,height:5,borderRadius:"50%",background:C.tl}}/>
                <span style={{fontSize:10,color:C.t2,fontFamily:FB}}>Nominal</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:5,height:5,borderRadius:"50%",background:C.am}}/>
                <span style={{fontSize:10,color:C.t2,fontFamily:FB}}>Degraded</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:5,height:5,borderRadius:"50%",background:C.rd}}/>
                <span style={{fontSize:10,color:C.t2,fontFamily:FB}}>Critical</span>
              </div>
            </div>
            <p style={{fontSize:10,color:C.t3,fontFamily:FB}}>2.5px dots with dashed link lines to ground stations. Name abbreviation in t3.</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

// ─── DS: Layout System ───
function DSLayouts({SH}){
  return (
    <div className="fu" style={{maxWidth:900}}>
      <h1 style={{fontSize:22,fontWeight:700,color:"#fff",marginBottom:6,fontFamily:FT}}>Layout System</h1>
      <p style={{fontSize:12,color:C.t2,marginBottom:24,fontFamily:FB,lineHeight:1.6}}>NorthStar uses CSS Flexbox and Grid for all layouts. No media queries; optimized for desktop 1200px+.</p>

      <div style={SH}>App Shell</div>
      <Card anim style={{marginBottom:20}}>
        <div style={{border:"2px solid "+C.tl,borderRadius:8,overflow:"hidden"}}>
          <div style={{height:28,background:C.s4,borderBottom:"1px solid "+C.bd,display:"flex",alignItems:"center",padding:"0 8px",gap:4}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:C.tl}}/>
            <span style={{fontSize:9,color:C.t2,fontFamily:FT}}>Header Bar (tour tabs)</span>
          </div>
          <div style={{display:"flex",height:140}}>
            <div style={{width:100,background:C.s1,borderRight:"1px solid "+C.bd,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{fontSize:9,color:C.t3,fontFamily:FT,transform:"rotate(-90deg)",whiteSpace:"nowrap"}}>Side Nav (168px)</span>
            </div>
            <div style={{flex:1,display:"flex"}}>
              <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",background:C.bg}}>
                <span style={{fontSize:9,color:C.t2,fontFamily:FT}}>Screen Content (flex: 1)</span>
              </div>
              <div style={{width:80,background:C.s1,borderLeft:"1px solid "+C.bd,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{fontSize:8,color:C.t3,fontFamily:FT,transform:"rotate(-90deg)",whiteSpace:"nowrap"}}>Copilot (300px)</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{display:"flex",gap:8,marginTop:10,fontSize:10,color:C.t3,fontFamily:FB}}>
          <span>Flex column (root) → Flex row (body) → Side nav + Content + Optional Copilot</span>
        </div>
      </Card>

      <div style={SH}>Grid Patterns</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:24}}>
        {[
          ["KPI Row","display: flex, gap: 8","Horizontal flex with equal items. Each KPI uses flex:1 minWidth:0."],
          ["Card Grid","gridTemplateColumns: repeat(auto-fill, minmax(320px, 1fr))","Responsive grid for mission cards and similar collections."],
          ["Two Column","gridTemplateColumns: 1fr 1fr","Used in overview page, edit panels, and documentation sections."],
          ["Split Panel","gridTemplateColumns: 2fr 1fr or 3fr 2fr","Main content + sidebar layout for detail views and investigation panels."]
        ].map(function(g,i){
          return (
            <Card key={i}>
              <div style={{fontSize:12,fontWeight:600,color:"#fff",marginBottom:4,fontFamily:FT}}>{g[0]}</div>
              <div style={{fontSize:10,color:C.tl,fontFamily:MN,marginBottom:6}}>{g[1]}</div>
              <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{g[2]}</p>
            </Card>
          );
        })}
      </div>

      <div style={SH}>Content Widths</div>
      <Card anim style={{marginBottom:20}}>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {[
            ["Side Navigation","168px","Fixed width, flex-shrink: 0"],
            ["Copilot Panel","300px","Fixed width, right side, flex-shrink: 0"],
            ["Pass Detail Sidebar","280px","Context panel for selected table row"],
            ["Overview Page","max-width: 1000px","Centered with auto margins, 40px 48px padding"],
            ["Screen Content","flex: 1","Fills remaining space, 16px 20px padding"],
            ["Modal Dialog","max-width: 420px","Centered overlay, 36px 40px padding"]
          ].map(function(w,i){
            return (
              <div key={i} style={{display:"flex",alignItems:"center",padding:"8px 12px",background:C.s2,borderRadius:6,border:"1px solid "+C.bd,gap:12}}>
                <div style={{width:160,fontSize:11,fontWeight:600,color:"#fff",fontFamily:FT}}>{w[0]}</div>
                <div style={{width:180,fontSize:11,color:C.tl,fontFamily:MN}}>{w[1]}</div>
                <div style={{flex:1,fontSize:11,color:C.t2,fontFamily:FB}}>{w[2]}</div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card anim>
        <div style={SH}>Overflow & Scrolling</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[
            ["App Shell","100vh height with overflow: hidden. Inner panels scroll independently."],
            ["Screen Content","overflow: auto on the content area. Side nav is fixed."],
            ["Tables","Card with padding:0 and overflow:hidden clips table corners. Table body scrolls with page."],
            ["Detail Panels","Full height with overflow: auto. Back button stays at top of scrollable area."]
          ].map(function(o,i){
            return (
              <div key={i} style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <div style={{fontSize:11,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>{o[0]}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{o[1]}</p>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

function DemoView({nId,sId,detail,nav,goD,back}){
  var sk = nId+"-"+sId;
  var Comp = SC[sk] || CmdOv;
  var DC = detail ? (DM[detail.type]||GenD) : null;
  return (
    <div style={{display:"flex",flex:1,overflow:"hidden"}}>
      <div style={{width:168,background:C.s1,borderRight:"1px solid "+C.bd,display:"flex",flexDirection:"column",flexShrink:0,overflow:"auto"}}>
        <div style={{padding:"10px 8px",flex:1}}>
          {NAV.map(function(item){
            return (
              <div key={item.id}>
                <button onClick={function(){nav(item.id,item.su[0]);}} style={{width:"100%",padding:"6px 8px",borderRadius:6,border:"none",background:nId===item.id?C.tlB:"transparent",color:nId===item.id?C.tl:C.t2,cursor:"pointer",display:"flex",alignItems:"center",gap:6,marginBottom:1,fontFamily:FT,fontSize:11,fontWeight:nId===item.id?600:400,textAlign:"left"}}
                  onMouseEnter={function(e){if(nId!==item.id)e.currentTarget.style.background=C.s2;}}
                  onMouseLeave={function(e){if(nId!==item.id)e.currentTarget.style.background="transparent";}}>
                  <span style={{fontSize:14,lineHeight:1,opacity:0.7}}>{item.ic}</span>{item.la}
                </button>
                {nId===item.id && (
                  <div style={{paddingLeft:28,marginBottom:4}}>
                    {item.su.map(function(sub){
                      return (
                        <button key={sub} onClick={function(){nav(item.id,sub);}} style={{width:"100%",padding:"3px 7px",borderRadius:4,border:"none",background:sId===sub?C.s3:"transparent",color:sId===sub?C.t1:C.t3,cursor:"pointer",fontFamily:FT,fontSize:10,fontWeight:sId===sub?500:400,textAlign:"left",marginBottom:1}}
                          onMouseEnter={function(e){if(sId!==sub)e.currentTarget.style.color=C.t1;}}
                          onMouseLeave={function(e){if(sId!==sub)e.currentTarget.style.color=C.t3;}}>
                          {SL[sub]}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div style={{padding:"8px 10px",borderTop:"1px solid "+C.bd}}>
          <div style={{display:"flex",gap:3}}><Badge type="success">PROD</Badge><Badge type="neutral">SIM</Badge></div>
        </div>
      </div>
      <div style={{flex:1,overflow:"auto",display:"flex",flexDirection:"column"}}>
        <div style={{padding:"6px 20px",borderBottom:"1px solid "+C.bd,display:"flex",alignItems:"center",gap:5,flexShrink:0,background:C.s4}}>
          <span style={{fontSize:11,color:C.t3,fontFamily:FB}}>{(NAV.find(function(n){return n.id===nId;})||{}).la}</span>
          <span style={{color:C.t3}}>{"→"}</span>
          <span style={{fontSize:11,color:"#fff",fontWeight:500,fontFamily:FT}}>{SL[sId]}</span>
          {detail && (
            <span style={{display:"flex",alignItems:"center",gap:5}}>
              <span style={{color:C.t3}}>{"→"}</span>
              <span style={{fontSize:11,color:C.tl,fontWeight:500,fontFamily:FT}}>{detail.data.title}</span>
            </span>
          )}
        </div>
        <div style={{flex:1,overflow:"auto"}}>
          {detail ? <DC data={detail.data} onBack={back}/> : <Comp nav={nav} goD={goD}/>}
        </div>
      </div>
    </div>
  );
}

function AINativePage(){
  var SH = {fontSize:12,color:C.ac,fontWeight:600,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:FT};
  return (
    <div style={{flex:1,overflow:"auto",padding:"28px 48px",maxWidth:1000,margin:"0 auto"}}>
      <div className="fu" style={{textAlign:"center",marginBottom:32}}>
        <h1 style={{fontSize:26,fontWeight:700,color:"#fff",fontFamily:FT}}>AI-Native Design</h1>
        <p style={{fontSize:12,color:C.t2,marginTop:3,fontFamily:FB}}>How NorthStar embeds intelligence into the operator experience without obscuring raw telemetry</p>
      </div>
      <Card anim style={{marginBottom:20,borderColor:C.tlD}}>
        <div style={SH}>AI and Automation</div>
        <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:12,fontFamily:FB}}>NorthStar is designed from the ground up as an AI-native operations console. Rather than bolting intelligence onto a legacy dashboard, every surface is built to integrate Copilot recommendations alongside raw telemetry, giving operators decision-quality context without requiring blind trust.</p>
      </Card>
      <Card anim style={{marginBottom:20}}>
        <div style={SH}>Designing for the Copilot</div>
        <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:12,fontFamily:FB}}>The embedded Copilot is not a chatbot. It is a contextual recommendation engine that surfaces suggestions within the operator's existing workflow. Every recommendation includes confidence scores, affected assets, and a simulation path so operators can test before committing.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[
            ["Contextual, Not Conversational","Copilot recommendations appear inline within the screen the operator is already viewing. No mode-switching, no separate AI panel to navigate to."],
            ["Confidence is Visible","Every suggestion includes an AI confidence score and the reasoning behind it. Operators see the evidence, not just the verdict."],
            ["Simulate Before Committing","Operators can run any Copilot recommendation through a deterministic simulation before applying it to production systems."],
            ["Override With Justification","Operators can always override AI suggestions. The system logs the override reason for audit trails and model improvement."]
          ].map(function(pair,i){
            return (
              <div key={i} style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <div style={{fontSize:12,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>{pair[0]}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{pair[1]}</p>
              </div>
            );
          })}
        </div>
      </Card>
      <Card anim style={{marginBottom:20}}>
        <div style={SH}>From Telemetry to Decision \u2192 AI Insights</div>
        <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:12,fontFamily:FB}}>Traditional ground ops consoles show telemetry. NorthStar transforms telemetry into actionable intelligence. The AI layer classifies anomalies, correlates cross-layer events, and generates root cause analyses so operators spend less time diagnosing and more time deciding.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
          {[
            ["Anomaly Classification","AI classifies detected anomalies by type (RF, thermal, mechanical, environmental) with confidence scores, reducing manual triage time by surfacing the most likely cause immediately."],
            ["Cross-Layer Correlation","When multiple anomalies occur, the Copilot automatically correlates events across RF, thermal, and mechanical layers to identify common root causes that operators might miss in isolation."],
            ["Predictive Scheduling","AI analyzes orbital mechanics, weather forecasts, and historical pass success rates to recommend optimal beam-satellite-site assignments before conflicts arise."]
          ].map(function(item,i){
            return (
              <Card key={i} style={{padding:14}}>
                <div style={{fontSize:12,fontWeight:600,color:C.tl,marginBottom:6,fontFamily:FT}}>{item[0]}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{item[1]}</p>
              </Card>
            );
          })}
        </div>
      </Card>
      <Card anim style={{marginBottom:20}}>
        <div style={SH}>Turning Signals Into Resilience</div>
        <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:12,fontFamily:FB}}>The highest-value AI in NorthStar is not about efficiency. It is about resilience. When a ground station goes offline, the Copilot does not just alert. It generates a complete failover plan with alternate beam assignments, predicted SLA impact, and customer notification drafts.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[
            ["Automated Failover Planning","When a site degrades, the Copilot instantly generates reroute recommendations for every affected pass, ranked by SLA priority and link margin feasibility."],
            ["SLA Impact Prediction","Before any action is taken, operators see the predicted SLA impact of both the incident and the proposed remedy, enabling informed decision-making."],
            ["Customer Notification Drafts","The system pre-generates customer notifications with incident details, expected resolution time, and SLA status, reducing communication latency during incidents."],
            ["Post-Incident Learning","Every resolved incident feeds back into the AI model, improving future anomaly classification accuracy and failover recommendation quality."]
          ].map(function(pair,i){
            return (
              <div key={i} style={{padding:12,background:C.s2,borderRadius:8,border:"1px solid "+C.bd}}>
                <div style={{fontSize:12,fontWeight:600,color:C.tl,marginBottom:4,fontFamily:FT}}>{pair[0]}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{pair[1]}</p>
              </div>
            );
          })}
        </div>
      </Card>
      <Card anim style={{marginBottom:20}}>
        <div style={SH}>Calm Nominal, Sharp Anomaly</div>
        <p style={{fontSize:12,color:C.t1,lineHeight:1.6,marginBottom:12,fontFamily:FB}}>NorthStar's AI layer follows a core design principle: the interface stays calm during normal operations and sharpens when something goes wrong. This means the Copilot is quiet and ambient when everything is nominal, then becomes assertive and directive during incidents.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
          {[
            ["Ambient Mode","During nominal ops, the Copilot shows a compact summary of network health. Recommendations are optional and non-intrusive."],
            ["Alert Mode","When anomalies are detected, the Copilot expands with urgency indicators, affected asset lists, and actionable recommendations."],
            ["Incident Mode","During active incidents, the Copilot takes priority with full-screen recommendations, timeline views, and one-click action paths."]
          ].map(function(item,i){
            return (
              <Card key={i} style={{padding:14,borderColor:i===2?C.rdD:i===1?C.amD:C.bd}}>
                <div style={{fontSize:12,fontWeight:600,color:i===2?C.rd:i===1?C.am:C.tl,marginBottom:6,fontFamily:FT}}>{item[0]}</div>
                <p style={{fontSize:11,color:C.t2,lineHeight:1.5,margin:0,fontFamily:FB}}>{item[1]}</p>
              </Card>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

var tourTabs = ["Overview","Demo","Process","AI-Native","Design System","Docs","Field Notes","Memento"];
var tourDescs = [
  "Product overview with problem statement, solution, design principles, the value of design, and an interactive demo preview.",
  "Fully interactive prototype with 21 screens across 7 domains. Click any element to explore detail pages.",
  "Complete design process documentation with the 20/60/20 AI approach, IA, user journeys, and step-by-step process.",
  "How NorthStar embeds intelligence into the operator experience with Copilot recommendations and AI-driven resilience.",
  "Interactive design system with color palette, typography, spacing, component library, motion design, patterns, and layout documentation.",
  "Screen-by-screen documentation with descriptions, category and page filters.",
  "Reflections on the space infrastructure industry, design thinking, and the ground segment opportunity.",
  "A personal postcard to the Northwood Space team with a letter of interest."
];
var tourKeys = ["overview","demo","process","ainative","designsystem","docs","fieldnotes","memento"];

export default function NorthStarV2(){
  var pageState = useState("overview");
  var page = pageState[0];
  var setPage = pageState[1];
  var nState = useState("cmd");
  var nId = nState[0];
  var setNId = nState[1];
  var sState = useState("overview");
  var sId = sState[0];
  var setSId = sState[1];
  var dState = useState(null);
  var detail = dState[0];
  var setDetail = dState[1];
  var obState = useState(0);
  var ob = obState[0];
  var setOb = obState[1];
  var tpState = useState(null);
  var tp = tpState[0];
  var setTp = tpState[1];

  useEffect(function(){
    if(ob>0 && ob<=8){
      var btn = document.getElementById("ns-tour-btn-"+(ob-1));
      if(btn){
        var r = btn.getBoundingClientRect();
        setTp({x:r.left + r.width/2, y:r.bottom + 8});
      }
    }
  },[ob]);

  var nav = useCallback(function(n,s){setNId(n);setSId(s);setDetail(null);},[]);
  var goD = useCallback(function(type,data){setDetail({type:type,data:data});},[]);
  var back = useCallback(function(){setDetail(null);},[]); 

  return (
    <div style={{width:"100%",height:"100vh",background:C.bg,fontFamily:FT,color:C.t1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <style dangerouslySetInnerHTML={{__html:CSS}}/>
      {ob>0 && ob<=8 && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",zIndex:9998}}/>
      )}
      {ob===0 && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div className="fu" style={{background:C.s1,borderRadius:16,padding:"36px 40px",maxWidth:420,textAlign:"center",boxShadow:"0 20px 60px rgba(0,0,0,.3)",border:"1px solid "+C.bd}}>
            <div style={{display:"flex",justifyContent:"center",marginBottom:4}}>
              <Logo size={40}/>
            </div>
            <div style={{fontSize:22,fontWeight:700,color:"#fff",marginTop:12,fontFamily:FT}}>Welcome to NorthStar</div>
            <p style={{fontSize:13,color:C.t2,lineHeight:1.7,marginTop:10,fontFamily:FB}}>A speculative product experience designed for Northwood Space. Explore interactive screens, the design process, and a personal note to the team.</p>
            <div style={{display:"flex",gap:10,justifyContent:"center",marginTop:20}}>
              <Btn onClick={function(){setOb(-1);}}>Skip</Btn>
              <Btn primary onClick={function(){setOb(1);}}>Take the Tour</Btn>
            </div>
          </div>
        </div>
      )}
      <div style={{display:"flex",gap:8,padding:"7px 12px",borderBottom:"1px solid "+C.bd,background:C.s4,alignItems:"center",flexShrink:0,position:"relative",zIndex:ob>0&&ob<=8?10000:1}}>
        <div style={{display:"flex",alignItems:"center",gap:6,marginRight:10}}>
          <Logo size={18}/>
          <span style={{fontSize:13,fontWeight:600,color:"#fff",fontFamily:FT}}>NorthStar</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:3,background:C.s2,border:"1px solid "+C.bd,borderRadius:6,padding:"2px 4px"}}>
          {tourTabs.map(function(p,ti){
            var pk = tourKeys[ti];
            var isHL = ob>0 && ti===(ob-1);
            return (
              <Btn key={p} sm
                id={"ns-tour-btn-"+ti}
                active={ob>0?false:page===pk}
                onClick={ob>0?undefined:function(){setPage(pk);setDetail(null);}}
                style={Object.assign(
                  p==="Memento"&&ob<=0?{animation:"mGlow 2s ease-in-out infinite"}:{},
                  isHL?{boxShadow:"0 0 0 3px "+C.tl+"60",background:C.s3,color:C.tl,fontWeight:700}:{}
                )}>
                {p}
              </Btn>
            );
          })}
        </div>
      </div>
      {ob>0 && ob<=8 && tp && (
        <div className="fu" style={{position:"fixed",top:tp.y,left:tp.x-140,background:C.s1,borderRadius:12,padding:"16px 20px",width:280,boxShadow:"0 12px 40px rgba(0,0,0,.4)",zIndex:10002,border:"1px solid "+C.bd}}>
          <div style={{position:"absolute",top:-6,left:"50%",marginLeft:-6,width:12,height:12,background:C.s1,transform:"rotate(45deg)",borderLeft:"1px solid "+C.bd,borderTop:"1px solid "+C.bd}}/>
          <div style={{fontSize:14,fontWeight:600,color:"#fff",marginBottom:6,fontFamily:FT}}>{tourTabs[ob-1]}</div>
          <p style={{fontSize:12,color:C.t2,lineHeight:1.6,margin:"0 0 12px",fontFamily:FB}}>{tourDescs[ob-1]}</p>
          <div style={{display:"flex",justifyContent:ob>1?"space-between":"flex-end"}}>
            {ob>1 && (<Btn sm onClick={function(){setOb(ob-1);}}>← Prev</Btn>)}
            {ob<8 ? (
              <Btn sm primary onClick={function(){setOb(ob+1);}}>Next →</Btn>
            ) : (
              <Btn sm primary onClick={function(){setOb(-1);setPage("overview");}}>Let's go!</Btn>
            )}
          </div>
        </div>
      )}
      {page==="overview" && <OverviewPage setPage={setPage}/>}
      {page==="memento" && <MementoPage/>}
      {page==="fieldnotes" && <FieldNotesPage/>}
      {page==="ainative" && <AINativePage/>}
      {page==="docs" && <DocsPage goD={goD}/>}
      {page==="process" && <ProcessPage/>}
      {page==="designsystem" && <DesignSystemPage/>}
      {page==="demo" && <DemoView nId={nId} sId={sId} detail={detail} nav={nav} goD={goD} back={back}/>}
    </div>
  );
}
