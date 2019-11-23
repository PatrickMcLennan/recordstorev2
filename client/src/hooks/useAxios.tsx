import { useEffect, useState } from 'react';
import axios, { Method, AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios';

const calculatePercentage = (loaded: number, total: number): number => Math.floor(loaded * 1.0) / total;

const determineProgress = (method: Method, stateCallback?: Function): AxiosRequestConfig => {
  if (method === 'GET') {
    const onDownloadProgress = (progressEvent: ProgressEvent) => {
      console.log(progressEvent);
      stateCallback(progressEvent.loaded);
    };
    return { onDownloadProgress };
  } else if (method === 'POST') {
    const onUploadProgress = (progressEvent: ProgressEvent) => console.log(progressEvent);
    return { onUploadProgress };
  }
};

// axios.prototype.updateLoaderState = function(this: AxiosInstance, config: AxiosRequestConfig) {
//   let requestsCounter: number = 0;
//   const startWatching = (counter: number) => {
//     this.interceptors.request.use(config => {
//       counter += 1;
//       return config;
//     });
//   };
//   const keepWatching = () => {
//     const update: number = (e: ProgressEvent<EventTarget>) => calculatePercentage(e.loaded, e.total);
//   };
// };

const useAxios = (
  method: Method,
  url: string,
  options?: {}
): { response: {}; isLoading: boolean; error: Error; loadProgress: number } => {
  const [response, setResponse]: [{} | null, any] = useState(null);
  const [error, setError]: [Error, any] = useState(null);
  const [isLoading, setIsLoading]: [boolean, any] = useState(null);
  const [loadProgress, setLoadProgress]: [number, any] = useState(0);

  useEffect(() => {
    const makeCall = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const call: AxiosResponse = await axios({
          method,
          url,
          ...determineProgress(method, setLoadProgress)
        });
        setResponse(call);
        return setIsLoading(false);
      } catch (err) {
        setError(err);
        return setIsLoading(false);
      }
    };

    makeCall();
  }, []);

  return { response, error, isLoading, loadProgress };
};

export const helpers = {
  determineProgress
};

export default useAxios;

// export const useXhr = (
//   method: string,
//   url: string,
//   options?: {}
// ): { response: {}; isLoading: boolean; error: Error; loadProgress: number } => {
//   const [response, setResponse]: [{} | null, any] = useState(null);
//   const [error, setError]: [Error, any] = useState(null);
//   const [isLoading, setIsLoading]: [boolean, any] = useState(null);
//   const [loadProgress, setLoadProgress]: [number, any] = useState(0);
//   const xhr: XMLHttpRequest = new XMLHttpRequest();
// };
