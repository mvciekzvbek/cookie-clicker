export function createStore() {
  return {
    score: 0,
    nextBreakingPoint: 10,
    level: 1,
    increment: function () {
      this.score++;
      if (this.score >= this.nextBreakingPoint) {
        this.level++;
        this.nextBreakingPoint = this.nextBreakingPoint * 2;
      }
    },
    achievements: [],
    addAchievement: function (achievement) {
      this.achievements.push(achievement);
    }
  };
}
