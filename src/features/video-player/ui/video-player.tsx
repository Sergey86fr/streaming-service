import { useEffect, useState } from "react";
import styles from "./video-players.module.css"
import cn from "classnames"

export const VideoPlayer = () => {
  const [scriptHtml, setScriptHtml] = useState("");

  useEffect(() => {
    const dataUrl = window.location.href;
    fetch(
      `//pleer.videoplayers.club/get_player?w=610&h=370&type=widget&players=apicollaps,videocdn,hdvb,bazon,alloha,ustore,kodik,trailer&r_id=videoplayers&ani=COLLAPS&ati=&adi=&vni=VIDEOCDN&vti=&vdi=&hni=HDVB&hti=&hdi=&bni=BAZON&bti=&bdi=&alni=ALLOHATV&alti=&aldi=&usni=USTOREBZ&usti=&usdi=&koni=KODIK&koti=&kodi=&tti=&data_title="+dataTitle+"&ru=`+dataUrl,
    ).then(res => res.text()).then(data => {
      const matches = data.match(/<iframe.*?<\/iframe>/gim);

     if (matches && matches.length > 0) {
          const iframe = matches[1] || matches[0];
          setScriptHtml(iframe);
        } else {
          setScriptHtml("");
        }
      })
      .catch(error => {
        console.error("Ошибка загрузки видео:", error);
        setScriptHtml("");
      })
  }, []);
  
  return <div className={cn('uitools', styles.video)}
  id="videoplayers"
  dangerouslySetInnerHTML={{__html:scriptHtml}}
  >
  </div>;
};

