import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const data = [
  {
    id: 1,
    name: "Chat App",
    description: "Die Chat-App ermöglicht Echtzeit-Kommunikation zwischen Benutzern. Sie nutzt Express.js für den Server, React.js für die Benutzeroberfläche und MongoDB zur Speicherung der Daten. Benutzer können Nachrichten senden und empfangen sowie Chat-Verläufe einsehen. Die App bietet eine reibungslose und schnelle Kommunikationsplattform.",
    link: "https://chat-app.ubejdullah-gashi.ch/",
    online: true,
  },
  {
    id: 2,
    name: "IP Tracker",
    description: "Die IP-Tracker Webanwendung basiert auf React JS und zeigt detaillierte Informationen wie Land, Region, Stadt, Postleitzahl und Organisation einer IP-Adresse an. Die Anwendung integriert eine Google Maps-Karte zur Visualisierung der Standorte.",
    link: "https://ip-tracker.ubejdullah-gashi.ch/",
    online: true,
  },
  {
    id: 3,
    name: "Webcam Recorder",
    description: "Die Camera Recorder Webanwendung basiert auf React JS und zeigt Live-Videostreams an. Ursprünglich wurde ein Raspberry Pi Server genutzt, derzeit wird das Bild direkt von der Gerätkamera angezeigt.                                                                                                                                    ‎ ",
    link: "https://camera-recorder.ubejdullah-gashi.ch/",
    online: false,
  }
];

export default function Home() {
  const projects = data;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen pt-0.5 pb-20">
        <p className="text-3xl text-white font-semibold text-center">Projekte</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">Projekte, an denen ich gerade arbeite</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center mt-2">
          {projects ? (
            projects.map((project) => (
              <a href={project.link} target="_blank" rel="noreferrer" key={project.id} className="bg-neutral-800/20 p-6 hover:bg-neutral-800/45 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg flex flex-col relative">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xl font-semibold">{project.name}</p>
                  {project.online ? (
                    <Tippy content={`Online`} animation="shift-away" arrow={false}>
                      <span className="text-green-500 px-2 py-1 font-normal rounded-md text-sm">
                        <i className="fa fa-circle text-green-500 mr-2" />Online
                      </span>
                    </Tippy>
                  ) : (
                    <Tippy content={`Der Raspberry-Server ist offline, aber die Website ist verfügbar. Klicken Sie für mehr Infos.`} animation="shift-away" arrow={false}>
                      <span className="text-red-400 px-2 py-1 font-normal rounded-md text-sm bg-red-900/30 hover:bg-red-900/40 transition-colors cursor-pointer">
                        <i className="fa fa-circle text-red-400 mr-2" />Offline
                      </span>
                    </Tippy>
                  )}
                </div>
                <p className="text-md font-normal text-white/50 mb-5">{project.description}</p>
                {!project.online && (
                  <div className="absolute bottom-4 left-4 right-4 bg-red-900/20 text-sm text-red-400 border border-red-600 rounded-md p-2 text-center hover:bg-red-900/30 transition-colors">
                    Server offline, aber Website verfügbar  Klicken Sie hier!
                  </div>
                )}
              </a>
            ))
          ) : (
            Array.from({ length: 3 }).map((_, __) => (
              <div key={__} className="bg-neutral-800/20 p-6 rounded-lg flex flex-col">
                <div className="flex-shrink-0 w-full h-[12rem] bg-neutral-700/30 rounded-lg animate-pulse" />
                <div className="bg-neutral-700/30 animate-pulse w-1/2 h-[24px] rounded-md mt-5" />
                <div className="mt-2 bg-neutral-700/30 animate-pulse w-full h-[96px] rounded-md" />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
