import flowytest from 'flowy-test';

flowytest
    .then((testResult) => {
        console.log(`Ran (${testResult.numberOfTestsRan}) | success:${testResult.numberOfSuccess} | failure:${testResult.numberOfFailure}`);
        Object.entries(testResult.unitTestResults).forEach(([fullPath, testResults]) => {
            testResults.forEach((testResult) => {
                if (testResult.result === 'failure') {
                    console.log(testResult);
                }
            })

        })
        console.log('testing completed');
    })