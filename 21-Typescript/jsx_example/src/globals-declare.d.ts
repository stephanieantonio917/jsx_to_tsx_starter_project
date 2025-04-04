// globals.d.ts
declare module 'globals' {
    const value: any;
    export default value;
  }
  
  declare module '*.svg' {
    const content: string;
    export default content;
  }