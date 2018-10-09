// get the tabs and attach an event listener to them
var tabs = document.querySelectorAll('.nav a');
console.log(tabs);

tabs.forEach(function(tab){
    tab.addEventListener('click', makeActive);
});

// use classList to add active when clicked
function makeActive(){
    makeInactive()
    this.classList.add('active');
    event.preventDefault();
};

// called before making the tabs active to remove active from all tabs
function makeInactive(){
    tabs.forEach(tab => tab.classList.remove('active'))
}

var cuisines =
'Cuisines. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.';

var chefs =
'Chefs. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.';

var reviews =
'Reviews. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.';

var delivery =
'Delivery. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.';

var contentPara = document.querySelector('.content');
contentPara.innerHTML = cuisines;