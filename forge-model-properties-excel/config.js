
module.exports = { 
   
    //dlr
    client_id: process.env.FORGE_CLIENT_ID || 'eYTJ1trcwGzioK61zAtrOUuBjcfkU40W' ,
    client_secret: process.env.FORGE_CLIENT_SECRET || 'Da3dd9435c00942a',

    //model_urn: process.env.FORGE_MODEL_URN ||'urn:adsk.wipprod:fs.file:vf.vkzBx_xKRY66TqxDqCD9NQ?version=4',
    //model_urn: process.env.FORGE_MODEL_URN ||'urn:adsk.wipprod:fs.file:vf.vkzBx_xKRY66TqxDqCD9NQ',
    //model_urn: process.env.FORGE_MODEL_URN ||'adsk.wipprod:fs.file:vf.vkzBx_xKRY66TqxDqCD9NQ',
    //model_urn: process.env.FORGE_MODEL_URN ||'fs.file:vf.vkzBx_xKRY66TqxDqCD9NQ',
    model_urn: process.env.FORGE_MODEL_URN ||'vkzBx_xKRY66TqxDqCD9NQ',

    //https://github.com/belalumar/forgeviewer_embed_in_powerbi_report/commit/2a7a5f9181899f1e6a5878d6e7888dfb8c918fa3
    //dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bTFtMW0xbTEvYm94LmlwdA
    //model_urn: process.env.FORGE_MODEL_URN || 'adsk.objects:os.object:clarity-dlrbimsql-ccbb016a-88e1-4d30-939b-814f76897a4b/11-15112-50_Carlisle-ES_ST_2019.rvt',
    //model_urn: process.env.FORGE_MODEL_URN || 'urn:adsk.objects:os.object:clarity-dlrbimsql-ccbb016a-88e1-4d30-939b-814f76897a4b/11-15112-50_Carlisle-ES_AR_2019.rvt',
    //model_urn: process.env.FORGE_MODEL_URN || '19c8ea07-4e48-4b6c-90f0-d7dc182fb592',
    //model_urn: process.env.FORGE_MODEL_URN || 'adsk.objects:os.object:clarity-dlrbimsql-ccbb016a-88e1-4d30-939b-814f76897a4b/11-15112-50_Carlisle-ES_AR_2019.rvt',
    //bucket: process.env.FORGE_BUCKET_KEY || '<your bucket of Forge>',

    //client_id: process.env.FORGE_CLIENT_ID || 'qSlqh8s3vG4QoHVi2LsJPGYrBbZR5osH' ,
    //client_secret: process.env.FORGE_CLIENT_SECRET || 'd0FM8BNLWg1ure1S',
    //model_urn: process.env.FORGE_MODEL_URN || 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cXNscWg4czN2ZzRxb2h2aTJsc2pwZ3lyYmJ6cjVvc2gtdGVzdC9mb3JnZWJhc2ljc2FtcGxlcHJvamVjdC5ydnQ=',
    scopes: ['data:read'],
    token:''
};
