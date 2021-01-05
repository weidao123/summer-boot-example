import {Schedule, ScheduleHandler, ScheduleJob} from "summer-boot";

@Schedule("30 * * * * *")
export default class MySchedule implements ScheduleHandler {
    public job: ScheduleJob;

    public run(date: Date): void {
        console.log("定时任务被执行");
    }
}
