module.exports = {

  apps : [
    {
      name        : 'account',
      script      : './account_server/app.js',
      args        : '../config/config.test',
      interpreter : 'node',
      max_memory_restart:'1G',
    },
    {
      name        : 'hall',
      script      : './hall_server/app.js',
      args        : '../config/config.test',
      interpreter : 'node',
      max_memory_restart:'1G',
    },
    {
      name        : 'running',
      script      : './poker_running_server/app.js',
      args        : '../config/config.test',
      interpreter : 'node',
      // instances   : '0',
      // exec_mode   : 'cluster',
      max_memory_restart:'1G',
    },
    {
      name        : 'landlord',
      script      : './poker_landlord_server/app.js',
      args        : '../config/config.test',
      interpreter : 'node',
      // instances   : '0',
      // exec_mode   : 'cluster',
      max_memory_restart:'1G',
    },
    {
      name        : 'ox',
      script      : './poker_ox_server/app.js',
      args        : '../config/config.test',
      interpreter : 'node',
      // instances   : '0',
      // exec_mode   : 'cluster',
      max_memory_restart:'1G',
    },
    {
      name        : 'goldflower',
      script      : './poker_goldflower_server/app.js',
      args        : '../config/config.test',
      interpreter : 'node',
      // instances   : '0',
      // exec_mode   : 'cluster',
      max_memory_restart:'1G',
    },
    {
      name        : 'taxas',
      script      : './poker_TaxasHoldem_server/app.js',
      args        : '../config/config.test',
      interpreter : 'node',
      // instances   : '0',
      // exec_mode   : 'cluster',
      max_memory_restart:'1G',
    }
    ,
    {
      name        : 'sangong',
      script      : './poker_sangong_server/app.js',
      args        : '../config/config.test',
      interpreter : 'node',
      // instances   : '0',
      // exec_mode   : 'cluster',
      max_memory_restart:'1G',
    },
    {
      name        : 'shisanshui',
      script      : './poker_shisanshui_server/app.js',
      args        : '../config/config.test',
      interpreter : 'node',
      // instances   : '0',
      // exec_mode   : 'cluster',
      max_memory_restart:'1G',
    },
    {
      name        : 'points21',
      script      : './poker_21_server/app.js',
      args        : '../config/config.test',
      interpreter : 'node',
      // instances   : '0',
      // exec_mode   : 'cluster',
      max_memory_restart:'1G',
    },
    {
      name        : 'points105',
      script      : './poker_10point_server/app.js',
      args        : '../config/config.test',
      interpreter : 'node',
      // instances   : '0',
      // exec_mode   : 'cluster',
      max_memory_restart:'1G',
    },
    {
      name        : 'sandaha',
      script      : './poker_sandaha_server/app.js',
      args        : '../config/config.test',
      interpreter : 'node',
      // instances   : '0',
      // exec_mode   : 'cluster',
      max_memory_restart:'1G',
    }
  ],
};
