setInterval(() => {
    date=new Date();
    htime=date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();
    hrrotation=(30*htime)+(mtime/2)+(stime/120);
    minrotation=(6*mtime)+(stime/10);
    secrotation=6*stime;
    hours.style.transform=`rotate(${hrrotation}deg)`;
    minute.style.transform=`rotate(${minrotation}deg)`;
    second.style.transform=`rotate(${secrotation}deg)`;
    // The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.
    // rotate:rotate(angle)	Defines a 2D rotation, the angle is specified in the parameter
}, 1000);//1000milesec=1sec
//...........................digital clock..........................
