(() => {
    
    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getActorsByMovieId( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    interface movieProperties{
        cast:string[],
        description: string,
        rating: number,
        title: string,
    }
    function createMovie({title, description, rating, cast}:movieProperties ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthDay: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor',birthDay);
        return true;        

    }

    
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) :number => {
    if ( isDead ) {
      return  1500;
    } 
    if ( isSeparated ) {
      return  2500;
    } 
    return isRetired?3000:4000;
    
}


})();