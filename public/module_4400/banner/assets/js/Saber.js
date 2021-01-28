const Saber = function() {
  this.srcBaseUrl = 'http://www.saberparts.com/Media/';
  this.PartsOptions = {
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

  this.buildPartsSrc = function({ name, size }) {
    return encodeURI(`${this.srcBaseUrl}${name}.png?media=${size}`);
  }.bind(this);

  this.init = function() {

  };

};