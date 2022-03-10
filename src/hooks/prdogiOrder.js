import {useState, useEffect} from 'react';
import youtube from '../apis/prodigi';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect (() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

const search = async () => {
  const response = await youtube.post('/Orders',{

        'merchantReference': 'MyMerchantReference1',
        'shippingMethod': 'Overnight',
        'recipient': {
            'name': 'Mr Test[tolab]',
            'address': {
                'line1': '14 test place',
                'line2': 'test',
                'postalOrZipCode': '12345',
                'countryCode': 'US',
                'townOrCity': 'somewhere',
                'stateOrCounty': 'CO'
            }
        },
        'items': [
            {
                'merchantReference': 'item #1',
                'sku': 'GLOBAL-CFPM-16X20',
                'copies': 1,
                'sizing': 'fillPrintArea',
                'attributes': {
                    'color': 'black'
                },
                'recipientCost': {
                    'amount': '15.00',
                    'currency': 'USD'
                },
                'assets': [
                    {
                        'printArea': 'default',
                        'url': 'https://pwintyimages.blob.core.windows.net/samples/stars/test-sample-grey.png',
                        'md5Hash': 'daa1c811c6038e718a23f0d816914b7b'
                    }
                ]
            }
        ],
        'metadata': {
            'mycustomkey':'284fe3bf-abcb-48a6-b405-0f98e9542596',
            'someCustomerPreference': {
                'preference1': 'something',
                'preference2': 'red'
            },
            'sourceId': 12345
        }


    });// end of response
      // const reducedResponse = {};

    console.log(response);
    setVideos(response);

  }; // end of search

  return [videos, search];
}; // end of use Videos

export default useVideos;
