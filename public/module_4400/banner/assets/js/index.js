const saberParts = {
  emitters: [
    {
      name: 'Emitter 3',
      size: 'xs'
    },
    {
      name: 'Emitter 1',
      size: 'xs'
    },
    {
      name: 'Commando Emitter',
      size: 'xs'
    },
    {
      name: 'Emitter 5',
      size: 'xs'
    },
    {
      name: 'Emitter 12',
      size: 'xs'
    },
    {
      name: 'Emitter 13',
      size: 'xs'
    },
    {
      name: 'Emitter 4',
      size: 'xs'
    },
    {
      name: 'Outcast Emitter',
      size: 'xs'
    },
    {
      name: 'Pathfinder Emitter',
      size: 'xs'
    },
    {
      name: 'Emitter 2',
      size: 'xs'
    }
  ],
  switches: [
    {
      name: 'Commando Switch',
      size: 'xs'
    },
    {
      name: 'Outcast Switch',
      size: 'xs'
    },
    {
      name: 'Pathfinder Switch',
      size: 'xs'
    },
    {
      name: 'Switch 11',
      size: 'xs'
    },
    {
      name: 'Switch 12',
      size: 'xs'
    },
    {
      name: 'Switch 13',
      size: 'xs'
    },
    {
      name: 'Switch 14',
      size: 'xs'
    },
    {
      name: 'Switch 15',
      size: 'xs'
    },
    {
      name: 'Switch 16',
      size: 'xs'
    },
    {
      name: 'Switch 17',
      size: 'xs'
    }
  ],
  bodies: [
    {
      name: 'Body 11',
      size: 'xs'
    },
    {
      name: 'Body 12',
      size: 'xs'
    },
    {
      name: 'Body 13',
      size: 'xs'
    },
    {
      name: 'Body 14',
      size: 'xs'
    },
    {
      name: 'Body 15',
      size: 'xs'
    },
    {
      name: 'Commando Body',
      size: 'xs'
    },
    {
      name: 'Body 1',
      size: 'xs'
    },
    {
      name: 'Body 2',
      size: 'xs'
    },
    {
      name: 'Body 3',
      size: 'xs'
    },
    {
      name: 'Body 4',
      size: 'xs'
    }
  ],
  pommels: [
    {
      name: 'Commando Pommel',
      size: 'xs'
    },
    {
      name: 'Outcast Pommel',
      size: 'xs'
    },
    {
      name: 'Pathfinder Pommel',
      size: 'xs'
    },
    {
      name: 'Pommel 11',
      size: 'xs'
    },
    {
      name: 'Pommel 12',
      size: 'xs'
    },
    {
      name: 'Pommel 13',
      size: 'xs'
    },
    {
      name: 'Pommel 14',
      size: 'xs'
    },
    {
      name: 'Pommel 15',
      size: 'xs'
    },
    {
      name: 'Pommel 16',
      size: 'xs'
    },
    {
      name: 'Pommel 17',
      size: 'xs'
    }
  ]
};

const srcBaseUrl = 'http://www.saberparts.com/Media/';

const hSliders = [];

let buildSrc = function({ name, size }) {
  return encodeURI(`${srcBaseUrl}${name}.png?media=${size}`);
};

let logPartsSrc = function(type) {
  eval(`this.${type}`).forEach(emitter => {
    console.log(buildSrc(emitter.name, emitter.size));
  });
};

// logPartsSrc('emitters')

function createSlider(name, parts) {

  const hSlider = document.createElement('li');
  hSlider.className = 'slider';
  hSlider.id = `slider-${name}`;

  const hParts = document.createElement('ul');
  hParts.className = 'saber_parts slider-items';

  parts.forEach(part => {
    let li = document.createElement('li');
    li.className = 'saber_part slider-item';

    let img = document.createElement('img');
    img.src = buildSrc(part);
    img.alt = part.name;

    li.appendChild(img);
    hParts.appendChild(li);
  });
  hSlider.appendChild(hParts);

  const hControlls = {
    prev: document.createElement('button'),
    next: document.createElement('button')
  };

  let prevIcon = document.createElement('i');
  prevIcon.classList.add('fas', 'fa-chevron-circle-left');
  let nextIcon = document.createElement('i');
  nextIcon.classList.add('fas', 'fa-chevron-circle-right');

  hControlls.prev.classList.add('slider-control', 'prev');
  hControlls.prev.type = 'button';
  hControlls.prev.appendChild(prevIcon);

  hControlls.next.classList.add('slider-control', 'next');
  hControlls.next.type = 'button';
  hControlls.next.appendChild(nextIcon);

  hSlider.appendChild(hControlls.prev);
  hSlider.appendChild(hControlls.next);

  // console.log(hSlider)

  hSliders.push(hSlider);
}

createSlider('emitters', saberParts.emitters);
createSlider('switches', saberParts.switches);
createSlider('bodies', saberParts.bodies);
createSlider('pommels', saberParts.pommels);

hSliders.forEach(slider => {
  document.querySelector('.sliders').appendChild(slider);
});

