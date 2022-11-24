var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors(options => options.WithOrigins("*").AllowAnyMethod().AllowAnyHeader());

app.UseHttpsRedirection();

var lots = new Lot[]
{
    new Lot(1, "A", "Descrip", DateTime.Now, DateTime.MaxValue, 50, 5),
    new Lot(2, "B", "Descript", DateTime.Now, DateTime.MaxValue, 50, 5),
    new Lot(3, "C", "Descripti", DateTime.Now, DateTime.MaxValue, 50, 5),
    new Lot(4, "D", "Descriptio", DateTime.Now, DateTime.MaxValue, 50, 5),
    new Lot(5, "E", "Description", DateTime.Now, DateTime.MaxValue, 50, 5),
};

app.MapGet("/lots", () => lots);

app.MapDelete("/lots/{id}", (int id) => lots = lots.Where(x => x.Id != id).ToArray());

app.Run();

record Lot(int Id, string Title, string Description, DateTime Start, DateTime End, double StartPrice, double Step);