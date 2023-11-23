export default {

    getInfoDolar: async () => {

        try {
            let req = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL', {
              method: 'GET',
              headers: {
                'Content-type': 'application/json',
                Accept: 'application/json',
              },
            });

            let json = await req.json();
            return json
      
          } catch (error) {
            console.error('API::InfoDolar::ERROR', error);
          }
    }

}