test ("Add empty string return zero", function() {

    //Arrange

    let input = "";

    //Act

    let result = add(input);

    //Assert

    expect(result).toEqual(0);

})

