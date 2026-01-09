function checkVotingEligibility(age) {
  // implement your solution here
  // if (!Number.isInteger(age)) return null

  if (age >= 18 && age <= 150) return "Eligible to vote"
  else return "Not eligible to vote"
}

module.exports = { checkVotingEligibility };