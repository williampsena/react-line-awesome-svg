import * as React from 'react';
function SvgGrunt(props) {
    return (<svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path d="M17.12 3.004c-1.498.528-1.874 1.333-1.985 2.064-.386-.274-.34-1.171-.365-1.4-.381.046-1.481 1.111-1.43 2.451-.102.025-.2.056-.3.086-.33-.447-1.274-1.598-2.507-1.994a4.487 4.487 0 00-1.215-.182c-1.472 0-2.34.879-2.35.889l-.41.477.624.123c.01 0 1.045.217 1.472.892.071.112.09.334.112.572.01.142-.02.28-.045.413-.02.096-.042.197-.047.298-.391.017-.721.094-.99.23a1.352 1.352 0 00-.715.862c-.254.924.568 1.955.6 1.99.095.173.136 1.412-.087 1.909-.03.07-.112.136-.218.222-.036.025-.07.056-.112.086-.31.233-.783.593-.783 1.41 0 1.122 1.138 1.732 2.05 2.22.153.08.296.156.423.232.137.08.619.58.619 1.326 0 .35-.032 2.014-.19 3.166-.589-.502-1.127-1.314-1.248-2.223 0 0-1.481 1.148-1.044 3.594.264 1.497 1.176 2.34 2.384 2.775.447.97 1.492 2.32 3.416 2.518.731.599 1.747.988 3.229.988h.01c1.477 0 2.492-.39 3.228-.988 1.923-.198 2.97-1.549 3.416-2.518 1.208-.442 2.116-1.278 2.385-2.775.416-2.455-1.07-3.598-1.07-3.598-.122.908-.66 1.716-1.248 2.219-.157-1.152-.19-2.818-.19-3.168 0-.746.482-1.242.62-1.324.126-.076.274-.154.421-.235.914-.487 2.05-1.094 2.05-2.216 0-.822-.472-1.179-.782-1.413a2.158 2.158 0 01-.112-.086c-.107-.086-.188-.151-.218-.222-.223-.497-.183-1.736-.086-1.908.03-.03.848-1.06.6-1.989a1.359 1.359 0 00-.718-.863c-.269-.137-.604-.213-.99-.228a1.909 1.909 0 00-.045-.3 1.397 1.397 0 01-.047-.41c.02-.238.043-.458.114-.574.426-.675 1.46-.892 1.47-.892l.625-.121-.412-.483c-.005-.01-.877-.888-2.35-.888-.4 0-.811.067-1.222.199-1.228.396-2.178 1.547-2.508 1.994a6.9 6.9 0 00-.486-.137c-.213-.802.457-1.955.457-1.955s-.69-.151-1.71.772c-.131-.33-.41-1.04-.09-1.887zM9.327 4.793c.31 0 .61.046.899.137.903.294 1.605 1.177 1.914 1.629-.081.036-.163.07-.245.11-.127.062-.25.127-.36.188-.133-.274-.422-.694-1.052-1.136a2.53 2.53 0 00-1.46-.451 3.547 3.547 0 00-.458.044 3.03 3.03 0 00-.492-.27 3.32 3.32 0 011.254-.251zm13.338 0c.558 0 1.01.152 1.254.254-.157.07-.325.16-.492.267a2.876 2.876 0 00-.467-.04c-.533 0-1.04.158-1.457.453-.624.442-.914.857-1.05 1.136a4.002 4.002 0 00-.36-.187 4.752 4.752 0 00-.24-.114c.31-.462 1.01-1.343 1.914-1.632.284-.091.589-.137.898-.137zm.168 1.059a2.087 2.087 0 00-.117.162c-.167.264-.198.59-.223.904-.025.325-.056.632-.223.861a6.32 6.32 0 00-.584.139 3.449 3.449 0 00-.533-.568c.071-.244.28-.818.686-1.143.284-.218.618-.34.994-.355zM9.16 5.857c.376.015.711.133.99.356.406.32.615.894.686 1.137a3.077 3.077 0 00-.533.568 8.36 8.36 0 00-.584-.139c-.167-.223-.191-.53-.217-.855-.025-.315-.058-.64-.225-.904a1.912 1.912 0 00-.117-.163zm6.836.793c1.416 0 2.686.27 3.772.803.72.35.994.619 1.095.766-1.726.766-2.683 2.344-2.693 2.36l-.18.294.285-.197s.01-.006.02-.016c.442-.345 1.98-1.513 3.254-1.914.355-.112 1.045-.305 1.67-.305.32 0 .572.053.765.149a.631.631 0 01.34.394c.127.462-.31 1.149-.476 1.352a.449.449 0 00-.067.111 7.026 7.026 0 01-.015-.73c-.203.447-.33 1.598-.258 2.181.183 1.487.797 2.248.797 2.248-.041-.08-.091-.39-.137-.755l.111.09.026.021c.233.188.45.36.45.924 0 .72-.781 1.14-1.532 1.547-.147.076-.29.156-.426.232-.442.254-.914.848-.969 1.736-.046.741.047 2.534.174 3.854-.629.244-1.356.324-2.016.344a5.88 5.88 0 01-.279-.664c-.036-.102-.995-2.595-1.34-3.159.28 1.98.889 3.74 1.194 4.547a4.253 4.253 0 00-.594-.035h-5.94c-.223 0-.42.014-.593.035.305-.807.919-2.568 1.193-4.547-.345.568-1.304 3.062-1.34 3.159a6.154 6.154 0 01-.28.664c-.66-.02-1.38-.101-2.015-.344.127-1.32.219-3.108.174-3.854-.046-.884-.524-1.483-.965-1.736-.137-.08-.284-.156-.426-.232-.756-.406-1.533-.826-1.533-1.547 0-.563.22-.741.453-.924l.026-.022c.036-.03.07-.06.111-.09-.046.366-.096.675-.137.756 0 0 .614-.76.797-2.248.071-.584-.057-1.74-.26-2.181.01.249.002.496-.013.73a.596.596 0 00-.067-.111c-.162-.203-.598-.89-.476-1.352.046-.178.157-.303.34-.394.193-.096.446-.149.765-.149.624 0 1.314.188 1.67.305 1.274.406 2.811 1.57 3.252 1.914a.09.09 0 00.022.016l.283.197-.178-.295c-.01-.015-.968-1.593-2.7-2.36.103-.146.377-.41 1.097-.765 1.086-.533 2.358-.803 3.77-.803zM14.61 11.64c.002 0 .74.892 1.383.902h.01c.645-.005 1.38-.902 1.38-.902-.501.305-.954.41-1.386.42a2.718 2.718 0 01-1.387-.42zm-4.795.064c-.249.006-.507.037-.775.102.217.05.45.123.682.209-.214.102-.332.36-.358.607-.056.508.266.97.266.97.036-.38.11-.651.201-.843.02.523.162 1.194.65 1.732.35.386 1.809 1.182 2.788.31.05.121.107.269.152.43.147.524-.139 1.286-.139 1.286s.766-.87.705-1.65c.548-.026 1.088-.427 1.073-.99 0 0-.96.529-1.803-.446-.43-.497-1.697-1.757-3.442-1.717zm12.364.01c-1.747-.04-3.01 1.219-3.44 1.717-.848.974-1.802.447-1.802.447-.01.553.528.957 1.076.978-.061.787.705 1.65.705 1.65s-.284-.761-.137-1.284c.046-.162.102-.306.152-.432.98.878 2.437.077 2.782-.309.487-.538.622-1.209.648-1.732.091.193.173.464.203.844 0 0 .327-.464.266-.97-.03-.255-.148-.508-.356-.599h-.005c.233-.09.467-.163.685-.209a3.66 3.66 0 00-.777-.101zM10.8 12.53c.99.558 1.898 1.303 2.28 1.877-.29.167-1.103.528-1.93-.086-.524-.386-.498-1.329-.35-1.79zm10.392 0c.152.462.175 1.406-.353 1.797-.827.614-1.635.253-1.924.08.38-.579 1.288-1.319 2.277-1.877zM7.83 20.551c.553 1.746 2.396 2.247 3.777 2.303a8.704 8.704 0 01-.355.507l-.07.073c-.365.396-.437.938-.21 1.613-1.151-.006-2.348-.498-2.952-1.498-.614-1.015-.444-2.745-.19-2.998zm16.34.004c.253.255.426 1.984-.193 2.994-.61 1-1.808 1.488-2.95 1.508.228-.675.156-1.225-.209-1.616a.975.975 0 00-.07-.076 8.37 8.37 0 01-.355-.508c1.38-.06 3.224-.556 3.777-2.302zm-11.188 2.924h6.03c.766 0 1.106.198 1.248.365.213.244.227.639.045 1.172-.334.954-1.233 3.28-4.309 3.285-3.076-.005-3.973-2.325-4.309-3.285-.188-.533-.172-.924.047-1.172.147-.167.482-.365 1.248-.365zm4.65.771c-.212 0-.365.046-.452.137-.112.117-.075.264-.045.34.05.132.279.573.66.98a.747.747 0 00.557.229c.223 0 .442-.081.6-.213.116-.102.517-.468.694-.92.066-.167.05-.305-.046-.4-.065-.067-.203-.148-.477-.153h-1.49zm-4.751.006c-.28 0-.417.08-.483.146-.096.102-.11.238-.044.41.178.462.579.839.695.946.157.137.38.217.597.217a.754.754 0 00.56-.233c.38-.416.603-.869.66-1.006.03-.076.064-.226-.048-.343-.09-.092-.237-.137-.445-.137h-1.492zm-2.541 1.502c.305.056.618.095.943.12.178.407.375.808.623 1.173a3.527 3.527 0 01-1.566-1.293zm11.316 0c-.33.482-.837.994-1.568 1.293.249-.365.448-.766.625-1.172.325-.025.638-.065.943-.121z"/>
    </svg>);
}
export default SvgGrunt;
