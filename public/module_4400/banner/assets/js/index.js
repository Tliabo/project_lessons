
const saberParts = {
  emitters: [
    {
      name: 'Emitter 3',
      size: 'sm'
    },
    {
      name: 'Emitter 1',
      size: 'sm'
    },
    {
      name: 'Commando Emitter',
      size: 'sm'
    },
    {
      name: 'Emitter 11',
      size: 'sm'
    },
    {
      name: 'Emitter 12',
      size: 'sm'
    },
    {
      name: 'Emitter 13',
      size: 'sm'
    },
    {
      name: 'Emitter 14',
      size: 'sm'
    },
    {
      name: 'Outcast Emitter',
      size: 'sm'
    },
    {
      name: 'Pathfinder Emitter',
      size: 'sm'
    },
    {
      name: 'Emitter 2',
      size: 'sm'
    },
  ],
  switches: [
    {
      name: 'Commando Switch',
      size: 'sm'
    },
    {
      name: 'Outcast Switch',
      size: 'sm'
    },
    {
      name: 'Pathfinder Switch',
      size: 'sm'
    },
    {
      name: 'Switch 11',
      size: 'sm'
    },
    {
      name: 'Switch 12',
      size: 'sm'
    },
    {
      name: 'Switch 13',
      size: 'sm'
    },
    {
      name: 'Switch 14',
      size: 'sm'
    },
    {
      name: 'Switch 15',
      size: 'sm'
    },
    {
      name: 'Switch 16',
      size: 'sm'
    },
    {
      name: 'Switch 17',
      size: 'sm'
    },
  ],
  bodies: [
    {
      name: 'Body 11',
      size: 'sm'
    },
    {
      name: 'Body 12',
      size: 'sm'
    },
    {
      name: 'Body 13',
      size: 'sm'
    },
    {
      name: 'Body 14',
      size: 'sm'
    },
    {
      name: 'Body 15',
      size: 'sm'
    },
    {
      name: 'Commando Body',
      size: 'sm'
    },
    {
      name: 'Curved Body 1',
      size: 'sm'
    },
    {
      name: 'Curved Body 2',
      size: 'sm'
    },
    {
      name: 'Curved Body 3',
      size: 'sm'
    },
    {
      name: 'Curved Body 4',
      size: 'sm'
    },
  ],
  pommels: [
    {
      name: 'Commando Pommel',
      size: 'sm'
    },
    {
      name: 'Outcast Pommel',
      size: 'sm'
    },
    {
      name: 'Pathfinder Pommel',
      size: 'sm'
    },
    {
      name: 'Pommel 11',
      size: 'sm'
    },
    {
      name: 'Pommel 12',
      size: 'sm'
    },
    {
      name: 'Pommel 13',
      size: 'sm'
    },
    {
      name: 'Pommel 14',
      size: 'sm'
    },
    {
      name: 'Pommel 15',
      size: 'sm'
    },
    {
      name: 'Pommel 16',
      size: 'sm'
    },
    {
      name: 'Pommel 17',
      size: 'sm'
    },
  ]
}

const srcBaseUrl = 'http://www.saberparts.com/Media/';

const sliders = [];

let buildSrc = function ({name, size}) {
  return encodeURI(`${srcBaseUrl}${name}.png?media=${size}`)
}

let logPartsSrc = function (type) {
  eval(`this.${type}`).forEach(emitter => {
    console.log(buildSrc(emitter.name, emitter.size))
  })
}
// logPartsSrc('emitters')

function createSlider(name, parts) {

  const hSlider = document.createElement('li');
  hSlider.className = 'slider';
  hSlider.id = `slider-${name}`;

  const hParts = document.createElement('ul');
  hParts.className = 'parts';

  parts.forEach(part => {
    let li = document.createElement('li')
    li.className = 'saber_part';

    let img = document.createElement("img")
    img.src = buildSrc(part);

    li.appendChild(img);
    hParts.appendChild(li);
  });
  hSlider.appendChild(hParts);

  console.log(hSlider)

  sliders.push(hSlider)
}

createSlider('emitters', saberParts.emitters);
createSlider('switches', saberParts.switches);
createSlider('bodies', saberParts.bodies);
createSlider('pommels', saberParts.pommels);

sliders.forEach(slider => {
  document.querySelector('.sliders').appendChild(slider);
})

