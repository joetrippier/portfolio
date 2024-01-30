function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  
  const buildBlocks = () => {
    console.log("Building blocks stared");
    const frameElem = document.getElementById("frame");
  
    if (!frameElem) {
      console.error("No element with id 'frame' found");
      return;
    }
  
    const columns = 4;
    const rows = 5;
    const padding = 2;
    const width = 100 / columns;
    const height = 100 / rows;
    let timer = 0;
    let delay = 350;
    let blockArray = [];
  
    for (let i = 0; i < rows; i++) {
      let line = [...Array(columns).keys()];
      shuffleArray(line);
      blockArray.push(line);
    }
  
    for (let i = 0; i < blockArray.length; i++) {
      for (let j = blockArray[i].length - 1; j >= 0; j--) {
        setTimeout(() => {
          let p = document.createElement("div");
          p.classList.add("block");
          p.style.width = `${width}%`;
          p.style.height = `${height}%`;
          p.style.position = `absolute`;
  
          const rowPosition = height * (rows - 1) - i * height;
          const columnPosition = blockArray[i][j] * width;
  
          const translation = `translate(${columnPosition}vw, ${rowPosition}vh)`;
          //p.style.transform = translation;
  
          p.style.left = `${columnPosition}vw`;
          p.style.top = `${rowPosition}vh`;
          frameElem.append(p);
        }, (timer += delay));
      }
    }
  };
  
  buildBlocks();
  