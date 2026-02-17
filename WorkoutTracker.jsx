import { useState, useEffect, useRef } from "react";

const sessions = [
  {
    id: 1,
    label: "Sessione 1",
    subtitle: "Core · Petto · Tricipiti",
    color: "#6C63FF",
    glow: "rgba(108,99,255,0.45)",
    icon: "💪",
    groups: [
      {
        name: "Addominali",
        icon: "🔥",
        exercises: [
          {
            name: "Leg Raiser",
            sets: 3,
            reps: "15",
            rest: 60,
            description:
              "Sdraiati su una panca o sul pavimento con le mani sotto i glutei. Tieni le gambe tese e sollevale fino a 90°, poi abbassale lentamente senza toccare terra. Mantieni la zona lombare incollata al suolo. Respira: espira salendo, inspira scendendo.",
          },
          {
            name: "Crunches",
            sets: 3,
            reps: "20",
            rest: 60,
            description:
              "Sdraiati sulla schiena, ginocchia piegate, piedi a terra. Metti le mani dietro la testa. Stacca le spalle dal suolo contraendo il rettore addominale, senza tirare il collo. Movimento breve e controllato. Torna giù senza riposare completamente prima della prossima rep.",
          },
          {
            name: "Plank",
            sets: 3,
            reps: "30-60 sec",
            rest: 60,
            isTime: true,
            duration: 45,
            description:
              "Posizione prona: appoggiati sugli avambracci e sulle punte dei piedi. Il corpo forma una linea retta dalla testa ai talloni. Contrai addome, glutei e quadricipiti. Non far cadere i fianchi né alzarli. Respira in modo costante.",
          },
        ],
      },
      {
        name: "Petto & Tricipiti",
        icon: "🏋️",
        exercises: [
          {
            name: "Cavi dall'alto",
            sets: 4,
            reps: "15",
            rest: 90,
            description:
              "In piedi al centro del cavo-croce con le maniglie alte. Porta le braccia in avanti e in basso formando un arco, come se abbracciassi un albero. Tieni i gomiti leggermente piegati e fissi. Contrai il petto al picco, poi ritorna lentamente. Pre-affaticamento ideale per il petto.",
          },
          {
            name: "Bench Press (Panca Piana)",
            sets: 4,
            reps: "10",
            rest: 120,
            description:
              "Sdraiati sulla panca, piedi piatti a terra. Impugna il bilanciere leggermente più largo delle spalle. Scendi verso il petto (altezza capezzoli) in modo controllato, poi spingi esplosivo in su. Tieni i polsi dritti, le scapole retratte e i glutei sulla panca.",
          },
          {
            name: "Pull Over Bilanciere",
            sets: 3,
            reps: "10",
            rest: 90,
            description:
              "Sdraiati perpendicolare alla panca con solo le spalle appoggiate. Tieni il bilanciere sopra il petto con le braccia quasi tese. Abbassalo lentamente oltre la testa stirando il gran dorsale. Riporta in posizione contraendo i muscoli. Ottimo per espandere la cassa toracica.",
          },
          {
            name: "French Press Manubri",
            sets: 4,
            reps: "12",
            rest: 90,
            description:
              "Sdraiati sulla panca, tieni un manubrio in ogni mano con le braccia estese verso l'alto. Piega i gomiti abbassando i manubri verso le tempie, mantenendo i gomiti fermi e puntati verso il soffitto. Stendi le braccia tornando su. Concentrati sul tricipite lungo.",
          },
          {
            name: "Tricipiti ai Cavi",
            sets: 3,
            reps: "15",
            rest: 60,
            description:
              "In piedi davanti al cavo alto con corda o barra. Tieni i gomiti incollati ai fianchi — non si muovono. Estendi le braccia verso il basso contraendo i tricipiti, poi torna su lentamente. Piegati leggermente in avanti per isolare meglio il muscolo.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Sessione 2",
    subtitle: "Core · Gambe · Spalle",
    color: "#FF6B6B",
    glow: "rgba(255,107,107,0.45)",
    icon: "🦵",
    groups: [
      {
        name: "Addome",
        icon: "🔥",
        exercises: [
          {
            name: "Rotary Torso",
            sets: 3,
            reps: "15",
            rest: 60,
            description:
              "Seduto sul macchinario Rotary Torso, busto bloccato, braccia incrociate sul petto. Ruota il torso da un lato all'altro contraendo gli obliqui. Esegui tutte le rip. per un lato, poi cambia. Movimento lento, evita gli scatti. Fondamentale per rinforzare gli obliqui.",
          },
        ],
      },
      {
        name: "Gambe",
        icon: "🦵",
        exercises: [
          {
            name: "Leg Press",
            sets: 4,
            reps: "15-12-10-8",
            rest: 120,
            description:
              "Siediti sul macchinario con i piedi alla larghezza delle spalle. Abbassa la piattaforma piegando le ginocchia fino a ~90° senza che superino le punte dei piedi. Spingi esplosivamente verso l'alto senza bloccare le ginocchia. Peso crescente ogni serie (piramidale).",
          },
          {
            name: "Affondi in camminata",
            sets: 3,
            reps: "10+10",
            rest: 90,
            description:
              "In piedi con i manubri ai lati. Fai un passo avanti lungo e scendi col ginocchio posteriore verso terra. Il ginocchio anteriore non deve superare la punta del piede. Spingiti avanti col piede anteriore. 10 rip. per gamba. Mantieni busto eretto e core contratto.",
          },
        ],
      },
      {
        name: "Cardio",
        icon: "🚴",
        exercises: [
          {
            name: "Cyclette",
            sets: 1,
            reps: "10 min",
            rest: 0,
            isTime: true,
            duration: 600,
            description:
              "10 minuti di cyclette a intensità moderata. Mantieni un ritmo costante (RPM 70-90). Imposta una resistenza che ti faccia lavorare senza essere troppo affannato. Migliora la circolazione e favorisce il recupero attivo tra gambe e spalle.",
          },
        ],
      },
      {
        name: "Spalle",
        icon: "🏋️",
        exercises: [
          {
            name: "Croci a 90°",
            sets: 4,
            reps: "12",
            rest: 90,
            description:
              "In piedi o seduto, con i manubri ai lati. Solleva le braccia lateralmente fino all'altezza delle spalle (90°), gomiti leggermente flessi. Al picco i palmi guardano verso il basso. Abbassa lentamente senza dondolare il busto. Isola il deltoide medio. Peso leggero, tecnica perfetta.",
          },
          {
            name: "Shoulder Press",
            sets: 4,
            reps: "15-12-10-8",
            rest: 120,
            description:
              "Seduto su una panca con schienale, tieni i manubri all'altezza delle orecchie con i gomiti a 90°. Spingi verso l'alto fino quasi all'estensione completa, poi torna giù lentamente. Peso crescente ogni serie. Coinvolge deltoide anteriore e medio, oltre al tricipite.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Sessione 3",
    subtitle: "Lombare · Dorso · Bicipiti",
    color: "#00D4AA",
    glow: "rgba(0,212,170,0.45)",
    icon: "🦾",
    groups: [
      {
        name: "Addome / Lombare",
        icon: "🔥",
        exercises: [
          {
            name: "Hyperextension",
            sets: 3,
            reps: "15",
            rest: 60,
            description:
              "Sul macchinario per l'iperestensione, posizionati con le anche sul cuscinetto e i piedi bloccati. Mani incrociate sul petto. Scendi piegando il busto verso il basso, poi risali contraendo i lombari fino a essere in linea retta (non oltre). Rinforza erettori spinali, glutei, ischio-crurali.",
          },
        ],
      },
      {
        name: "Dorso",
        icon: "🔙",
        exercises: [
          {
            name: "Row Presa Stretta",
            sets: 4,
            reps: "8",
            rest: 120,
            description:
              "Al cavo basso con presa prona stretta. Tira verso l'ombelico mantenendo i gomiti vicini ai fianchi. Contrai le scapole al centro alla fine del movimento. La schiena rimane dritta. Torna avanti con controllo senza perdere la tensione. Colpisce gran dorsale e romboidi.",
          },
          {
            name: "Row Presa Larga",
            sets: 2,
            reps: "18",
            rest: 90,
            description:
              "Stessa esecuzione del Row ma con presa larga. I gomiti si aprono verso l'esterno, coinvolgendo il deltoide posteriore e le fibre superiori del dorsale. Volume alto (18 rep) per il pump e la resistenza. Usa un peso più leggero rispetto alla presa stretta.",
          },
          {
            name: "Lat Avanti",
            sets: 4,
            reps: "15-12-10-8",
            rest: 120,
            description:
              "Alla lat machine, impugna la sbarra larga. Tirala verso il petto (non alla nuca) con un lieve arco lombare e il petto aperto verso l'alto. I gomiti puntano verso il pavimento e le scapole si abbassano. Risali lentamente. Serie piramidale: aumenta il carico ogni set.",
          },
        ],
      },
      {
        name: "Bicipiti",
        icon: "💪",
        exercises: [
          {
            name: "Curl Cavo Basso",
            sets: 4,
            reps: "10",
            rest: 90,
            description:
              "Al cavo basso con barra diritta o corda. Gomiti ai fianchi fissi, fletti le braccia portando la barra verso le spalle. La tensione del cavo mantiene il muscolo sotto stress anche nella posizione bassa. Torna giù lentamente senza dondolare il busto.",
          },
          {
            name: "Curl Manubri",
            sets: 3,
            reps: "8+8",
            rest: 90,
            description:
              "In piedi o seduto, con un manubrio in ogni mano. Esegui il curl alternato: fletti un braccio ruotando il polso verso l'esterno (supinazione) al picco. 8 rip. per braccio. Tieni il gomito fermo senza portarlo avanti durante il curl. Movimento lento e controllato.",
          },
        ],
      },
    ],
  },
];

function useTimer(initialSeconds) {
  const [time, setTime] = useState(initialSeconds);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  useEffect(() => {
    if (running && time > 0) {
      intervalRef.current = setInterval(() => setTime((t) => t - 1), 1000);
    } else if (time === 0) setRunning(false);
    return () => clearInterval(intervalRef.current);
  }, [running, time]);
  return {
    time,
    running,
    start: () => setRunning(true),
    pause: () => setRunning(false),
    reset: () => { setRunning(false); setTime(initialSeconds); },
  };
}

function fmt(s) {
  return `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
}

function RestTimerModal({ seconds, onClose }) {
  const { time, running, start, pause, reset } = useTimer(seconds);
  useEffect(() => { start(); }, []);
  const pct = (time / seconds) * 100;
  const C = 2 * Math.PI * 54;
  return (
    <div style={S.overlay} onClick={onClose}>
      <div style={S.modalCard} onClick={(e) => e.stopPropagation()}>
        <p style={S.modalTitle}>⏱ Recupero</p>
        <svg width="130" height="130" viewBox="0 0 130 130">
          <circle cx="65" cy="65" r="54" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
          <circle cx="65" cy="65" r="54" fill="none"
            stroke={time <= 10 ? "#FF6B6B" : "#6C63FF"} strokeWidth="8" strokeLinecap="round"
            strokeDasharray={C} strokeDashoffset={C * (1 - pct / 100)}
            transform="rotate(-90 65 65)"
            style={{ transition: "stroke-dashoffset 0.9s linear, stroke 0.3s" }} />
          <text x="65" y="70" textAnchor="middle" fill="white" fontSize="26" fontWeight="700" fontFamily="monospace">
            {fmt(time)}
          </text>
        </svg>
        <div style={S.row}>
          {running
            ? <button style={{...S.btn, background:"rgba(255,255,255,0.15)"}} onClick={pause}>⏸ Pausa</button>
            : <button style={{...S.btn, background:"rgba(108,99,255,0.6)"}} onClick={start}>▶ Riprendi</button>}
          <button style={{...S.btn, background:"rgba(255,107,107,0.4)"}} onClick={reset}>↺</button>
          <button style={{...S.btn, background:"rgba(255,255,255,0.08)"}} onClick={onClose}>✕</button>
        </div>
        {time === 0 && <p style={{color:"#00D4AA",fontWeight:"700",marginTop:"10px"}}>✅ Recupero completato!</p>}
      </div>
    </div>
  );
}

function ExTimer({ duration }) {
  const { time, running, start, pause, reset } = useTimer(duration);
  const pct = (time / duration) * 100;
  const col = time <= 10 ? "#FF6B6B" : "#00D4AA";
  return (
    <div style={S.exTimer}>
      <div style={{...S.timerBar, width:`${pct}%`, background:col}} />
      <span style={S.timerTxt}>{fmt(time)}</span>
      <div style={{display:"flex",gap:"6px",marginLeft:"auto",position:"relative",zIndex:1}}>
        {running
          ? <button style={S.sm} onClick={pause}>⏸</button>
          : <button style={{...S.sm, background:"rgba(0,212,170,0.4)"}} onClick={start}>▶</button>}
        <button style={{...S.sm, background:"rgba(255,107,107,0.3)"}} onClick={reset}>↺</button>
      </div>
    </div>
  );
}

function ExCard({ ex, color, done, onSet }) {
  const [open, setOpen] = useState(false);
  const [showRest, setShowRest] = useState(false);
  return (
    <>
      {showRest && <RestTimerModal seconds={ex.rest||90} onClose={()=>setShowRest(false)} />}
      <div style={{...S.card, borderColor:`${color}44`}}>
        <div style={S.cardHead}>
          <div style={{flex:1}}>
            <p style={S.exName}>{ex.name}</p>
            <p style={S.exMeta}>{ex.sets} serie · {ex.reps} rip.{ex.rest>0?` · rec.${ex.rest}s`:""}</p>
          </div>
          <button style={{...S.infoBtn, borderColor:`${color}66`, color}} onClick={()=>setOpen(!open)}>
            {open?"✕":"ℹ"}
          </button>
        </div>
        {open && (
          <div style={{...S.desc, borderColor:`${color}33`}}>
            <p style={S.descTxt}>{ex.description}</p>
          </div>
        )}
        {ex.isTime && ex.duration && <ExTimer duration={ex.duration} />}
        <div style={S.sets}>
          {Array.from({length:ex.sets}).map((_,i)=>(
            <button key={i}
              style={{...S.dot, background:done>i?color:"rgba(255,255,255,0.08)",
                borderColor:done>i?color:"rgba(255,255,255,0.2)",
                boxShadow:done>i?`0 0 10px ${color}88`:"none"}}
              onClick={()=>onSet(i)}>
              {done>i?"✓":i+1}
            </button>
          ))}
          {ex.rest>0&&(
            <button style={{...S.restBtn, borderColor:`${color}55`, color}} onClick={()=>setShowRest(true)}>
              ⏱ Recupero
            </button>
          )}
        </div>
      </div>
    </>
  );
}

function Group({ group, color }) {
  const [done, setDone] = useState(()=>group.exercises.map(()=>0));
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
      <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"2px"}}>
        <span style={{fontSize:"20px"}}>{group.icon}</span>
        <span style={{fontSize:"16px",fontWeight:"700",color}}>{group.name}</span>
      </div>
      {group.exercises.map((ex,i)=>(
        <ExCard key={ex.name} ex={ex} color={color} done={done[i]}
          onSet={si=>setDone(p=>{const n=[...p]; n[i]=n[i]>=si+1?si:si+1; return n;})} />
      ))}
    </div>
  );
}

function SessionView({ session }) {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const ref = useRef(null);
  useEffect(()=>{
    if(running) ref.current=setInterval(()=>setElapsed(e=>e+1),1000);
    else clearInterval(ref.current);
    return ()=>clearInterval(ref.current);
  },[running]);
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
      <div style={{...S.watch, borderColor:`${session.color}44`, boxShadow:`0 0 30px ${session.glow}`}}>
        <div>
          <p style={S.wLabel}>Durata sessione</p>
          <p style={{...S.wTime, color:session.color}}>{fmt(elapsed)}</p>
        </div>
        <div style={S.row}>
          {running
            ? <button style={{...S.btn, background:"rgba(255,255,255,0.1)"}} onClick={()=>setRunning(false)}>⏸ Pausa</button>
            : <button style={{...S.btn, background:`${session.color}99`}} onClick={()=>setRunning(true)}>▶ {elapsed===0?"Inizia":"Riprendi"}</button>}
          <button style={{...S.btn, background:"rgba(255,107,107,0.3)"}} onClick={()=>{setRunning(false);setElapsed(0);}}>↺ Reset</button>
        </div>
      </div>
      {session.groups.map(g=><Group key={g.name} group={g} color={session.color} />)}
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState(0);
  return (
    <div style={S.root}>
      <div style={S.b1}/><div style={S.b2}/><div style={S.b3}/>
      <div style={S.wrap}>
        <div style={{textAlign:"center",marginBottom:"28px"}}>
          <h1 style={S.title}>🏋️ Scheda Allenamento</h1>
          <p style={{color:"rgba(255,255,255,0.45)",fontSize:"13px",margin:0}}>3 sessioni · Core + Petto · Gambe · Dorso</p>
        </div>
        <div style={S.tabs}>
          {sessions.map((s,i)=>(
            <button key={s.id} style={{...S.tab,
              background:active===i?`linear-gradient(135deg,${s.color}cc,${s.color}55)`:"rgba(255,255,255,0.06)",
              borderColor:active===i?s.color:"rgba(255,255,255,0.12)",
              boxShadow:active===i?`0 4px 24px ${s.glow}`:"none",
              transform:active===i?"scale(1.03)":"scale(1)"}}
              onClick={()=>setActive(i)}>
              <span style={{fontSize:"22px"}}>{s.icon}</span>
              <span style={{fontSize:"14px",fontWeight:"700",color:"#fff"}}>{s.label}</span>
              <span style={{fontSize:"11px",color:"rgba(255,255,255,0.55)",textAlign:"center"}}>{s.subtitle}</span>
            </button>
          ))}
        </div>
        <SessionView key={active} session={sessions[active]} />
      </div>
    </div>
  );
}

const S = {
  root:{minHeight:"100vh",background:"linear-gradient(135deg,#0a0a1a 0%,#0d1224 50%,#0a0a1a 100%)",fontFamily:"'Segoe UI',system-ui,sans-serif",color:"#fff",position:"relative",overflowX:"hidden"},
  b1:{position:"fixed",top:"-120px",left:"-120px",width:"420px",height:"420px",borderRadius:"50%",background:"radial-gradient(circle,rgba(108,99,255,0.18) 0%,transparent 70%)",pointerEvents:"none",zIndex:0},
  b2:{position:"fixed",bottom:"-100px",right:"-100px",width:"380px",height:"380px",borderRadius:"50%",background:"radial-gradient(circle,rgba(255,107,107,0.15) 0%,transparent 70%)",pointerEvents:"none",zIndex:0},
  b3:{position:"fixed",top:"40%",left:"50%",transform:"translate(-50%,-50%)",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle,rgba(0,212,170,0.08) 0%,transparent 70%)",pointerEvents:"none",zIndex:0},
  wrap:{position:"relative",zIndex:1,maxWidth:"760px",margin:"0 auto",padding:"24px 16px 64px"},
  title:{fontSize:"clamp(22px,5vw,34px)",fontWeight:"800",margin:"0 0 6px",background:"linear-gradient(90deg,#6C63FF,#FF6B6B,#00D4AA)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},
  tabs:{display:"flex",gap:"10px",marginBottom:"28px",flexWrap:"wrap",justifyContent:"center"},
  tab:{flex:"1 1 160px",minWidth:"140px",maxWidth:"220px",display:"flex",flexDirection:"column",alignItems:"center",gap:"2px",padding:"12px 10px",border:"1px solid",borderRadius:"16px",cursor:"pointer",transition:"all 0.25s cubic-bezier(.4,0,.2,1)",backdropFilter:"blur(14px)"},
  watch:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px",background:"rgba(255,255,255,0.05)",backdropFilter:"blur(20px)",border:"1px solid",borderRadius:"20px",padding:"18px 20px"},
  wLabel:{margin:"0 0 4px",fontSize:"12px",color:"rgba(255,255,255,0.5)",letterSpacing:"0.05em",textTransform:"uppercase"},
  wTime:{margin:0,fontSize:"36px",fontWeight:"800",fontFamily:"monospace",letterSpacing:"2px"},
  card:{background:"rgba(255,255,255,0.05)",backdropFilter:"blur(16px)",border:"1px solid",borderRadius:"16px",padding:"16px"},
  cardHead:{display:"flex",alignItems:"flex-start",gap:"12px"},
  exName:{margin:"0 0 4px",fontSize:"15px",fontWeight:"700",color:"#fff"},
  exMeta:{margin:0,fontSize:"12px",color:"rgba(255,255,255,0.45)"},
  infoBtn:{width:"32px",height:"32px",borderRadius:"50%",border:"1px solid",background:"transparent",cursor:"pointer",fontSize:"14px",fontWeight:"700",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"},
  desc:{background:"rgba(255,255,255,0.04)",border:"1px solid",borderRadius:"10px",padding:"12px 14px",margin:"12px 0 8px"},
  descTxt:{margin:0,fontSize:"13px",lineHeight:"1.65",color:"rgba(255,255,255,0.75)"},
  exTimer:{position:"relative",height:"38px",background:"rgba(255,255,255,0.06)",borderRadius:"10px",margin:"10px 0 2px",display:"flex",alignItems:"center",padding:"0 12px",gap:"10px",overflow:"hidden"},
  timerBar:{position:"absolute",left:0,top:0,height:"100%",borderRadius:"10px",opacity:0.15,transition:"width 0.9s linear,background 0.3s"},
  timerTxt:{fontFamily:"monospace",fontWeight:"700",fontSize:"16px",color:"#fff",zIndex:1},
  sets:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center",marginTop:"12px"},
  dot:{width:"38px",height:"38px",borderRadius:"50%",border:"2px solid",cursor:"pointer",fontSize:"13px",fontWeight:"700",color:"#fff",transition:"all 0.2s cubic-bezier(.4,0,.2,1)",display:"flex",alignItems:"center",justifyContent:"center"},
  restBtn:{padding:"6px 14px",borderRadius:"20px",border:"1px solid",background:"transparent",cursor:"pointer",fontSize:"12px",fontWeight:"700",marginLeft:"auto"},
  overlay:{position:"fixed",inset:0,zIndex:1000,background:"rgba(0,0,0,0.65)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center"},
  modalCard:{background:"rgba(255,255,255,0.08)",backdropFilter:"blur(28px)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"24px",padding:"32px 28px",textAlign:"center",minWidth:"260px",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},
  modalTitle:{margin:"0 0 16px",fontSize:"18px",fontWeight:"700",color:"rgba(255,255,255,0.85)"},
  btn:{padding:"8px 16px",borderRadius:"20px",border:"none",cursor:"pointer",color:"#fff",fontSize:"13px",fontWeight:"600"},
  sm:{width:"32px",height:"32px",borderRadius:"50%",border:"none",cursor:"pointer",color:"#fff",fontSize:"14px",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(255,255,255,0.1)"},
  row:{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap",marginTop:"14px"},
};
