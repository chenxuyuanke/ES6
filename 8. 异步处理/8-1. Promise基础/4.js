console.log(4)

const pro = new Promise((resolve, reject) => {
    console.log(1)

    resolve()
    console.log(2)

    // 任务的具体执行流程，该函数会立即被执行
    // 调用 resolve(data)，可将任务变为 fulfilled 状态， data 为需要传递的相关数据
    // 调用 reject(reason)，可将任务变为 rejected 状态，reason 为需要传递的失败原因
});

pro.then(
    (data) => {
        console.log(3)

        // onFulfilled 函数，当任务完成后，会自动运行该函数，data为任务完成的相关数据
    },
    (reason) => {
        // onRejected 函数，当任务失败后，会自动运行该函数，reason为任务失败的相关原因
    }
);

