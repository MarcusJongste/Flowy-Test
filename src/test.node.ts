import flowytest from 'flowy-test';

flowytest
    .then((testResult) => {
        console.log(`Ran (${testResult.numberOfTestsRan}) | success:${testResult.numberOfSuccess} | success:${testResult.numberOfFailure}`);
        testResult.unitTestResults.forEach((testResult) => {
            if (testResult.outcome === 'failure') {
                console.log(testResult);
            }
        })
        console.log('testing completed');
    })