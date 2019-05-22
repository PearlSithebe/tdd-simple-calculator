describe("Calculator", function() {

    it("should be able to add two numbers", function() {
        var results = add(0,0);
        expect (results).toEqual(0);
    })
    it("should be able to add negative numbers", function(){
        var results = add(-1,-1);
        expect(results).toEqual(-2);

    })
    it("should be able to add positive numbers", function(){
        var results = add(4,5);
        expect (results).toEqual(9);
    })
    
    it("should be able to add multiple numbers ", function(){
        var results = add(3,4,7);
        expect (results).toEqual(14);
    })
    it ("should be able to add decimal numbers", function(){
        var results = add(4.5,3.5);
        expect(results).toEqual(8);
    })
    it ("should be able to add string and numbers",function(){
        var results = add(7,"3",5);
        expect (results).toEqual(15);
    })
    it("should be able multiply two numbers", function(){
        var results = multiply(1,2);
        expect (results).toEqual(2);

    })
    it("should be able multiply multiple numbers", function(){
    var results = multiply(1,2,3,4)
    expect (results).toEqual(24);
    })

     it("should be able multiply decimal numbers", function(){   
         var results = multiply(3.5,6.7)
         expect (results).toEqual(23.45)
     })
     it("should be able multiply strings and numbers", function(){
         var results = multiply(2,"6",3)
         expect (results).toEqual(36)
     })
})