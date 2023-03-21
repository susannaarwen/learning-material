const samsHobbies = ["cycling", "skiing", "dancing", "singing", "bungee jumping", "mountain climbing", "parachuting", "crochet", "ice-cream making"];

const sallysHobbies = ["dancing", "swimming", "singing", "ice-cream making", "stargazing", "knitting", "parachuting", "painting", "graffiti", "crochet"];

const mutualHobbies = [];

for (let i = 0; i < samsHobbies.length; i++) {
  for (let j = 0; j < sallysHobbies.length; j++) { 
    if (samsHobbies[i] === sallysHobbies[j]) { 
      mutualHobbies.push(samsHobbies[i])
    }
  }
}

console.log(mutualHobbies);