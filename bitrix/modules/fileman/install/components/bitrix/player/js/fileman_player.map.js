{"version":3,"sources":["fileman_player.js"],"names":["BX","namespace","window","Fileman","PlayerManager","isStarted","players","playing","addPlayer","player","this","push","bindPlayerEvents","autostart","lazyload","init","ready","bind","throttle","onScroll","setTimeout","delegate","events","getEventList","i","length","addCustomEvent","proxy","eventName","onCustomEvent","topVisiblePlayer","isAnyPlaying","id","splice","inited","isVisibleOnScreen","active","isEnded","isPlaying","pause","isReady","mute","disableMute","play","getElementCoords","VISIBLE_OFFSET","box","getBoundingClientRect","elementHeight","bottom","top","elementWidth","right","left","coords","pageYOffset","pageXOffset","originTop","originLeft","originBottom","originRight","screens","onScreen","visible","clientHeight","document","documentElement","windowTop","scrollTop","windowBottom","parseInt","topVisible","bottomVisible","playerElement","playerCenterX","playerCenterY","currentPlayerCenterElement","elementFromPoint","parentNode","getPlayerById","Player","params","fillParameters","fireEvent","onClick","onKeyDown","prototype","playButton","findChildByClassName","getElement","focus","vjsPlayer","isReady_","paused","e","ended","setPlayedState","storageHash","__getStorageHash","localStorage","set","isPlayed","get","sources","type","isArray","src","createElement","node","tagName","isAudio","className","skin","attrs","width","height","controls","muted","create","source","append","hasFlash","playbackRate","volume","playlistParams","startTime","wmvConfig","onInit","event","which","preventDefault","stopPropagation","setSource","getSource","videojs","on","isFlashErrrorShown","error","code","message","errorDisplay","content","addEventListener","one","currentTime","spinner","findChild","class","remove","playlist","isFunction","proxyEvents","isNotEmptyString","removeCustomEvent"],"mappings":"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","file":""}