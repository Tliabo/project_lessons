<?php

return [

  /*
   * Default Database Connection Name
   *
   * Here you may specify which database connection below you wanna use
   */
  'default' => 'sqlite',

  /*
   * Database Connections
   *
   * Here are the connections that are available for the application
   */
  'connections' => [
    'sqlite' => [
      'driver' => 'sqlite',
      'database' => 'database.sqlite'
    ],

    'mysql' => [
      'driver' => 'mysql',
      'host' => '127.0.0.1',
      'port' => '3306',
      'database' => 'vart',
      'username' => 'homestead',
      'password' => 'secret'
    ]
  ]

];
