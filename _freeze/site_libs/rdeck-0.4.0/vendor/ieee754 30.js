/*! For license information please see ieee754.js.LICENSE.txt */
(self.webpackChunkrdeck=self.webpackChunkrdeck||[]).push([[953],{645:(a,o)=>{o.read=function(a,o,t,h,r){var M,e,p=8*r-h-1,w=(1<<p)-1,f=w>>1,n=-7,i=t?r-1:0,s=t?-1:1,u=a[o+i];for(i+=s,M=u&(1<<-n)-1,u>>=-n,n+=p;n>0;M=256*M+a[o+i],i+=s,n-=8);for(e=M&(1<<-n)-1,M>>=-n,n+=h;n>0;e=256*e+a[o+i],i+=s,n-=8);if(0===M)M=1-f;else{if(M===w)return e?NaN:1/0*(u?-1:1);e+=Math.pow(2,h),M-=f}return(u?-1:1)*e*Math.pow(2,M-h)},o.write=function(a,o,t,h,r,M){var e,p,w,f=8*M-r-1,n=(1<<f)-1,i=n>>1,s=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,u=h?0:M-1,N=h?1:-1,c=o<0||0===o&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(p=isNaN(o)?1:0,e=n):(e=Math.floor(Math.log(o)/Math.LN2),o*(w=Math.pow(2,-e))<1&&(e--,w*=2),(o+=e+i>=1?s/w:s*Math.pow(2,1-i))*w>=2&&(e++,w/=2),e+i>=n?(p=0,e=n):e+i>=1?(p=(o*w-1)*Math.pow(2,r),e+=i):(p=o*Math.pow(2,i-1)*Math.pow(2,r),e=0));r>=8;a[t+u]=255&p,u+=N,p/=256,r-=8);for(e=e<<r|p,f+=r;f>0;a[t+u]=255&e,u+=N,e/=256,f-=8);a[t+u-N]|=128*c}}}]);