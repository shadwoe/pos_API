const formRespon = {
    success: function(res, data){
        const responseObj = {
            isSuccess: true,
            status: 200,
            data: data
        }
        res.json(responseObj);
    },
    error: function(res, err){
        const responseObj = {
            isSuccess: false,
            status: 500,
            data: err
        }
        res.json(responseObj);
    },
    pagination: ({query}, res, data) =>{
        const page = Number(query.page);
        const limit = Number(query.limit);
        const prevPage=
            page ===1 ? "": `/getalldata/?page=${page-1}&limit=${limit}`;
        const nextPage = `/getalldata/?page=${page + 1}&limit=${limit}`;
        const responseObj = {
            success : true,
            status : 200,
            data,
            pageInfo: {
                currentPage : query.page,
                limit: query.limit,
                prevPage,
                nextPage,
            }
        }
        res.json(responseObj)
    },
    paginationSort: (query, res, data) =>{
        const page = Number(query.page);
        const limit = Number(query.limit);
        const prevPage=
            page ===1 ? "": `/sortby/?sortBy='${query.sortBy}'&sortOrder='${query.sortOrder}'&page=${page-1}&limit=${limit}`;
        const nextPage = `/sortby/?sortBy='${query.sortBy}'&sortOrder='${query.sortOrder}'&page=${page+1}&limit=${limit}`;
        const responseObj = {
            success : true,
            status : 200,
            data,
            pageInfo: {
                currentPage : query.page,
                limit: query.limit,
                prevPage,
                nextPage,
            }
        }
        res.json(responseObj)
    }


}

module.exports = formRespon;