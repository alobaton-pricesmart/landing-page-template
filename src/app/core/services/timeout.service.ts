import { Observable, Subject, Subscription, timer } from 'rxjs';

export class TimeoutService {
  private count = 0;
  private timerSubscription: Subscription;
  private timer: Observable<number>;
  private resetOnTrigger = false;
  private dateTimer: Observable<any>;
  private dateTimerSubscription: Subscription;
  private dateTimerInterval: number = 1000 * 60 * 5;
  private timeoutExpired: Subject<number> = new Subject<number>();
  private timeoutMilliseconds: any;

  constructor() {
    this.startDateCompare();
  }

  private startDateCompare() {
    this.dateTimer = timer(this.dateTimerInterval);
    this.dateTimerSubscription = this.dateTimer.subscribe(n => {
      this.dateTimerSubscription.unsubscribe();
      this.startDateCompare();
    });
  }

  private setSubscription() {
    this.timer = timer(this.timeoutMilliseconds);
    this.timerSubscription = this.timer.subscribe(n => {
      this.timerComplete(n);
    });
  }

  private timerComplete(n: number) {
    this.timeoutExpired.next(++this.count);

    if (this.resetOnTrigger) {
      this.startTimer();
    }
  }

  public setTimeoutMilliseconds(timeoutMilliseconds: any) {
    this.timeoutMilliseconds = timeoutMilliseconds;
  }

  public startTimer() {
    if (this.timerSubscription) {
      this.stopTimer();
    }

    this.setSubscription();
  }

  public stopTimer() {
    this.timerSubscription.unsubscribe();
  }
}
