using StudySmart.Models.DataEntities;
using Microsoft.EntityFrameworkCore;

namespace StudySmart.Models.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
        }
        public DbSet<Activities> ActivitiesDB { get; set; }
        public DbSet<Classes> ClassesDB { get; set; }
    }
}