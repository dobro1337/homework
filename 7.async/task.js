class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(launchTime,callback,id) {
        if( id === undefined){               
            throw new Error("id пустой");
        }
        else if(this.alarmCollection.some((element) => element.id === id )){
            console.error("Звонок с таким id существует");
            return 0;
        }
        else {
            return this.alarmCollection.push({id,launchTime,callback});
        }
    }
    removeClock(deleteId) {
         let index = this.alarmCollection.findIndex(element => element.id === deleteId);
         if (index > -1) {
            this.alarmCollection.splice(index,1);
         }
    }
    getCurrentFormattedTime() {
        let date = new Date().toTimeString();
        return `${date.slice(0,5)}`;
    }
    start() {
        let checkClock = (clock) => {
            if(clock.launchTime === this.getCurrentFormattedTime()){
               return clock.callback();
            }
        }
        if(this.timerId === null)
        {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach((element) => {checkClock(element)});
            })
        }
    }
    stop() {
        if(this.timerId){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        console.log(`Всего будильников ${this.alarmCollection.length}`);
        this.alarmCollection.forEach((element) => {console.log(`id:${element.id} time:${element.launchTime}`)});
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection.splice(0,this.alarmCollection.length);
    }
    
}

function testCase() {
    let alarm = new AlarmClock();
    alarm.addClock("19:28",()=>console.log("звонок 1"),1);
    alarm.addClock("19:29",()=>{console.log("звонок 2");alarm.removeClock(2)},2);
    alarm.addClock("19:30",()=>{console.log("звонок 3");alarm.stop();alarm.clearAlarms();alarm.printAlarms()},3);
    alarm.printAlarms();
    alarm.start();
}