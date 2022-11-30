export default function LeerArchivos(dir){
    const archivos=new Array();
    const  direccion=dir;
     
    for(var i=0;i<3; i++)
    {       
           if(dir)
           {
            archivos.push(direccion+i+'.jpg') ;           
           }
     console.log(archivos);
       
    }
    return archivos;
}