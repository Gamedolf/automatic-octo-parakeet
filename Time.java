public class Time {
  int hours;
  int minutes;
  int seconds;

  public Time(int hours, int minutes, int seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.scale(0);
  }

  public void scale(int seconds) {
    int totalSecs = 3600 * this.hours + 60 * this.minutes + this.seconds + seconds;
    int newHrs = totalSecs / 3600;
    int newMins = totalSecs / 60 - newHrs * 60;
    int newSecs = totalSecs - newHrs * 3600 - newMins * 60;
    this.hours = newHrs % 24;
    this.minutes = newMins;
    this.seconds = newSecs;
  }

  public String timeString() {
    return String.format("%02d:%02d:%02d", this.hours, this.minutes, this.seconds);
  }

  public static void main(String args[]) {
    Time t1 = new Time(1, 30, 20);
    System.out.println(t1.timeString()); // "01:30:20"
    t1.scale(400);
    System.out.println(t1.timeString()); // "01:37:00"

    Time t2 = new Time(1, 100, 0);
    System.out.println(t2.timeString()); // "02:40:00"
  }

}
