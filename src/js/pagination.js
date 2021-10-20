import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import filmsApiProg from './apiService';
import filmsRender from './filmsPagination';

const container = document.getElementById('tui-pagination-container');
const pagination = new Pagination(container,{
    itemsPerPage: 20,
    visiblePages: 7,
    
});

const userpage = localStorage.getItem('page')?localStorage.getItem('page'): 1;
loadPage(userpage);
function loadPage(currentPage) {
    fetchTrending(currentPage).then(r => {
        pagination.reset(r.total_pages);
        pagination.movePageTo(currentPage);
        
    })
    moveEvent();
}

function moveEvent() {
    pagination.on('afterMove', event => {
        const currentPage = event.page;
        localStorage.setItem('page', currentPage);
        filmsRender.renderTrendingMovies(currentPage);
});
}

let t;
function up() {
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

//onclick="return up()"  -  этот код нужно вставить в пагинацию кнопок, чтобы вверх при нажатии скролилось

async function fetchTrending(currentPage){
    const response = await filmsApiProg.getTrend(currentPage);
    return response;
};
