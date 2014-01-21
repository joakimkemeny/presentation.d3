/* global d3 */
(function (d3) {
	'use strict';

	var width = 960;
	var height = 700;
	var radius = Math.min(width, height) / 2;
	var color = d3.scale.category20c();

	var svg = d3.select('body').append('svg')
			.attr('width', width).attr('height', height)
			.append('g')
			.attr('transform', 'translate(' + width / 2 + ',' + height * 0.52 + ')');

	var partition = d3.layout.partition().sort(null)
			.size([2 * Math.PI, radius * radius])
			.value(function () { return 1; });

	var arc = d3.svg.arc()
			.startAngle(function (d) { return d.x; })
			.endAngle(function (d) { return d.x + d.dx; })
			.innerRadius(function (d) { return Math.sqrt(d.y); })
			.outerRadius(function (d) { return Math.sqrt(d.y + d.dy); });

	d3.json('flare.json', function (error, root) {
		svg.datum(root).selectAll('path')
				.data(partition.nodes)
				.enter().append('path')
				.attr('display', function (d) { return d.depth ? null : 'none'; })
				.attr('d', arc)
				.style('stroke', '#fff')
				.style('fill', function (d) { return color((d.children ? d : d.parent).name); })
				.style('fill-rule', 'evenodd')
				.each(stash);
	});

	function stash(d) {
		d.x0 = d.x;
		d.dx0 = d.dx;
	}

})(d3);
