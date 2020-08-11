function createNormalQuestion(countries, type) {
  const correctAnswerPlace = Math.floor(Math.random() * 4);
  const countryIndex = Math.floor(Math.random() * 250);

  const country = countries[countryIndex];
  const name = country.name;
  const value = country[type];
  let trimmedTypeText = '';

  if (type === 'capital') {
    trimmedTypeText = 'capital';
  } else if (type === 'alpha3Code') {
    trimmedTypeText = 'alpha 3 code';
  } else if (type === 'nativeName') {
    trimmedTypeText = 'native name';
  } else if (type === 'population') {
    trimmedTypeText = 'population';
  } else {
    trimmedTypeText = 'demonym';
  }

  const question =
    'Which of the following is the ' + trimmedTypeText + ' of ' + name;

  const tempOptions = [
    value,
    countryIndex > 0 && countries[countryIndex - 1][type],
    countryIndex > 1 && countries[countryIndex - 2][type],
    countryIndex < 249 && countries[countryIndex + 1][type],
    countryIndex < 248 && countries[countryIndex + 2][type],
  ];

  const options = [
    correctAnswerPlace === 0 ? tempOptions[0] : tempOptions[1],
    correctAnswerPlace === 1 ? tempOptions[0] : tempOptions[2],
    correctAnswerPlace === 2 ? tempOptions[0] : tempOptions[3],
    correctAnswerPlace === 3 ? tempOptions[0] : tempOptions[4],
  ];

  return {
    question,
    options,
    correctAnswerPlace,
  };
}

function createRegionQuestion(countries) {
  const countryIndex = Math.floor(Math.random() * 250);

  const country = countries[countryIndex];
  const { name, region } = country;

  let correctAnswerPlace = 0;

  if (region === 'Africa') {
    correctAnswerPlace = 0;
  } else if (region === 'Americas') {
    correctAnswerPlace = 1;
  } else if (region === 'Americas') {
    correctAnswerPlace = 2;
  } else if (region === 'Americas') {
    correctAnswerPlace = 3;
  } else {
    correctAnswerPlace = 4;
  }

  const question = 'Which of the following is the region of ' + name;

  const options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return {
    question,
    options,
    correctAnswerPlace,
  };
}

function createSubregionQuestion(countries) {
  const countryIndex = Math.floor(Math.random() * 250);

  const country = countries[countryIndex];
  const { name, subregion } = country;

  const correctAnswerPlace = setSubregionPlace(subregion);

  const question = 'Which of the following is the subregion of ' + name;

  const options = [
    'Northern Africa',
    'Eastern Africa',
    'Middle Africa',
    'Southern Africa',
    'Western Africa',
    'Central Asia',
    'Eastern Asia',
    'Southeastern Asia',
    'Southern Asia',
    'Western Asia',
    'Eastern Europe',
    'Northern Europe',
    'Southern Europe',
    'Western Europe',
    'Caribbean',
    'Central America',
    'South America',
    'Australia and New Zealand',
    'Melanesia',
    'Micronesia',
    'Polynesia',
  ];

  return {
    question,
    options,
    correctAnswerPlace,
  };
}

function setSubregionPlace(subregion) {
  if (subregion === 'Northern Africa') {
    return 0;
  } else if (subregion === 'Eastern Africa') {
    return 1;
  } else if (subregion === 'Middle Africa') {
    return 2;
  } else if (subregion === 'Southern Africa') {
    return 3;
  } else if (subregion === 'Western Africa') {
    return 4;
  } else if (subregion === 'Central Asia') {
    return 5;
  } else if (subregion === 'Eastern Asia') {
    return 6;
  } else if (subregion === 'Northern Europe') {
    return 7;
  } else if (subregion === 'Southern Europe') {
    return 8;
  } else if (subregion === 'Western Europe') {
    return 9;
  } else if (subregion === 'Caribbean') {
    return 10;
  } else if (subregion === 'Central America') {
    return 11;
  } else if (subregion === 'South America') {
    return 12;
  } else if (subregion === 'Australia and New Zealand') {
    return 13;
  } else if (subregion === 'Melanesia') {
    return 14;
  } else if (subregion === 'Micronesia') {
    return 15;
  } else {
    return 0;
  }
}

function createLanguageQuestion(countries) {
  const countryIndex = Math.floor(Math.random() * 250);

  const country = countries[countryIndex];
  let languages = [];

  const currentLanguage = country.languages[0]['name'];

  countries.map((country) => {
    const currentLanguage = country.languages[0]['name'];
    let isEqual = false;

    languages.filter((language) => {
      if (language === currentLanguage) {
        isEqual = true;
      }
    });

    if (isEqual === false) {
      languages.push(currentLanguage);
    }
  });

  const { name } = country;

  let correctAnswerPlace = 0;

  languages.map((language, index) => {
    if (currentLanguage === language) {
      correctAnswerPlace = index;
    }
  });

  const question = 'Which of the following is the region of ' + name;

  const options = languages;

  return {
    question,
    options,
    correctAnswerPlace,
  };
}

function createCurrencyQuestion(countries) {
  const countryIndex = Math.floor(Math.random() * 250);

  const country = countries[countryIndex];
  let currencies = [];

  const currentCurrency = country.currencies[0]['name'];

  countries.map((country) => {
    const currentCurrency = country.currencies[0]['name'];
    let isEqual = false;

    currencies.filter((currency) => {
      if (currency === currentCurrency) {
        isEqual = true;
      }
    });

    if (isEqual === false) {
      currencies.push(currentCurrency);
    }
  });

  const { name } = country;

  let correctAnswerPlace = 0;

  currencies.map((currency, index) => {
    if (currentCurrency === currency) {
      correctAnswerPlace = index;
    }
  });

  const question = 'Which of the following is the currency of ' + name;

  const options = currencies;

  return {
    question,
    options,
    correctAnswerPlace,
  };
}

function createFlagQuestion(countries) {
  const countryIndex = Math.floor(Math.random() * 250);

  const country = countries[countryIndex];

  const { name } = country;
  const flag = `https://www.countryflags.io/${country.topLevelDomain[0].substr(
    1,
  )}/flat/64.png`;
  const flags = [];

  countries.map((country) => {
    const countryTopLevelDomain = country.topLevelDomain[0].substr(1);
    flags.push(
      `https://www.countryflags.io/${countryTopLevelDomain}/flat/64.png`,
    );
  });

  let correctAnswerPlace = 0;

  const question = 'Which of the following is the flag of ' + name;

  const tempOptions = [
    flag,
    countryIndex > 0 && flags[countryIndex - 1],
    countryIndex > 1 && flags[countryIndex - 2],
    countryIndex < 249 && flags[countryIndex + 1],
    countryIndex < 248 && flags[countryIndex + 2],
  ];

  const options = [
    correctAnswerPlace === 0 ? tempOptions[0] : tempOptions[1],
    correctAnswerPlace === 1 ? tempOptions[0] : tempOptions[2],
    correctAnswerPlace === 2 ? tempOptions[0] : tempOptions[3],
    correctAnswerPlace === 3 ? tempOptions[0] : tempOptions[4],
  ];

  return {
    question,
    options,
    correctAnswerPlace,
  };
}

export {
  createNormalQuestion,
  createRegionQuestion,
  createSubregionQuestion,
  createLanguageQuestion,
  createCurrencyQuestion,
  createFlagQuestion,
};
