const fn = require('./fn');

// test('1은 1이야', ()=>{
//     expect(1).toBe(1);
// })

// test('2 더하기 3은 5야', ()=>{
//     expect(fn.add(2,3)).toEqual(5);
// })


// test('2 더하기 3은 6이 아니야', ()=>{
//     expect(fn.add(2,3)).not.toBe(6);
// })

// test("이름과 나이를 전달받아서 객체를 반환해줘", ()=>{ 
//     expect(fn.makeUser("Mike",30)).toStrictEqual({ 
//         name : "Mike",
//         age : 31
//     });
// })

// mock function 
const mockFn = jest.fn();
// function forEachAdd1(arr){
//     arr.forEach(num => {
//         mockFn(num+1)
//     });
//  }

//  forEachAdd1([10,20,30]);

//  test('함수호출은 3번 됩니다.', ()=>{ 
//     expect(mockFn.mock.calls.length).toBe(3)
//  })

//  test('전달된 값은 11 21 31입니다.', ()=>{ 
//     expect(mockFn.mock.calls[0][0]).toBe(11);
//     expect(mockFn.mock.calls[1][0]).toBe(21);
//     expect(mockFn.mock.calls[2][0]).toBe(31); //  mockFn.mock.results[0].value

//  })

mockFn.mockResolvedValue({ name : 'mike'});

test('받아온 이름은 mike이다',  ()=>{ 
    mockFn().then(res=>{ 
        expect(res.name).toBe('mike')
    })
})
 